import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from '@/models/userModel'
import { connect } from "@/utils/database";


connect();

export async function GET(request) {
    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({ _id: userId }).select("-password");
        return NextResponse.json({
            message: "User Found",
            data: user
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}