import Link from "next/link";
import {useRouter} from "next/router";
import { ReactNode } from "react";

interface LayoutProps{
    children: ReactNode;
}

export default function Layout({children}: LayoutProps){
    const router = useRouter();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/certificates", label: "Certificates" },
        { href: "/contact", label: "Contact" }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation Bar */}
            <header className="bg-white shadow sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-inbetween items-center space-x-4">
                   {/* Logo */}
                   <Link href="/" className="flex items-center space-x-2">
                   <img src="/images/logo.png" alt="Hemraj Logo" className="h-8 w-8 object-content" />
                   <span className="text-xl font-bold text-blue-600">Hemraj Persaud</span>   
                   </Link>
                </div>
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-inbetween items-center space-x-4">
                    <nav className="space-x-4 text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                            href={link.href}
                        className={`px-3 py-2 rounded-md transition ${
                            router.pathname === link.href
                                ? 'text-white bg-blue-600'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                        }`}
                        >
                            {link.label}
                        </Link>
                        ))}           
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                    {children}
            </main>

            {/* Footer */}
            <footer>
                <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600">
                    @ {new Date().getFullYear()} Hemraj Persaud. All rights reserved.
                </div>
            </footer>
        </div>
    );
}