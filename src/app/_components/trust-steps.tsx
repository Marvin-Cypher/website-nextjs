'use client'
import { cn } from '@/lib/utils'
import React, { useCallback, useState, useRef } from 'react'

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
    className={cn(
      'rounded-lg overflow-hidden aspect-[1174/1080] bg-background',
      className
    )}
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

const DATA: DataItem[] = [
  {
    id: 1,
    title: 'Trust AI',
    description: 'Users gain confidence in AI systems with verifiable security',
  },
  {
    id: 2,
    title: 'Unlock Use Cases',
    description: 'Enable sensitive data processing previously impossible',
  },
  {
    id: 3,
    title: 'Win the Market',
    description: 'Trust drives adoption, revenue, and competitive advantage',
  },
]

type DataItem = {
  id: number
  title: string
  description: string
}

type StepItemProps = {
  step: DataItem
  isLast: boolean
}

const StepItem: React.FC<StepItemProps> = ({ step, isLast }) => {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <div
          className={`bg-primary/40 bg-gradient-to-b absolute h-full w-1 -translate-x-1/2 translate-y-11 left-1/2 ${
            isLast ? 'from-primary/40 to-background' : ''
          }`}
        />
        <div className="bg-background relative z-0 grid size-11 place-content-center rounded-full border-4">
          <p className="text-lg font-bold font-heading">{step.id}</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-lg font-semibold font-heading">{step.title}</p>
        <p className="text-muted-foreground mt-2">{step.description}</p>
      </div>
    </div>
  )
}

export default function TrustSteps() {
  const [flow, setFlow] = useState<Flow>(flows[0])
  // const isMobile = useIsMobile(1280)
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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_700px] gap-16 lg:gap-10">
          <div className="max-sm:px-4">
            <h2 className="font-bold text-2xl md:text-3xl">
              When Your Users Trust AI
            </h2>
            <p className="mt-4 text-muted-foreground">
              Trust creates a powerful cycle that drives business growth and
              market leadership
            </p>
            <div className="space-y-6 lg:space-y-10 mt-6 lg:mt-10">
              {DATA.map((step, index) => (
                <StepItem
                  key={step.id}
                  step={step}
                  isLast={index === DATA.length - 1}
                />
              ))}
            </div>
          </div>
          <VideoDemo
            videoRef={videoRef}
            onTimeUpdate={handleTimeUpdate}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
