"use client"

import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import prof from '../assets/prof.png'
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "@/context/authContext";

export default function Profile() {
    const { updateAuthData } = useAuth();
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])


    const onLogin = async () => {
        try {
            setLoading(true);
            const res = await axios.post("/api/users/login", user);
            console.log("login success", res.data);
            const { token, userN } = res.data;
            updateAuthData({ token, userN });
            toast.success("Login Successful");
            setTimeout(() => {
                router.push("/");
            }, 3000);
        } catch (error) {
            console.log("login failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }



    return (
        <div className="flex py-10 gap-12 m-auto w-full relative">
            <Toaster />

            <div class="relative h-[70vh] flex flex-col text-gray-700 bg-white shadow-md w-[30vw] rounded-xl bg-clip-border">
                <Typography color="blue-gray" className="flex justify-center m-auto text-gray-500 text-2xl font-thin  gap-1 mb-3">
                    Update Your Profile
                </Typography>
                <hr className=" mb-2 w-[50%] m-auto" />
                <Typography color="blue-gray" className="flex justify-center m-auto text-4xl gap-1 mb-8">
                    Welcome to <span className=" text-[#858eae] font-medium">Pomodoro</span>
                </Typography>
                <div class="flex flex-col gap-4 p-6">
                    <div class="relative h-11 w-full min-w-[200px]">
                        <input
                            class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            id="email"
                            type="text"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />

                        <label
                            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Username
                        </label>
                    </div>
                    <div class="relative h-11 w-full min-w-[200px]">
                        <input
                            class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            id="password"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                        <label
                            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Password
                        </label>
                    </div>

                </div>
                <div class="p-6 pt-0">
                    <button
                        onClick={onLogin}
                        class="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        Update
                    </button>

                </div>
            </div>
            <div>
                <Typography variant="h4" color="blue-gray" className="flex absolute px-10 py-24 flex-col text-3xl gap-1 mb-8">
                    Update Your Profile
                    {/* <span>directly procced</span> */}
                </Typography>
                <Typography color="gray" className="mt-4  px-10 py-48  absolute font-medium flex flex-col" id="registerDiv">
                    if you want to update
                    <span>you can <Link href="/register" className="text-blue-800 font-semibold"> do here!</Link></span>
                </Typography>
                <Image
                    className=" object-fill"
                    height={700}
                    width={700}
                    src={prof}
                />

            </div>
        </div>
    )
}