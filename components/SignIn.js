"use client"

import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Img from '../assets/VecNew.png'
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "@/context/authContext";

export default function SignIn() {
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
        <div className="flex gap-10 w-[100vw] relative">
            <Toaster />
            <div>
                <Typography variant="h4" color="blue-gray" className="flex absolute px-10 py-24 flex-col text-3xl gap-1 mb-8">
                    Sign In to
                    <span>directly procced</span>
                </Typography>
                <Typography color="gray" className="mt-4  px-10 py-48  absolute font-medium flex flex-col" id="registerDiv">
                    if you don't an account
                    <span>you can <Link href="/register" className="text-blue-800 font-semibold"> Register here!</Link></span>
                </Typography>
                <Image
                    className=" object-fill"
                    height={700}
                    width={700}
                    src={Img}
                />

            </div>
            <div class="relative h-[90vh] flex flex-col text-gray-700 bg-white shadow-md w-[30vw] rounded-xl bg-clip-border">
                <Typography color="blue-gray" className="flex justify-center m-auto text-gray-500 text-2xl font-thin  gap-1 mb-3">
                    Sign In
                </Typography>
                <hr className=" mb-2 w-[50%] m-auto" />
                <Typography color="blue-gray" className="flex justify-center m-auto text-4xl gap-1 mb-8">
                    Welcome to <span className=" text-pink-400 font-medium">Pomodoro</span>
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
                            Email
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
                    <div class="-ml-2.5">
                        <div class="inline-flex items-center">
                            <label htmlFor="checkbox" class="relative flex items-center p-3 rounded-full cursor-pointer">
                                <input type="checkbox"
                                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                    id="checkbox" />
                                <span
                                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="checkbox">
                                Remember Me
                            </label>
                        </div>
                    </div>
                </div>
                <div class="p-6 pt-0">
                    <button
                        onClick={onLogin}
                        class="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        Sign In
                    </button>
                    <p class="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                        Don't have an account?
                        <a href="#signup"
                            class="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
                            Sign up
                        </a>
                    </p>
                    <div className="flex mb-9 mt-10 gap-4 items-center justify-center w-full">
                        <Button size="lg" color="white" className="flex items-center justify-center w-full h-fit border shadow-md">
                            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="metamask" className="h-8" />
                        </Button>
                        <Button size="lg" color="white" className="flex items-center justify-center w-full h-fit border shadow-md">
                            <img src="https://www.svgrepo.com/show/69341/apple-logo.svg" alt="metamask" className="h-8 p-1" />
                        </Button>
                        <Button size="lg" color="white" className="flex items-center justify-center w-full h-fit border shadow-md">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="metamask" className="h-8 p-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}