import React from 'react'

const Cards = () => {
    return (
        <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark" id="features">
            <div className="container mx-auto ">
                <div className="-mx-4 flex flex-wrap ">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <span className="text-purple-500 mb-2 block text-lg font-semibold">
                                Our Softwares
                            </span>
                            <h2 className="text-dark mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                                Our Softwares Includes
                            </h2>
                            <p className="text-gray-400 text-base ">
                                Transform your vision into reality with our expert software
                                solutions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap ">
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="shadow-lg mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                            <div className="bg-black mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                                <svg
                                    width={36}
                                    height={36}
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21.0375 1.2374C11.8125 -0.393851 2.92503 5.7374 1.29378 14.9624C0.450029 19.4061 1.46253 23.9624 4.05003 27.6749C6.63753 31.4436 10.5188 33.9186 14.9625 34.7624C15.975 34.9311 16.9875 35.0436 18 35.0436C26.0438 35.0436 33.2438 29.2499 34.7625 21.0374C36.3938 11.8124 30.2625 2.9249 21.0375 1.2374ZM32.2313 20.5874C32.175 21.0374 32.0625 21.4874 31.95 21.8811L19.2375 17.0999V3.5999C19.6875 3.65615 20.1375 3.7124 20.5313 3.76865C28.4063 5.1749 33.6375 12.7124 32.2313 20.5874ZM16.7063 3.5999V16.7624H3.60003C3.65628 16.3124 3.71253 15.8624 3.76878 15.4124C4.95003 8.83115 10.4063 4.10615 16.7063 3.5999ZM15.4125 32.2311C11.5875 31.5561 8.32503 29.4186 6.13128 26.2124C4.66878 24.1311 3.82503 21.7124 3.60003 19.2374H17.775L31.05 24.2436C28.2938 29.9811 21.9375 33.4686 15.4125 32.2311Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-dark dark:text-gray-300 mb-[14px] text-2xl font-semibold">
                                Refreshing Designs
                            </h4>
                            <p className="text-body-color dark:text-dark-6">
                                We breathe new life into your
                                brand aesthetic, creating memorable and impactful
                                experiences  friendly designs.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className=" shadow-lg mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                            <div className="bg-black mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={32}
                                    height={32}
                                    id="web"
                                    fill="none"
                                >
                                    <path
                                        d="M2.344 2A.5.5 0 0 0 2 2.5v27a.5.5 0 0 0 .5.5h27a.5.5 0 0 0 .5-.5v-27a.5.5 0 0 0-.5-.5h-27a.5.5 0 0 0-.156 0zM3 3h26v3H3V3zm1.5 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM3 7h26v22H3V7zm13 4c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm-.5 1.094v2.156h-2c.173-.605.382-1.224.625-1.844.441-.146.89-.27 1.375-.312zm1 0c.461.04.891.146 1.313.281.247.63.45 1.26.625 1.875H16.5v-2.156zm-3.625.875c-.146.43-.293.853-.406 1.281h-1.063a5.782 5.782 0 0 1 1.469-1.281zm6.219 0c.57.348 1.073.758 1.5 1.281H19.5c-.114-.428-.26-.851-.406-1.281zM10.75 15.25h1.5a15.296 15.296 0 0 0-.281 2.25h-1.875a5.88 5.88 0 0 1 .656-2.25zm2.5 0h2.25v2.25h-2.563c.044-.746.148-1.499.313-2.25zm3.25 0h2.188c.165.751.269 1.504.312 2.25h-2.5v-2.25zm3.219 0h1.531a5.88 5.88 0 0 1 .656 2.25H20a15.296 15.296 0 0 0-.281-2.25zm-9.625 3.25h1.844c.012.74.085 1.5.218 2.25H10.75a5.789 5.789 0 0 1-.656-2.25zm2.812 0H15.5v2.25h-2.344a12.843 12.843 0 0 1-.25-2.25zm3.594 0h2.531c-.014.748-.1 1.489-.25 2.25H16.5V18.5zm3.531 0h1.875a5.788 5.788 0 0 1-.656 2.25h-1.438c.133-.75.207-1.51.22-2.25zm-8.593 3.25h.937c.099.396.209.786.344 1.188a6.186 6.186 0 0 1-1.281-1.188zm1.968 0H15.5v2.156a5.793 5.793 0 0 1-1.469-.312 15.576 15.576 0 0 1-.625-1.844zm3.094 0h2.031a15.54 15.54 0 0 1-.625 1.875 5.81 5.81 0 0 1-1.406.281V21.75zm3.094 0h.968c-.373.45-.799.861-1.28 1.188.133-.398.213-.795.312-1.188z"
                                        color="#000"
                                        fontFamily="Sans"
                                        fontWeight={400}
                                        overflow="visible"
                                        style={{
                                            textIndent: 0,
                                            textAlign: "start",
                                            lineHeight: "normal",
                                            textTransform: "none",
                                            msBlockProgression: "tb",
                                            marker: "none",
                                        }}
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-dark dark:text-gray-300  mb-[14px] text-2xl font-semibold">
                                Web Development
                            </h4>
                            <p className="text-body-color dark:text-dark-6">
                                Unlock online success with our expert web development.
                                Tailored solutions for powerful websites.
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="shadow-lg mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                            <div className="bg-black mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                                <svg
                                    width={36}
                                    height={36}
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.2063 1.9126H5.0625C3.15 1.9126 1.575 3.4876 1.575 5.4001V12.5438C1.575 14.4563 3.15 16.0313 5.0625 16.0313H12.2063C14.1188 16.0313 15.6938 14.4563 15.6938 12.5438V5.45635C15.75 3.4876 14.175 1.9126 12.2063 1.9126ZM13.2188 12.6001C13.2188 13.1626 12.7688 13.6126 12.2063 13.6126H5.0625C4.5 13.6126 4.05 13.1626 4.05 12.6001V5.45635C4.05 4.89385 4.5 4.44385 5.0625 4.44385H12.2063C12.7688 4.44385 13.2188 4.89385 13.2188 5.45635V12.6001Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M30.9375 1.9126H23.7937C21.8812 1.9126 20.3062 3.4876 20.3062 5.4001V12.5438C20.3062 14.4563 21.8812 16.0313 23.7937 16.0313H30.9375C32.85 16.0313 34.425 14.4563 34.425 12.5438V5.45635C34.425 3.4876 32.85 1.9126 30.9375 1.9126ZM31.95 12.6001C31.95 13.1626 31.5 13.6126 30.9375 13.6126H23.7937C23.2312 13.6126 22.7812 13.1626 22.7812 12.6001V5.45635C22.7812 4.89385 23.2312 4.44385 23.7937 4.44385H30.9375C31.5 4.44385 31.95 4.89385 31.95 5.45635V12.6001Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M12.2063 19.8564H5.0625C3.15 19.8564 1.575 21.4314 1.575 23.3439V30.4877C1.575 32.4002 3.15 33.9752 5.0625 33.9752H12.2063C14.1188 33.9752 15.6938 32.4002 15.6938 30.4877V23.4002C15.75 21.4314 14.175 19.8564 12.2063 19.8564ZM13.2188 30.5439C13.2188 31.1064 12.7688 31.5564 12.2063 31.5564H5.0625C4.5 31.5564 4.05 31.1064 4.05 30.5439V23.4002C4.05 22.8377 4.5 22.3877 5.0625 22.3877H12.2063C12.7688 22.3877 13.2188 22.8377 13.2188 23.4002V30.5439Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M30.9375 19.8564H23.7937C21.8812 19.8564 20.3062 21.4314 20.3062 23.3439V30.4877C20.3062 32.4002 21.8812 33.9752 23.7937 33.9752H30.9375C32.85 33.9752 34.425 32.4002 34.425 30.4877V23.4002C34.425 21.4314 32.85 19.8564 30.9375 19.8564ZM31.95 30.5439C31.95 31.1064 31.5 31.5564 30.9375 31.5564H23.7937C23.2312 31.5564 22.7812 31.1064 22.7812 30.5439V23.4002C22.7812 22.8377 23.2312 22.3877 23.7937 22.3877H30.9375C31.5 22.3877 31.95 22.8377 31.95 23.4002V30.5439Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <h4 className="text-dark dark:text-gray-300  mb-[14px] text-2xl font-semibold">
                                Mobile App Development
                            </h4>
                            <p className="text-body-color dark:text-dark-6">
                                Crafting seamless mobile experiences. Elevate your business
                                with our expert mobile development services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards