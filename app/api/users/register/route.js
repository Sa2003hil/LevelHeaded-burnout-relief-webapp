import { connect } from '@/utils/database.js';
import User from '@/models/userModel.js';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        console.log(reqBody);

        // check if user already exists
        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ error: 'User already exists' }, { status: 400 });
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // save user and return response
        const savedUser = await newUser.save();

        return NextResponse.json({
            message: 'User created successfully',
            success: true,
            savedUser,
            status: 201
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
