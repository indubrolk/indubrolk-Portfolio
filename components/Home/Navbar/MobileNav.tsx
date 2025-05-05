import React from 'react'
import Link from "next/link";

const MobileNav = () => {
    return <div>
        {/* Overlay */}
        <div className="fixed inset-0 z-[1000] bg-black opacity-70 w-full h-screen"></div>

        {/* Nav Links */}

        <div className="text-white fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715]
        space-x-6 z-[10000]">

            {navLink.map((navLink) => {
                return(
                    <Link key={navLink.id} href={navLink.url}>
                        <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white
                        sm:text-[30px]">{navLink.label}</p>
                    </Link>
                )
            })}

        </div>

    </div>;

};

export default MobileNav;