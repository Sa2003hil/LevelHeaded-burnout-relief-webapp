"use client"
import Profile from "@/components/profile";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
export default function () {
    const [data, setData] = useState("nothing");

    const getUserDetails = async () => {
        const res = await axios.get('api/users/me');
        console.log(res.data);
        setData(res.data.data.username);
    }

    return (
        <div className="flex items-center justify-between flex-col w-full gap-8  rounded-[2rem] px-16">
            <Profile />
            {/* <h1>Profile</h1>
            <hr />
            <h2>{data === "nothing" ? "Nothing" : <Link
                href={`/profile/${data}`}
            >
                {data}
            </Link>}</h2>
            <p>Profile Page</p>
            <button onClick={getUserDetails}>Get User Details</button> */}
        </div>
    );
}
