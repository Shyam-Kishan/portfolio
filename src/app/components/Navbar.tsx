"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <nav className="flex sticky top-0 z-50 items-center justify-between bg-neutral-900 px-5 py-5 font-mono">
        <ul>
            <li>
                <Link className="text-[14px] sm:text-lg underline hover:text-neutral-400 transition-colors duration-500" 
                href="/#home">home</Link>
            </li>
        </ul>

        {/* Desktop: visble md and up, hidden below md*/}
        <ul className="hidden md:flex text-[10px] sm:text-lg items-center gap-4">
            <li>
                <Link className="underline hover:text-neutral-400 transition-colors duration-500"
                href="/#projects">projects</Link>
            </li>
            
            <li>
                <Link className="underline hover:text-neutral-400 transition-colors duration-500"
                      href="/#skills">skills</Link>
            </li>
            <li>
                <Link className="underline hover:text-neutral-400 transition-colors duration-500"
                href="/#education">education</Link>
            </li>
            
            <li>
                <Link className="underline hover:text-neutral-400 transition-colors duration-500"
                href="/#about">about</Link>
            </li>
        </ul>

        {/* Hamburger button: visble below md, hidden at md and up */}
        <button className="flex md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile dropdown: only renders when menuOpen is true */}
        {menuOpen && (
            <ul className="absolute top-full left-0 w-full flex flex-col items-center gap-4 bg-neutral-900 py-4 md:hidden">
                <li>
                    <Link className="text-[14px] underline hover:text-neutral-400 transition-colors duration-500"
                    href="/#projects">projects</Link>
                </li>
                
                <li>
                    <Link className="text-[14px] underline hover:text-neutral-400 transition-colors duration-500"
                        href="/#skills">skills</Link>
                </li>
                <li>
                    <Link className="text-[14px] underline hover:text-neutral-400 transition-colors duration-500"
                    href="/#education">education</Link>
                </li>
                
                <li>
                    <Link className="text-[14px] underline hover:text-neutral-400 transition-colors duration-500"
                    href="/#about">about</Link>
                </li>
            </ul>
        )}
    </nav>
  );
}