"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted){
        return null;
    }

    const isDark = resolvedTheme;

    return (
        <button 
            onClick={() => setTheme(isDark === "dark" ? "light" : "dark")}
            className="relative w-[56px] h-[30px] rounded-full bg-background border border-accent transition-colors"
            aria-label="Toggle Theme"
        >
            <span
                className={`absolute top-[2px] left-[1px] w-6 h-6 rounded-full bg-accent flex items-center justify-center transition-transform duration-300 ${
                    isDark === "dark" ? "translate-x-[1px]" : "translate-x-[27px]"
                }`}
            >
                
                    {isDark === "dark" ? <FiMoon className="text-background" /> : <FiSun className="text-background" />}
                
            </span>
        </button>
    )
}