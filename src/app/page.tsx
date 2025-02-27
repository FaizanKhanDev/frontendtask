import Image from "next/image"
import { Play, Check, Apple } from "lucide-react"
import Navbar from "./navbar/Navbar"
import HeroSection from "./home/HeroSection"
import PremiumFeatures from "./home/PremiumFeatures"
import CTA from "./CTA"
export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      {/* Decorative stars */}
      <div className="absolute top-20 left-10 text-2xl text-gray-200">✧</div>
      <div className="absolute top-80 left-5 text-2xl text-gray-200">✧</div>
      <div className="absolute top-40 right-10 text-2xl text-gray-200">✧</div>
      <div className="absolute bottom-40 right-20 text-2xl text-gray-200">✧</div>
      <div className="absolute bottom-80 left-20 text-2xl text-gray-200">✧</div>
      <div className="absolute bottom-20 right-10 text-2xl text-gray-200">✧</div>

      {/* (-------------) ||  Navigation  || (---------------) */}
      <Navbar></Navbar>


      {/* (-------------) ||  Hero Section   || (---------------) */}
      <HeroSection></HeroSection>

      {/* (-------------) || Premium Features Section   || (---------------) */}
      {/* <PremiumFeatures></PremiumFeatures> */}

      {/* CTA Section */}
      {/* <CTA></CTA> */}

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 text-center text-gray-500 text-sm">
        Copyright © 2024 uifry All Rights Reserved
      </footer>
    </div>
  )
}

