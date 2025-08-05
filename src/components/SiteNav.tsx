'use client'
import { useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Navbar3 } from './navbar3'

// Main Navigation Component
function SiteNav() {
  const { scrollY } = useScroll()
  const [hasScrolled, setHasScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    if (latest > 20) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  })

  return (
    <div
      className={cn(
        'w-screen fixed top-0 left-0 transition-[background-color] duration-100',
        hasScrolled && 'bg-background'
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12">
        <Navbar3 />
      </div>
    </div>
  )
}

export default SiteNav
