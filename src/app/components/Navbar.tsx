"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <nav className="sticky top-0 z-50 ">
        <div className="flex flex-col bg-background/80 backdrop-blur-sm px-5 py-5 font-mono">
            <div className="flex items-center justify-between ">
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
                    
                    <li>
                        <ThemeToggle/>
                    </li>

                </ul>

                {/* Hamburger button: visble below md, hidden at md and up */}
                <ul className="flex md:hidden flex flex-row gap-4 items-center">
                    <li>
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </li>

                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </div>

            {/* Mobile dropdown: only renders when menuOpen is true */}
            {menuOpen && (
                <ul className=" op-full left-0 w-full flex flex-col items-center gap-4 py-4 md:hidden">
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
        </div>
    </nav>
  );
}