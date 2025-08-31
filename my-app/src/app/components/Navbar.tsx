"use client"




import React, {useState} from 'react'
import Link from "next/link";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const toggleMobileMenu = () =>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const menuItems  = [
        {href: "/", label: "Home"},
        {href: "/about", label: "About" },
        {href: "/", label: "Projects"},
        {href: "/blog", label: "Blog"},
        {href: "/contact", label: "Contact"},
    ]
    return (
        <nav className='fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50'>
            <div className='container max-w-7xl mx-auto px-4'>
                {/*desktop menu*/}
                <div>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Link href="/" className='text-xl fon-bold text-primary'>Devfolio</Link>

                    {/* desktop menus */}

                    <div className='hidden md:flex items-center space-x-8'>
                        {
                            menuItems.map((item) => (
                                <Link key={item.href} href={item.href} className='hover:text-primary transition-colors'>{item.label}</Link>
                    ))
                        }
                    </div>
                </div>
                {}
            </div>
        </nav>
    )
}

export default Navbar