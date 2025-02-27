import React from 'react'
import Image from "next/image"
import { Play, Check, Apple } from "lucide-react"

export default function CTA() {
    return (
        <section className="bg-black text-white py-16 my-20 relative overflow-hidden">
            <div className="absolute top-10 right-10 text-2xl text-gray-700">✧</div>
            <div className="absolute bottom-10 left-10 text-2xl text-gray-700">✧</div>

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready To Get Started?</h2>
                        <p className="mb-8 text-gray-400">
                            Make a smart choice for your financial future. Download the app today and start making better financial
                            decisions.
                        </p>

                        <button className="bg-white text-black px-6 py-3 rounded-md flex items-center">
                            <Apple className="mr-2 h-5 w-5" />
                            Download App
                        </button>
                    </div>

                    <div className="relative">
                        <div className="relative h-[400px] flex justify-center">
                            {/* Phone mockups */}
                            <div className="absolute top-10 left-10 w-[180px] md:w-[220px] z-10 rotate-[-10deg]">
                                <Image
                                    src="https://imgur.com/qAVShBu.png"
                                    alt="Mobile app interface"
                                    width={220}
                                    height={450}
                                    className="object-contain"
                                />
                            </div>
                            <div className="absolute top-0 right-10 w-[180px] md:w-[220px] z-20 rotate-[10deg]">
                                <Image
                                    src="https://imgur.com/qAVShBu.png"
                                    alt="Mobile app interface"
                                    width={220}
                                    height={450}
                                    className="object-contain"
                                />
                            </div>

                            {/* Red gradient background */}
                            <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-red-500/40 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
