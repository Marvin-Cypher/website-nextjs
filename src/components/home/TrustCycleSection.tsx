import React from 'react'

const imgFrame47622 = '/9857ee62d5d3821f84291e8fd1dcefd9a9eefc94.svg'
const imgFrame47623 = '/77e7f73ec5abc927727b5f1054cacc05a26f14a6.svg'

export default function TrustCycleSection() {
  const demo = (
    <div className="bg-[#bae730] rounded-sm lg:h-full relative overflow-hidden">
      {/* Background Circle */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-130%] w-[1322px] h-[1322px] bg-lime-600 rounded-full blur-[200px]" />

      {/* Demo Content */}
      <div className="relative w-full h-full py-8 px-4 flex items-center justify-center">
        <div className="rounded-lg p-3 bg-background/50 w-full max-w-[530px] h-[657px]">
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
    <div className="w-full bg-[#f9f9f7] pt-4 sm:pt-8 lg:pt-16 pb-8 px-2 sm:px-8 lg:px-20">
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
        <div className="lg:grid lg:gap-8 lg:grid-cols-3">
          {/* Left Column - Steps */}
          <div className="space-y-4 sm:space-y-8">
            {/* Step 1: Trust AI */}
            <div className="bg-background rounded-sm py-6 px-6 sm:px-8 flex gap-4 sm:gap-10 relative overflow-hidden">
              <div className="flex flex-col items-center h-full">
                <div className="font-medium text-[#1e2119] text-5xl/snug sm:text-7xl/snug w-12 text-center">
                  1
                </div>

                <div className="border-dashed border-l-2 border-[#1e2119] h-3"></div>

                <img
                  src={imgFrame47622}
                  alt=""
                  className="w-8 h-8 sm:w-12 sm:h-12 rotate-90"
                />
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
            <div className="bg-background rounded-sm py-6 px-6 sm:px-8 flex gap-4 sm:gap-10 border-l-8 border-[#b8e836] relative overflow-hidden">
              <div className="flex flex-col items-center h-full">
                <div className="font-medium text-[#1e2119] text-5xl/snug sm:text-7xl/snug w-12 text-center">
                  2
                </div>

                <div className="border-dashed border-l-2 border-[#1e2119] h-16"></div>

                <img
                  src={imgFrame47622}
                  alt=""
                  className="w-8 h-8 sm:w-12 sm:h-12 rotate-90"
                />
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
              <div className="bg-[#b9e735] rounded-tl-[12px] px-8 h-20 sm:h-24 flex items-center justify-center absolute right-0 bottom-0 sm:min-w-[300px]">
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

                <img
                  src={imgFrame47623}
                  alt=""
                  className="w-8 h-8 sm:w-12 sm:h-12 rotate-90"
                />
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
          <div className="hidden lg:block col-span-2">{demo}</div>
        </div>
      </div>
    </div>
  )
}
