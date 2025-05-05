import Image from "next/image";
import Link from "next/link";
import React from 'react';
import {navLinks} from "@/constant/constant";
import
const Nav = () => {
    return(
        <div className="fixed h-[12vh] z-[10] bg-blue-950 w-full">
        <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
            {/* */}
            <Image src="/images/logo2.png"
                   alt="logo"
                   width={170}
                   height={170}
                   className="ml-[-1.5rem] sm:ml-0"

            />

            <div className="flex items-center space-x-10">
                {navLinks.map((navLink) => {
                    return <Link key={navLink.id} href={navLink.url}>
                        <p className="nav__link">{navLink.label}</p>
                    </Link>
                })}

            </div>
            {/* Buttons */}

            <div className="flex items-center space-x-4">
                <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white
                hover:bg-gray-200 transition-all duration-200 rounded-lg">
                    Hire Me
                </button>

                {/* Burgur */}

                <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-white"/>

            </div>
        </div>
        </div>
)
};


export default Nav;