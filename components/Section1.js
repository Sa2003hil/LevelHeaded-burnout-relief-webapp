import React from "react";
import Image from "next/image";
import backgroundImage from "../assets/solid-black background.jpg";
import HeaderImg from "../assets/HeadSideImg.png";

export default function Section1() {
    return (
        <div className="h-screen w-screen overflow-hidden mt-6 relative">
            <div className="absolute h-full w-full left-20 top-0">
                <div className="">
                    <Image
                        src={backgroundImage}
                        width={1000}
                        height={1000}
                        className="w-full rounded-t-[4rem]"
                        alt="notfound"
                    />
                </div>
                <div className="text-white absolute top-0 left-0 flex items-center justify-start h-full w-full" id="sectio1-header">
                    <div className="h-full gap-12 flex items-start justify-center flex-col pl-24">
                        <div className="rounded-full text-[#F85E9F] bg-white py-3 font-semibold px-6 flex items-center justify-center gap-2">
                            Explore Your Potential
                            <span className="material-symbols-outlined">redeem</span>
                        </div>
                        <div className="text-6xl text-[#F85E9F] font-bold">
                            <span className="text-white">Explore</span> <span>the</span>{" "}
                            <div>possibilities</div>
                        </div>
                        <div>
                            <p className="text-gray-400">
                                We always make our customer happy by providing as many choices
                                as possible{" "}
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-6 text-sm">
                            <button className="bg-[#5D50C6] rounded-full py-4 px-6 text-white">
                                Get Started
                            </button>
                            <button className="bg-white rounded-full py-4 px-6 text-black">
                                Watch Demo
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <Image
                            src={HeaderImg}
                            alt="card-image"
                            width={1000}
                            height={1000}
                            className="h-full w-full object-contain rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
