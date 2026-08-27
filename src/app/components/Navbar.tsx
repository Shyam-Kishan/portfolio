import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex sticky top-0 z-50 justify-between 
                    items-center bg-neutral-900 px-5 py-5">
        <ul>
            <li>
                <Link className="underline hover:text-neutral-400 transition-colors duration-500" 
                href="/#home">Shyam Kishan</Link>
            </li>
        </ul>
        <ul className="flex items-center gap-4">
            <li>
                <Link className="underline hover:text-neutral-400 transition-colors duration-500"
                href="/#education">Education</Link>
            </li>

            <li>
                <Link className="underline hover:text-neutral-400 transition-colors duration-500"
                href="/#projects">Projects</Link>
            </li>
            
            <li>
                <Link className="underline hover:text-neutral-400 transition-colors duration-500"
                href="/#about">About</Link>
            </li>
        </ul>
    </nav>
  );
}