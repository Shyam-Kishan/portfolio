"use client";

import { useState } from "react";

export default function CopyEmailButton() {
    const [copied, setCopied] = useState(false);

    function handleClick() {
        navigator.clipboard.writeText("shyamkishan109@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <button onClick={handleClick} className="underline hover:text-neutral-400 transition-colors duration-500">
            {copied ? "Copied!" : "Copy Email"}
        </button>
    )
}