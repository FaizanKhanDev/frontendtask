import Link from "next/link"
import React from 'react'

export default function Navbar() {
    return (
        <header className="container mx-auto px-4 py-6 flex items-center justify-between">
            <div className="flex items-center">
                <div className="h-8 w-8 bg-red-500 rounded-full mr-2"></div>
                <span className="font-bold text-xl">uifry</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="font-medium text-black">
                    Home
                </Link>
                <Link href="/" className="font-medium text-gray-600">
                    About Us
                </Link>
                <Link href="/" className="font-medium text-gray-600">
                    Pricing
                </Link>
                <Link href="/" className="font-medium text-gray-600">
                    Features
                </Link>
            </nav>

            <button className="bg-black text-white px-6 py-2 rounded-md">Download</button>
        </header>
    )
}
