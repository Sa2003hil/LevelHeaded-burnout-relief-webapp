import React from "react";

export default function SubscribeNew() {
    return (
        <div className="flex items-center justify-center flex-col gap-8 bg-[#FFFBF0] py-28 rounded-[2rem]">
            <h3 className="text-2xl font-bold text-[#F85E9F] tracking-widest uppercase">
                Subscribe to our newsletter
            </h3>
            <p className="text-6xl font-bold text-center self-center">
                Exclusive Event Previews, Announcements, and More.
            </p>
            <div className="flex items-center justify-evenly w-full">
                <div className="rounded-[1rem] bg-white h-16 font-bold text-gray-700 text-2xl flex items-center justify-center py-4 px-4 w-1/2">
                    <i className="fa-solid fa-envelope mr-2"></i>
                    <input type="text" id="user-email" className="h-full w-full bg-transparent outline-none placeholder-gray-700 placeholder:font-semibold" placeholder="Your Email" />
                </div>
                <div className="rounded-[1rem] bg-[#5d50c6] text-white text-2xl py-4 px-6">Subscribe</div>
            </div>
        </div>
    );
}
