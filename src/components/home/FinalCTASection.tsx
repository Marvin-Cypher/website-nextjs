import React from 'react'

export default function FinalCTASection() {
  return (
    <div className="w-full pt-8 sm:pt-16 pb-2 sm:pb-6 px-2 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="bg-[#1e2119] rounded-sm overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/home/cta-bg.png)' }}
        >
          <div className="px-6 py-8 md:px-16 md:py-14">
            <h2 className="font-semibold text-3xl md:text-5xl text-white">
              Ready to Build
              <br />
              AI People Trust?
            </h2>
            <p className="text-[#e0e2dd] text-lg md:text-2xl font-medium mt-4 md:mt-8">
              Join <span className="font-bold text-[#cdfa50]">500+</span> teams
              deploying trustworthy AI in production
            </p>

            <div className="flex flex-row gap-3 items-center mt-12 md:mt-20 lg:mt-24">
              <button className="bg-[#c4f144] hover:bg-[#b8e33a] justify-center py-3 rounded-full w-40 transition-colors font-semibold text-sm text-[#1e2119] text-[14px] text-center text-nowrap">
                Get started
              </button>
              <button className="border border-white hover:border-gray-200 justify-center py-3 rounded-full w-40 transition-colors font-semibold text-sm text-white text-[14px] text-center text-nowrap">
                Request a demo
              </button>
            </div>

            <p className="text-[#e0e2dd] text-sm font-medium font-blog mt-4">
              No credit card required. Deploy your first model in 5 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
