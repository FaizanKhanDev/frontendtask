import React from 'react'
import Image from "next/image"
import { Play, Check, Apple } from "lucide-react"
export default function PremiumFeatures() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="relative h-[400px] md:h-[500px] flex justify-center">
                        {/* (--------) || Phone mockup || (--------) */}
                        <div className="relative z-10">
                            <Image
                                src="https://imgur.com/HvARfHB.png"
                                alt="Mobile app interface"
                                width={500}
                                height={500}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Uifry Premium</h2>

                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="mt-1 mr-3 text-red-500">
                                <Check size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Budget planning</h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum aliquet. Praesent hendrerit id
                                    bibendum quis Duis, ut amet hendrerit.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="mt-1 mr-3 text-red-500">
                                <Check size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Expense tracking</h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum aliquet. Praesent hendrerit id
                                    bibendum quis Duis, ut amet hendrerit.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="mt-1 mr-3 text-red-500">
                                <Check size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Investment advice</h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum aliquet. Praesent hendrerit id
                                    bibendum quis Duis, ut amet hendrerit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
