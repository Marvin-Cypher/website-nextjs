'use client'

import { type ReactNode, useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import { BiDetail } from 'react-icons/bi'
import { MdAssignment } from 'react-icons/md'
import { IoServer, IoNewspaperSharp } from 'react-icons/io5'
import { FiBox } from 'react-icons/fi'
import { cn } from '@/lib/utils'
import { Navbar1 } from './navbar1'

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
          description:
            'Help secure the network and earn yield by staking your PHA',
        },
        {
          title: 'Govern',
          href: 'https://phala.subsquare.io/?utm_source=phala.network&utm_medium=site-nav',
          icon: <MdAssignment className="h-4 w-4" />,
          description:
            'Take an active part in deciding the future direction of off-chain compute',
        },
        {
          title: 'Bridge',
          href: 'https://subbridge.io/?utm_source=phala.network&utm_medium=site-nav',
          icon: <FiBox className="h-4 w-4" />,
          description:
            'Bring tokens to and from the Phala Blockchain with SubBridge',
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

// Convert menuData to navbar1 format
const convertToNavbar1Format = () => {
  const menu = menuData.mainNav.map((item) => {
    if (item.type === 'link') {
      return {
        title: item.label,
        url: item.href || '#',
      }
    } else if (item.type === 'dropdown') {
      return {
        title: item.label,
        url: '#',
        items:
          item.items?.map((dropdownItem) => ({
            title: dropdownItem.title,
            url: dropdownItem.href,
            description: dropdownItem.description,
            icon: dropdownItem.icon,
          })) || [],
      }
    }
    return { title: item.label, url: '#' }
  })

  const auth = {
    login: {
      title:
        menuData.rightButtons.find((btn) => btn.variant === 'secondary')
          ?.label || 'Sign in',
      url:
        menuData.rightButtons.find((btn) => btn.variant === 'secondary')
          ?.href || '/signin',
    },
    signup: {
      title:
        menuData.rightButtons.find((btn) => btn.variant === 'primary')?.label ||
        'Sign up',
      url:
        menuData.rightButtons.find((btn) => btn.variant === 'primary')?.href ||
        '/signup',
    },
  }

  return { menu, auth }
}

const { menu, auth } = convertToNavbar1Format()

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
    <div
      className={cn(
        'w-screen fixed top-0 left-0 transition-[background-color] duration-300',
        hasScrolled && 'bg-background',
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12">
        <Navbar1
          logo={{
            url: '/',
            src: '/home/logo.svg',
            alt: 'Phala Network',
            title: '',
          }}
          menu={menu}
          auth={auth}
        />
      </div>
    </div>
  )
}

export default SiteNav
