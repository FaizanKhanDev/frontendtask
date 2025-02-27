import Image from "next/image"
import { Play, Check, Apple } from "lucide-react"
import Navbar from "./navbar/Navbar"
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

     

      {/* Premium Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] flex justify-center">
              {/* Phone mockup */}
              <div className="relative z-10">
                <Image
                  src="https://imgur.com/qAVShBu.png"
                  alt="Mobile app interface"
                  width={250}
                  height={500}
                  className="object-contain"
                />
              </div>

              {/* Circular patterns */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-gray-200 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-gray-200 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gray-200 rounded-full"></div>

              {/* Red gradient background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-500/30 rounded-full blur-3xl -z-10"></div>
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

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 text-center text-gray-500 text-sm">
        Copyright © 2024 uifry All Rights Reserved
      </footer>
    </div>
  )
}

