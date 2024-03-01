"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "../assets/Logo.jpg";
import avatar from "../assets/avatar.svg";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";


export default function Navbar() {
    const router = useRouter();
    const { authData, logout } = useAuth();
    const [scrolling, setScrolling] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleSignOut = async () => {
        // Add your sign-out logic here
        try {
            logout();
            await axios.get('/api/users/logout');
            toast.success("Logged out successfully");
            setTimeout(() => {
                router.push('/signIn');
            });

        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
    };

    return (
        <div className={`w-screen h-20 py-2 flex items-center justify-between text-black px-20 ${scrolling ? "shadow-lg bg-white" : "bg-white"
            }`}>
            <Toaster />
            <div className="w-full flex">
                <div className="flex items-center justify-center">
                    <Image
                        src={Logo}
                        alt="Evetease"
                        height={1000}
                        width={1000}
                        className="w-8 h-8 rounded-full object-contain mr-2"
                    />
                    <p className="font-semibold">POMODORO</p>
                </div>
                <ul className="flex items-center justify-start gap-16 w-full font-normal text-gray-800 ml-20">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Discover</Link>
                    </li>
                    <li>
                        <Link href="/">Events</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="ml-auto">
                    {authData.token ? (
                        <div className="relative">
                            <div
                                onClick={toggleDropdown}
                                className="cursor-pointer"
                            >
                                <Image
                                    src={avatar} // Replace with the path to your image
                                    alt="User Image"
                                    width={60}
                                    height={50}
                                    className="w-12 h-12 rounded-full object-contain"
                                />
                            </div>
                            {showDropdown && (
                                <ul className="absolute lg:w-[13vw] text-center justify-center right-0 mt-6 m-auto text-[#000000] bg-white border-none border-gray-200 rounded-md shadow-2xl">
                                    {authData.userN && (
                                        <p className="text-sm font-semibold my-4 mt-4">
                                            Welcome{' '}
                                            <span className="text-blue-300 font-semibold">
                                                @{authData.userN.username}
                                            </span>
                                        </p>
                                    )}
                                    <div className="flex flex-col gap-4 py-1 px-2 ">
                                        <Link href="/profile">My Profile</Link>
                                        <Link href="/dashboard">Dashboard</Link>
                                    </div>
                                    <hr className=" m-auto justify-center text-center" />
                                    <button
                                        className="py-2 px-4 my-5 cursor-pointer hover:bg-white transition-all hover:border hover:border-black ease-in hover:text-black bg-black rounded-full text-white"
                                        onClick={handleSignOut}
                                    >
                                        Sign Out
                                    </button>
                                </ul>
                            )}

                        </div>
                    ) : (
                        <div className="w-full text-sm">
                            <ul className="flex items-center justify-end gap-12 w-full font-semibold text-[#4461F2]">
                                <li id="sign-in-button" className="w-12" prefetch="true">
                                    <Link href="/signIn">Sign In</Link>
                                </li>
                                <li className="text-[#4461F2] relative py-2 px-6 font-semibold rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-lg hover:scale-105 hover:text-white hover:shadow-xl active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0" prefetch="true">
                                    <Link href="/register">Register</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
