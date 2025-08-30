"use client"




import React, {useState} from 'react'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const toggleMobileMenu = () =>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const menuItems = [
        {href: "/", label: "Home"},
        {href: "/about", label: "About" },
        {href: "/", label: "Projects"},
        {href: "/blog", label: "Blog"},
        {href: "/contact", label: "Contact"},
    ]
    return (
        <nav className='fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50'>Navbar</nav>
    )
}

export default Navbar