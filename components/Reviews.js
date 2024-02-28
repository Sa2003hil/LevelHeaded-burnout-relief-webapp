"use client";
import CarouselReview from "@/components/Crousel";
import { IconButton } from "@material-tailwind/react";
import { useRef } from "react";

export default function Reviews() {
    const scrollRef = useRef();
    const scroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset;
    };
    return (
        <div className="flex flex-col items-center justify-center h-full gap-8">
            <div>
                <h3 className="text-2xl font-bold text-[#F85E9F] tracking-widest uppercase">
                    Reviews
                </h3>
            </div>
            <div className="h-full">
                <div className="h-full w-screen flex items-center justify-center">
                    <div className="flex items-center justify-center m-auto p-auto h-full w-2/3">
                        <div>
                            <IconButton
                                variant="outlined"
                                className="rounded-full"
                                size="lg"
                                onClick={() => scroll(-900)}
                            >
                                <i className="fa-solid fa-arrow-left"></i>
                            </IconButton>
                        </div>

                        <div
                            className="flex overflow-x-scroll scroll-smooth py-2 h-full"
                            ref={scrollRef}
                        >
                            <div className="flex flex-nowrap gap-6 items-center w-full">
                                {[...Array(7)].map((_, index) => {
                                    return <CarouselReview key={index} />;
                                })}
                            </div>
                        </div>
                        <div>
                            <IconButton
                                variant="gradient"
                                color="deep-purple"
                                className="rounded-full"
                                size="lg"
                                onClick={() => scroll(900)}
                            >
                                <i className="fa-solid fa-arrow-right"></i>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
