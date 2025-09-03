"use client"

import React, { useState } from 'react'
import {SunIcon} from '@heroicons/react/24/solid';
import Link from "next/link";
import Image from "next/image"
// import logoImage from '../images/logo1.png';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const theme = "dark"
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <nav className='fixed w-full bg-dark/100 dark:bg-dark/50 backdrop-blur-sm z-50'>
            <div className='container max-w-7xl mx-auto px-4'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold">
                        <Image
                            src="/images/logo1.png"
                            alt="logo"
                            width={100}
                            height={32}
                            className="object-contain"
                            priority
                            onError={(e) => {
                                console.error('Image failed to load:', e);
                            }}
                        />
                        {/*{logoImage}*/}
                    </Link>

                    {/* Desktop menu */}
                    <div className='hidden md:flex items-center space-x-8'>
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={` text-white hover:text-primary transition-colors no-underline ${
                                        isActive ? 'text-hover' : ''
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}

                        <button>
                            {
                                theme === "dark" ? (
                                    <SunIcon className='w-6 h-6 text-primary'></SunIcon>
                                )
                            }
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMobileMenu}
                        className='md:hidden flex flex-col justify-center items-center w-6 h-6'
                        aria-label="Toggle mobile menu"
                    >
                        <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                            isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                        }`} />
                        <span className={`block w-5 h-0.5 bg-current transition-all duration-300 my-1 ${
                            isMobileMenuOpen ? 'opacity-0' : ''
                        }`} />
                        <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                            isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                        }`} />
                    </button>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className='md:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-dark rounded-lg shadow-lg mt-2'>
                            {menuItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`hover:text-primary hover:scale-105 transition-all duration-200 active:scale-95 px-3 py-2 rounded-md hover:bg-primary/10 no-underline ${
                                            isActive ? 'text-primary bg-primary/10' : ''
                                        }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar