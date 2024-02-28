import mongoose from "mongoose";

let UserModel;

if (mongoose.models && mongoose.models.users) {
    // If the model already exists, use it
    UserModel = mongoose.model("users");
} else {
    // Define the schema and create the model
    const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: [true, "Please provide a username"],
            unique: true,
        },
        email: {
            type: String,
            required: [true, "Please provide an email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please provide a password"],
        },
        isVerfied: {
            type: Boolean,
            default: false,
        },
        forgotPasswordToken: String,
        forgotPasswordTokenExpiry: Date,
        verifyToken: String,
        verifyTokenExpiry: Date,
    });

    // Create the model
    UserModel = mongoose.model("users", userSchema);
}

export default UserModel;
