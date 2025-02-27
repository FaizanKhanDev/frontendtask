import React from "react";
import { Play } from "lucide-react";
import Image from "next/image";

const HeroButtons = () => (
    <div className="flex flex-wrap gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-md flex items-center">
            Get Started
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
        <button className="border border-gray-300 px-6 py-3 rounded-md flex items-center">
            <Play className="mr-2 w-4 h-4" />
            Watch Video
        </button>
    </div>
);

const FeatureCard = () => (
    <div className="mt-12 relative max-w-sm">
        <div className="bg-black text-white p-4 rounded-lg">
            <div className="flex items-center mb-2">
                <div className="h-6 w-6 bg-red-500 rounded-full mr-2 flex items-center justify-center text-xs">1</div>
                <span>Market Overview</span>
            </div>
            <div className="flex items-center">
                <div className="h-6 w-6 bg-red-500 rounded-full mr-2 flex items-center justify-center text-xs">2</div>
                <span>Smart Recommendations</span>
            </div>
        </div>
        <div className="absolute -bottom-10 -right-10 bg-red-500 text-white p-3 rounded-lg text-sm">
            uifry Premium<br />From $14
        </div>
    </div>
);


const HeroImages = () => {
    const images = [
        "https://imgur.com/dvB6dja.png",
        "https://imgur.com/7r6susp.png",
        "https://imgur.com/HvARfHB.png",
    ];

    return (
        <div className="relative h-[400px] md:h-[500px]">
            {images.map((src, index) => (
                <div key={index} className={`absolute top-${index * 20} right-${index * 20} w-[200px] md:w-[250px] z-${1 - index * 10}`}>
                    <Image src={src} alt="Mobile app interface" width={600} height={600} className="object-contain" />
                </div>
            ))}
            <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-red-500/30 rounded-full blur-3xl -z-10"></div>
        </div>
    );
};



export default function HeroSection() {
    return (
        <section className="container mx-auto px-4 pt-10 pb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                        Make <span className="bg-red-500/20">The Best</span>
                        <br />
                        Financial <span className="bg-red-500/20">Decisions</span>
                    </h1>
                    <p className="text-gray-600 mb-8 max-w-lg">
                        Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sodis
                        Arcu Lorem Porttitor.
                    </p>
                    <HeroButtons />
                    <FeatureCard />
                </div>
                <div className="order-1 md:order-2 relative">
                    <HeroImages />
                </div>
            </div>
        </section>
    );
}
