'use client'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'
import React, { useCallback, useState, useRef } from 'react'
import { FaArrowDown, FaCheck } from 'react-icons/fa6'

const flows = [
  {
    title: 'SaaS + AI',
    borderClassName: 'border-[#cbfa50]',
    bgClassName: 'bg-[#cbfa50]',
    time: 0,
  },
  {
    title: 'Financial + AI',
    borderClassName: 'border-[#a3ceff]',
    bgClassName: 'bg-[#a3ceff]',
    time: 11.8,
  },
  {
    title: 'Data + Model',
    borderClassName: 'border-[#c3d1ff]',
    bgClassName: 'bg-[#c3d1ff]',
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
    className={cn('rounded-lg overflow-hidden aspect-[1174/1080] bg-background', className)}
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
    <div className="w-full py-4 sm:py-6 lg:py-12 px-2 sm:px-8 lg:px-12">
      <div className="max-w-2xl xl:max-w-6xl mx-auto">
        <div className="mb-4 sm:mb-6">
          <div className="bg-background rounded-lg p-6 sm:p-8 w-full">
            <div className="space-y-3">
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">
                When Your Users Trust AI
              </h2>
              <p className="font-blog">
                Trust creates a powerful cycle that drives business growth and
                market leadership
              </p>
            </div>
            <div className="flex gap-2 mt-6">
              {flows.map((flow) => (
                <div
                  key={flow.title}
                  className={cn('h-1.5 rounded-full w-6', flow.bgClassName)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="lg:flex lg:gap-6">
          {/* Left Column - Steps */}
          <div className="space-y-4 sm:space-y-6 flex-1">
            {/* Step 1: Trust AI */}
            <div className="bg-background rounded-lg pt-2 pb-6 px-4 sm:px-6 flex gap-4 sm:gap-6 relative overflow-hidden border-l-8 border-transparent">
              <div className="flex flex-col items-center h-full">
                <div className="font-medium text-5xl/snug sm:text-7xl/snug w-12 text-center">
                  1
                </div>

                <div className="border-dashed border-l-2 h-3 border-primary-foreground"></div>

                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center border-primary-foreground">
                  <FaArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>

              <div className="flex-1 mt-2 sm:mt-4 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg sm:text-2xl">
                    Trust AI
                  </h3>
                  <p className="font-blog text-sm sm:text-base">
                    Users gain confidence in AI systems with verifiable security
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Unlock Use Cases */}
            <div
              className={cn(
                'bg-background rounded-lg pt-2 pb-6 px-4 sm:px-6 flex gap-4 sm:gap-6 border-l-8 relative overflow-hidden transition-[border-color] duration-300',
                flow.borderClassName
              )}
            >
              <div className="flex flex-col items-center h-full">
                <div className="font-medium text-5xl/snug sm:text-7xl/snug w-12 text-center">
                  2
                </div>

                <div className="border-dashed border-l-2 h-16 sm:h-12 border-primary-foreground"></div>

                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center border-primary-foreground">
                  <FaArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>

              <div className="flex-1 mt-2 sm:mt-4 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg sm:text-2xl">
                    Unlock Use Cases
                  </h3>
                  <p className="font-blog text-sm sm:text-base">
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
                      'transition-[width] duration-500 ease-in-out overflow-hidden pr-4 rounded-tl-lg h-16 cursor-pointer',
                      flow.title === flowItem.title ? 'w-[240px]' : 'w-8',
                      flowItem.bgClassName
                    )}
                    onClick={() => handleTitleClick(flowItem)}
                  >
                    <div className="h-full flex items-center justify-center overflow-hidden w-[224px]">
                      <span
                        className={cn(
                          'font-semibold text-lg sm:text-xl whitespace-nowrap'
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
            <div className="bg-background rounded-lg pt-2 pb-6 px-4 sm:px-6 flex gap-4 sm:gap-6 relative overflow-hidden border-l-8 border-transparent">
              <div className="flex flex-col items-center h-full">
                <div className="font-medium text-5xl/snug sm:text-7xl/snug w-12 text-center">
                  3
                </div>

                <div className="border-dashed border-l-2 h-3 border-primary-foreground"></div>

                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center border-primary-foreground">
                  <FaCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>

              <div className="flex-1 mt-2 sm:mt-4 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg sm:text-2xl">
                    Win the Market
                  </h3>
                  <p className="font-blog text-sm sm:text-base">
                    Trust drives adoption, revenue, and competitive advantage
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Card */}
          {!isMobile && (
            <div className="h-[633px]">
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
