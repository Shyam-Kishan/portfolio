import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex sticky bottom-0 z-50 justify-center
                    items-center bg-neutral-900 px-5 py-5">

        <ul className="flex items-center gap-4">
            <li>
                <a className="underline hover:text-neutral-400 transition-colors duration-500" 
                href="mailto:shyamkishan109@gmail.com">Email</a>
            </li>

            <li>
                <a className="underline hover:text-neutral-400 transition-colors duration-500"
                href="https://github.com/Shyam-Kishan"
                rel="noopener noreferrer"
                target="_blank">GitHub</a>
            </li>

            <li>
                <a className="underline hover:text-neutral-400 transition-colors duration-500"
                href="https://www.linkedin.com/in/shyam-kishan-3ab2a4268/"
                rel="noopener noreferrer"
                target="_blank">LinkedIn</a>
            </li>

            <li>
                <a className="underline hover:text-neutral-400 transition-colors duration-500"
                    href="/Shyam_Kishan_Resume.pdf"
                    rel="noopener noreferrer"
                    target="_blank">Resume</a>
            </li>
        </ul>
    </footer>
  );
}