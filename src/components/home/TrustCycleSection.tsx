'use client'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'
import React, { useCallback, useState, useRef } from 'react'
import { FaArrowDown, FaCheck } from 'react-icons/fa6'

const flows = [
  {
    title: 'Financial + AI',
    borderClassName: 'border-[#b8e836]',
    bgClassName: 'bg-[#b8e836]',
    time: 0,
  },
  {
    title: 'a',
    borderClassName: 'border-[#8CD0FC]',
    bgClassName: 'bg-[#8CD0FC]',
    time: 11.8,
  },
  {
    title: 'b',
    borderClassName: 'border-[#949EED]',
    bgClassName: 'bg-[#949EED]',
    time: 26.8,
  },
]

type Flow = (typeof flows)[0]

interface VideoDemoProps {
  videoRef: React.RefObject<HTMLVideoElement>
  onTimeUpdate: (event: React.SyntheticEvent<HTMLVideoElement>) => void
  className?: string
}

const VideoDemo: React.FC<VideoDemoProps> = ({
  videoRef,
  onTimeUpdate,
  className,
}) => (
  <div
    className={cn('rounded-sm overflow-hidden aspect-[1174/1080]', className)}
  >
    <video
      ref={videoRef}
      className="block w-full h-full"
      autoPlay
      muted
      playsInline
      preload="auto"
      loop
      onTimeUpdate={onTimeUpdate}
    >
      <source src="/home/flow.mp4" type="video/mp4" />
    </video>
  </div>
)

export default function TrustCycleSection() {
  const [flow, setFlow] = useState<Flow>(flows[0])
  const isMobile = useIsMobile(1280)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleTimeUpdate = useCallback(
    (event: React.SyntheticEvent<HTMLVideoElement>) => {
      const video = event.currentTarget
      const currentTime = video.currentTime

      for (let i = flows.length - 1; i >= 0; i--) {
        if (currentTime >= flows[i].time) {
          if (flows[i].title !== flow.title) {
            setFlow(flows[i])
          }
          break
        }
      }
    },
    [flow]
  )

  const handleTitleClick = useCallback((flowItem: Flow) => {
    if (videoRef.current && videoRef.current.readyState >= 2) {
      try {
        videoRef.current.currentTime = flowItem.time
      } catch (error) {}
    }
  }, [])

  return (
    <div className="w-full py-4 sm:py-8 lg:py-16 px-2 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 sm:mb-8">
          <div className="bg-background rounded-sm p-6 sm:p-8 w-full">
            <div className="space-y-3">
              <h2 className="font-bold text-[#1e2119] text-xl sm:text-2xl md:text-3xl">
                When Your Users Trust AI
              </h2>
              <p className="font-blog font-normal text-[#61645b] text-base sm:text-lg">
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
        <div className="lg:flex lg:gap-8">
          {/* Left Column - Steps */}
          <div className="space-y-4 sm:space-y-8 flex-1">
            {/* Step 1: Trust AI */}
            <div className="bg-background rounded-sm pt-2 pb-6 px-4 sm:px-6 flex gap-4 sm:gap-10 relative overflow-hidden">
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
            <div
              className={cn(
                'bg-background rounded-sm pt-2 pb-6 px-4 sm:px-6 flex gap-4 sm:gap-10 border-l-8 relative overflow-hidden transition-all duration-300',
                flow.borderClassName
              )}
            >
              <div className="flex flex-col items-center h-full">
                <div className="font-medium text-[#1e2119] text-5xl/snug sm:text-7xl/snug w-12 text-center">
                  2
                </div>

                <div className="border-dashed border-l-2 border-[#1e2119] h-16 sm:h-12"></div>

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

              {/* Flow Titles List */}
              <div className="absolute right-0 bottom-0 flex items-center -space-x-4 -mr-4">
                {flows.map((flowItem) => (
                  <div
                    key={flowItem.title}
                    className={cn(
                      'transition-all duration-500 ease-in-out overflow-hidden pr-4 rounded-tl-[12px] h-16 sm:h-20 cursor-pointer',
                      flow.title === flowItem.title ? 'w-[240px]' : 'w-8',
                      flowItem.bgClassName
                    )}
                    onClick={() => handleTitleClick(flowItem)}
                  >
                    <div className="h-full flex items-center justify-center overflow-hidden w-[224px]">
                      <span
                        className={cn(
                          'font-semibold text-[#1e2119] text-lg sm:text-2xl whitespace-nowrap'
                        )}
                      >
                        {flowItem.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {isMobile && (
              <div className="mt-4">
                <VideoDemo
                  videoRef={videoRef}
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full"
                />
              </div>
            )}

            {/* Step 3: Win the Market */}
            <div className="bg-background rounded-sm pt-2 pb-6 px-4 sm:px-6 flex gap-4 sm:gap-10 relative overflow-hidden">
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
          {!isMobile && (
            <div className="h-[649px]">
              <VideoDemo
                videoRef={videoRef}
                onTimeUpdate={handleTimeUpdate}
                className="h-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
