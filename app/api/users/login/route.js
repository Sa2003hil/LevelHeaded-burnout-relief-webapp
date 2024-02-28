import { connect } from '@/utils/database.js';
import User from '@/models/userModel.js';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        // console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ error: 'User does not exist' }, { status: 400 })
        }

        //check if password is correct
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 400 })
        }

        // create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        // create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: '1d' })

        // set this token to the user cookie
        const response = NextResponse.json({
            message: 'Login successful',
            success: true,
            token: token,
            userN: {
                username: user.username,
            }
        })

        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response;


    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}