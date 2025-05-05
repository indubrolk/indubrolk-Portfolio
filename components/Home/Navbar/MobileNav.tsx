import React from 'react'

const MobileNav = () => {
    return <div>
        {/* Overlay */}
        <div className="fixed inset-0 z-[1000] bg-black opacity-70 w-full h-screen"></div>

        {/* Nav Links */}

        <div className="text-white fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715]
        space-x-6 z-[1006]"></div>

    </div>;

};

export default MobileNav;