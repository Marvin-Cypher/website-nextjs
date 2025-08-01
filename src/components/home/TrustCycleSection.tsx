import React from 'react'
import { FaArrowDown, FaCheck } from 'react-icons/fa6'

export default function TrustCycleSection() {
  const demo = (
    <div className="rounded-sm lg:h-full relative overflow-hidden bg-gradient-to-t from-[#7ca328e0] to-[#b9e730d1]">
      {/* Demo Content */}
      <div className="relative w-full h-full p-4 sm:p-8 flex items-center justify-center">
        <div className="rounded-lg p-3 bg-background/50 w-full max-w-[530px] aspect-[530/657]">
          <div className="bg-background rounded w-full h-full">
            <div className="px-6 py-4 border-b">
              <p className="font-semibold text-[#1e2119]">Secured & Private</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full py-4 sm:py-8 lg:py-16 px-2 sm:px-8 lg:px-12">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header Section */}
        <div className="mb-4 sm:mb-8">
          <div className="bg-background rounded-sm p-6 sm:p-10 w-full">
            <div className="space-y-3">
              <h2 className="font-bold text-[#1e2119] text-xl sm:text-2xl md:text-3xl">
                When Your Users Trust AI
              </h2>
              <p className="font-blog font-normal text-[#61645b] text-base sm:text-[18px] tracking-[-0.306px] leading-[1.2]">
                Trust creates a powerful cycle that drives business growth and
                market leadership
              </p>
            </div>
            <div className="flex gap-2 mt-6">
              <div className="bg-[#cbfa50] h-1.5 rounded-full w-6" />
              <div className="bg-[#a3ceff] h-1.5 rounded-full w-6" />
              <div className="bg-[#c3d1ff] h-1.5 rounded-full w-6" />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="lg:grid lg:gap-8 lg:grid-cols-[410px_1fr]">
          {/* Left Column - Steps */}
          <div className="space-y-4 sm:space-y-8">
            {/* Step 1: Trust AI */}
            <div className="bg-background rounded-sm py-6 px-6 sm:px-8 flex gap-4 sm:gap-10 relative overflow-hidden">
              <div className="flex flex-col items-center h-full">
                <div className="font-medium text-[#1e2119] text-5xl/snug sm:text-7xl/snug w-12 text-center">
                  1
                </div>

                <div className="border-dashed border-l-2 border-[#1e2119] h-3"></div>

                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center border-[#1e2119]">
                  <FaArrowDown className="text-[#1e2119] w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>

              <div className="flex-1 mt-2 sm:mt-4 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-[#1e2119] text-lg sm:text-2xl">
                    Trust AI
                  </h3>
                  <p className="font-blog text-[#1e2119] text-sm sm:text-base">
                    Users gain confidence in AI systems with verifiable security
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Unlock Use Cases */}
            <div className="bg-background rounded-sm py-6 pl-4 pr-6 sm:pl-6 sm:pr-8 flex gap-4 sm:gap-10 border-l-8 border-[#b8e836] relative overflow-hidden">
              <div className="flex flex-col items-center h-full">
                <div className="font-medium text-[#1e2119] text-5xl/snug sm:text-7xl/snug w-12 text-center">
                  2
                </div>

                <div className="border-dashed border-l-2 border-[#1e2119] h-16 sm:h-20"></div>

                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center border-[#1e2119]">
                  <FaArrowDown className="text-[#1e2119] w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>

              <div className="flex-1 mt-2 sm:mt-4 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-[#1e2119] text-lg sm:text-2xl">
                    Unlock Use Cases
                  </h3>
                  <p className="font-blog text-[#1e2119] text-sm sm:text-base">
                    Enable sensitive data processing previously impossible
                  </p>
                </div>
              </div>
              {/* Financial AI Card */}
              <div className="bg-[#b8e735ca] rounded-tl-[12px] px-8 sm:px-12 h-16 sm:h-20 flex items-center justify-center absolute right-0 bottom-0">
                <div className="font-semibold text-[#1e2119] text-lg sm:text-2xl">
                  Financial + AI
                </div>
              </div>
            </div>

            <div className="lg:hidden">{demo}</div>

            {/* Step 3: Win the Market */}
            <div className="bg-background rounded-sm py-6 px-6 sm:px-8 flex gap-4 sm:gap-10 relative overflow-hidden">
              <div className="flex flex-col items-center h-full">
                <div className="font-medium text-[#1e2119] text-5xl/snug sm:text-7xl/snug w-12 text-center">
                  3
                </div>

                <div className="border-dashed border-l-2 border-[#1e2119] h-3"></div>

                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center border-[#1e2119]">
                  <FaCheck className="text-[#1e2119] w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>

              <div className="flex-1 mt-2 sm:mt-4 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-[#1e2119] text-lg sm:text-2xl">
                    Win the Market
                  </h3>
                  <p className="font-blog text-[#1e2119] text-sm sm:text-base">
                    Trust drives adoption, revenue, and competitive advantage
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Card */}
          <div className="hidden lg:block">{demo}</div>
        </div>
      </div>
    </div>
  )
}
