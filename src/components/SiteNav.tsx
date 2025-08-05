'use client'

import { type ReactNode, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import { BiDetail } from 'react-icons/bi'
import { MdAssignment, MdMenu } from 'react-icons/md'
import { IoServer, IoNewspaperSharp } from 'react-icons/io5'
import { FiBox } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'

// Types
interface DropdownItem {
  title: string
  href: string
  icon?: ReactNode
  description?: string
}

interface NavItem {
  label: string
  href?: string
  type: 'link' | 'dropdown'
  items?: DropdownItem[]
}

interface ButtonItem {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

interface MenuData {
  mainNav: NavItem[]
  rightButtons: ButtonItem[]
}

// Navigation configuration
const menuData: MenuData = {
  mainNav: [
    {
      label: 'Why TEE',
      href: '/why-tee',
      type: 'link',
    },
    {
      label: 'Confidential AI',
      href: '/confidential-ai',
      type: 'link',
    },
    {
      label: 'Solutions',
      type: 'dropdown',
      items: [
        {
          title: 'Case Studies',
          href: '/case-studies',
          icon: <MdAssignment className="h-4 w-4" />,
          description: 'Real-world implementations and success stories',
        },
        {
          title: 'Apps Built on Phala Cloud',
          href: '/apps',
          icon: <img src="/icons/phala-cloud.png" className="h-4 w-4" />,
          description: 'Applications powered by our infrastructure',
        },
        {
          title: 'Blog',
          href: '/blog',
          icon: <IoNewspaperSharp className="h-4 w-4" />,
          description: 'Latest insights and updates',
        },
      ],
    },
    {
      label: 'Developers',
      type: 'dropdown',
      items: [
        {
          title: 'Docs',
          href: 'https://docs.phala.network',
          icon: <BiDetail className="h-4 w-4" />,
          description: 'Complete developer documentation',
        },
        {
          title: 'Guides',
          href: '/guides',
          icon: <FiBox className="h-4 w-4" />,
          description: 'Step-by-step implementation guides',
        },
        {
          title: 'SDK',
          href: '/sdk',
          icon: <FiBox className="h-4 w-4" />,
          description: 'Software development kits and tools',
        },
        {
          title: 'Templates',
          href: '/templates',
          icon: <IoServer className="h-4 w-4" />,
          description: 'Ready-to-use project templates',
        },
        {
          title: 'CLI / API',
          href: '/cli-api',
          icon: <MdAssignment className="h-4 w-4" />,
          description: 'Command line interface and API references',
        },
      ],
    },
    {
      label: 'Pricing',
      href: '/pricing',
      type: 'link',
    },
    {
      label: 'Network',
      type: 'dropdown',
      items: [
        {
          title: 'About',
          href: '/about',
          icon: <img src="/icons/menu-about-phala.png" className="h-4 w-4" />,
          description: 'Learn about Phala Network',
        },
        {
          title: 'Wallet',
          href: '/wallet',
          icon: <FiBox className="h-4 w-4" />,
          description: 'Manage your PHA tokens and assets',
        },
        {
          title: 'Mining',
          href: '/mining',
          icon: <FiBox className="h-4 w-4" />,
          description: 'Participate in network mining',
        },
        {
          title: 'PHA Token',
          href: 'https://docs.phala.network/tech-specs/pha-token?utm_source=phala.network&utm_medium=site-nav',
          icon: <img src="/icons/menu-pha-token.png" className="h-4 w-4" />,
          description: 'PHA is the native token of the Phala blockchain',
        },
        {
          title: 'Compute to Earn',
          href: 'https://docs.phala.network/compute-providers/basic-info?utm_source=phala.network&utm_medium=site-nav',
          icon: <FiBox className="h-4 w-4" />,
          description: 'Provide hardware to the network and earn rewards!',
        },
        {
          title: 'Stake',
          href: 'https://app.phala.network/?utm_source=phala.network&utm_medium=site-nav',
          icon: <FiBox className="h-4 w-4" />,
          description: 'Help secure the network and earn yield by staking your PHA',
        },
        {
          title: 'Govern',
          href: 'https://phala.subsquare.io/?utm_source=phala.network&utm_medium=site-nav',
          icon: <MdAssignment className="h-4 w-4" />,
          description: 'Take an active part in deciding the future direction of off-chain compute',
        },
        {
          title: 'Bridge',
          href: 'https://subbridge.io/?utm_source=phala.network&utm_medium=site-nav',
          icon: <FiBox className="h-4 w-4" />,
          description: 'Bring tokens to and from the Phala Blockchain with SubBridge',
        },
        {
          title: 'Learn',
          href: 'https://docs.phala.network/?utm_source=phala.network&utm_medium=site-nav',
          icon: <FiBox className="h-4 w-4" />,
          description: 'Explore the architecture and power of Phala Network',
        },
      ],
    },
    {
      label: 'About',
      href: '/about',
      type: 'link',
    },
  ],
  rightButtons: [
    {
      label: 'Contact',
      href: '/contact',
      variant: 'secondary',
    },
    {
      label: 'Sign in',
      href: '/signin',
      variant: 'secondary',
    },
    {
      label: 'Sign up',
      href: '/signup',
      variant: 'primary',
    },
  ],
}

// Components
function Logo() {
  return (
    <Link
      href="/"
      className={cn(
        'h-8 md:h-10 shrink-0 block',
        'col-span-1 col-start-1 lg:col-span-3 row-start-1'
      )}
    >
      <svg
        className="h-full"
        viewBox="0 0 138 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 7.68C0 4.99175 0 3.64762 0.523169 2.62085C0.983362 1.71767 1.71767 0.983361 2.62085 0.523169C3.64762 0 4.99175 0 7.68001 0H40.32C43.0083 0 44.3524 0 45.3792 0.523169C46.2824 0.983361 47.0167 1.71767 47.4769 2.62085C48 3.64762 48 4.99175 48 7.68V40.32C48 43.0083 48 44.3524 47.4769 45.3792C47.0167 46.2823 46.2824 47.0166 45.3792 47.4768C44.3524 48 43.0083 48 40.32 48H7.68001C4.99175 48 3.64762 48 2.62085 47.4768C1.71767 47.0166 0.983362 46.2823 0.523169 45.3792C0 44.3524 0 43.0083 0 40.32V7.68Z"
          fill="#CDFA50"
        />
        <path d="M11.2 29.3337H16.5333V37.3337H11.2V29.3337Z" fill="#1E2119" />
        <path
          d="M32.5333 16.0003H37.8667V24.0003H32.5333V16.0003Z"
          fill="#1E2119"
        />
        <path
          d="M16.5333 24.0003H32.5333V29.3337H16.5333V24.0003Z"
          fill="#1E2119"
        />
        <path
          d="M11.2 10.667H32.5333V16.0003H16.5333V24.0003L11.2 23.9337V10.667Z"
          fill="#1E2119"
        />
        <path
          d="M71.8631 21.5534C71.8631 25.2787 69.5299 27.4266 65.459 27.4266H62.2804V31.9977H58.6666V15.9998H65.459C69.5299 15.9998 71.8631 18.0111 71.8631 21.5534ZM68.4325 21.6676C68.4325 19.8852 67.2886 18.9941 65.2763 18.9941H62.2804V24.4105H65.2763C67.2886 24.4105 68.4325 23.4958 68.4325 21.6676Z"
          fill="#1E2119"
        />
        <path
          d="M77.5266 15.9998V23.999H84.7766V15.9998H88.3883V31.9977H84.7766V27.1982H77.5266V31.9977H73.916V15.9998H77.5266Z"
          fill="#1E2119"
        />
        <path
          d="M102.261 28.798H94.9242L93.6297 31.9998H89.9017L96.8542 16.002H100.582L107.421 31.9998H103.555L102.261 28.798ZM100.974 25.5962L98.6133 19.7711L96.2332 25.5984L100.974 25.5962Z"
          fill="#1E2119"
        />
        <path
          d="M132.71 28.798H125.373L124.078 31.9998H120.35L127.303 16.002H131.031L137.867 31.9998H134.001L132.71 28.798ZM131.423 25.5962L129.064 19.7689L126.684 25.5962H131.423Z"
          fill="#1E2119"
        />
        <path
          d="M112.686 15.9998V28.8439H119.547V31.9977H109.072V15.9998H112.686Z"
          fill="#1E2119"
        />
      </svg>
    </Link>
  )
}

function SimpleDropdown({ trigger, children }: { trigger: ReactNode; children: ReactNode }) {
  return (
    <div className="relative group">
      <div className="cursor-pointer">{trigger}</div>
      <div className="absolute top-full left-0 mt-2 w-64 bg-background rounded-sm border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {children}
      </div>
    </div>
  )
}

function MobileMenuColumn({ items, onItemClick }: { items: NavItem[]; onItemClick: () => void }) {
  return (
    <div className="flex-1 space-y-4">
      {items.map((item) => {
        if (item.type === 'link') {
          return (
            <Link
              key={item.label}
              href={item.href!}
              className="block text-sm font-semibold text-gray-900 hover:text-gray-600"
              onClick={onItemClick}
            >
              {item.label}
            </Link>
          )
        } else if (item.type === 'dropdown') {
          return (
            <div key={item.label}>
              <div className="text-sm font-semibold text-gray-900 mb-2">
                {item.label}
              </div>
              <div className="space-y-1">
                {item.items?.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.title}
                    href={dropdownItem.href}
                    className="block text-xs text-gray-600 hover:text-gray-900"
                    onClick={onItemClick}
                  >
                    {dropdownItem.title}
                  </Link>
                ))}
              </div>
            </div>
          )
        }
        return null
      })}
    </div>
  )
}

function MobileNavDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const midPoint = Math.ceil(menuData.mainNav.length / 2)
  const firstHalf = menuData.mainNav.slice(0, midPoint)
  const secondHalf = menuData.mainNav.slice(midPoint)

  return (
    <div className="lg:hidden relative">
      <button onClick={toggleMenu} className="p-2 text-[#1e2119]">
        <MdMenu className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-background border-t">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12 py-6">
            <div className="flex gap-8">
              <MobileMenuColumn items={firstHalf} onItemClick={closeMenu} />
              <MobileMenuColumn items={secondHalf} onItemClick={closeMenu} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function SiteNavItem({ children, dropdownItems }: { children: ReactNode; dropdownItems: ReactNode }) {
  return (
    <SimpleDropdown
      trigger={
        <div className="flex flex-row gap-1.5 items-center text-[#1e2119] text-sm font-medium">
          {children}
          <IoIosArrowDown className="h-3 w-3" />
        </div>
      }
    >
      {dropdownItems}
    </SimpleDropdown>
  )
}

function MenuItem({ href, title, icon, children }: { href?: string; title: string; icon?: ReactNode; children?: ReactNode }) {
  const content = (
    <div className="flex flex-row gap-3 items-start">
      <div className="h-6 w-6 flex items-center justify-center text-gray-600 shrink-0 mt-0.5">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm font-medium text-gray-900">{title}</div>
        {children && (
          <div className="text-xs text-gray-500 mt-1 font-blog">
            {children}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="px-4 py-3 hover:bg-gray-50 transition-colors">
      {href ? (
        <Link href={href}>
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  )
}

function DesktopNavigation() {
  return (
    <div className="hidden lg:flex lg:items-center lg:gap-6 lg:ml-8 lg:flex-1">
      {menuData.mainNav.map((item) => {
        if (item.type === 'link') {
          return (
            <Link
              key={item.label}
              href={item.href!}
              className="text-[#1e2119] text-sm font-medium"
            >
              {item.label}
            </Link>
          )
        } else if (item.type === 'dropdown') {
          return (
            <SiteNavItem
              key={item.label}
              dropdownItems={
                <>
                  {item.items?.map((dropdownItem) => (
                    <MenuItem
                      key={dropdownItem.title}
                      href={dropdownItem.href}
                      title={dropdownItem.title}
                      icon={dropdownItem.icon}
                    >
                      {dropdownItem.description}
                    </MenuItem>
                  ))}
                </>
              }
            >
              {item.label}
            </SiteNavItem>
          )
        }
        return null
      })}
    </div>
  )
}

function NavigationButtons() {
  return (
    <div className="flex flex-row sm:gap-2 items-center">
      {menuData.rightButtons.map((button) => (
        <Link
          key={button.label}
          href={button.href}
          className={cn(
            'text-[#1e2119] text-xs lg:text-sm font-medium px-3 lg:px-4 py-1.5 lg:py-2 rounded-full transition-colors border border-transparent',
            button.variant === 'primary'
              ? 'bg-[#c4f144] hover:bg-[#b8e33a]'
              : 'hover:border-[#1e2119]'
          )}
        >
          {button.label}
        </Link>
      ))}
      <MobileNavDropdown />
    </div>
  )
}

// Main Navigation Component
function SiteNav() {
  const { scrollY } = useScroll()
  const [hasScrolled, setHasScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    if (latest > 50) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  })

  return (
    <nav
      className={cn(
        'w-screen fixed top-0 left-0 h-16 transition-all duration-300',
        hasScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="flex flex-row items-center justify-between h-full max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12">
        <Logo />
        <DesktopNavigation />
        <NavigationButtons />
      </div>
    </nav>
  )
}

export default SiteNav