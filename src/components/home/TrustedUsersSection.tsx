import React from 'react'
import './TrustedUsersSection.css'
import { FaArrowRight, FaArrowRotateRight } from 'react-icons/fa6'

const imgFrame47674 = '/2fac352039001923d5472266889e225eb9605a8e.svg'

export default function TrustedUsersSection() {
  const logos = [
    imgFrame47674,
    imgFrame47674,
    imgFrame47674,
    imgFrame47674,
    imgFrame47674,
    imgFrame47674,
    imgFrame47674,
    imgFrame47674,
    imgFrame47674,
    imgFrame47674,
  ]

  return (
    <div className="w-full bg-background py-12 sm:py-16 lg:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-12 md:gap-16">
          <div className="flex flex-col items-center gap-6 w-full">
            {/* Title */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              <h2 className="font-semibold text-[#1e2119] text-3xl sm:text-4xl lg:text-[48px] leading-tight tracking-tight">
                Trusted By More Than
                <br className="md:hidden" />
                <span className="font-bold text-[#bae730]"> 50,000 </span>
                Users
              </h2>
            </div>

            {/* Subtitle */}
            <p className="font-medium font-blog text-[#61645b] text-lg text-center">
              Trusted by industry leaders and developers worldwide
            </p>
          </div>

          {/* Logos Scroll */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

            <div className="logos-scroll flex h-[70px] sm:h-[104px] gap-2 sm:gap-4 items-center">
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  className="h-full aspect-square block shrink-0"
                  style={{ filter: 'grayscale(100%)' }}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-6">
            {/* <button className="bg-[#c4f144] hover:bg-[#b8e33a] justify-center py-3 rounded-full w-48 transition-colors font-semibold text-sm text-[#1e2119] text-center text-nowrap">
              Explore Cases
            </button> */}
            <a
              href="#"
              className="font-semibold text-sm text-[#1e2119] text-center text-nowrap hover:underline transition-all flex items-center gap-2"
            >
              Explore cases <FaArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
