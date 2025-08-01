import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

const footerSections = [
  {
    title: 'AI Solutions',
    links: [
      { label: 'Confidential AI Models', href: '#' },
      { label: 'GPU TEE Inference', href: '#' },
      { label: 'Agent Framework', href: '#' },
      { label: 'MCP Hosting', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'Quick Start', href: '#' },
      { label: 'Documentation Hub', href: '#' },
      { label: 'Builder Tools', href: '#' },
      { label: 'Community', href: '#' },
    ],
  },
  {
    title: 'Security',
    links: [
      { label: 'TEE Technology', href: '#' },
      { label: 'Trust Center', href: '#' },
      { label: 'Verification', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  },
]

function Logo() {
  return (
    <Link href="/" className="h-12 shrink-0 block">
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
          fill="#fff"
        />
        <path
          d="M77.5266 15.9998V23.999H84.7766V15.9998H88.3883V31.9977H84.7766V27.1982H77.5266V31.9977H73.916V15.9998H77.5266Z"
          fill="#fff"
        />
        <path
          d="M102.261 28.798H94.9242L93.6297 31.9998H89.9017L96.8542 16.002H100.582L107.421 31.9998H103.555L102.261 28.798ZM100.974 25.5962L98.6133 19.7711L96.2332 25.5984L100.974 25.5962Z"
          fill="#fff"
        />
        <path
          d="M132.71 28.798H125.373L124.078 31.9998H120.35L127.303 16.002H131.031L137.867 31.9998H134.001L132.71 28.798ZM131.423 25.5962L129.064 19.7689L126.684 25.5962H131.423Z"
          fill="#fff"
        />
        <path
          d="M112.686 15.9998V28.8439H119.547V31.9977H109.072V15.9998H112.686Z"
          fill="#fff"
        />
      </svg>
    </Link>
  )
}

const SiteFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#1e2119] text-white pt-8 lg:pt-12 pb-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:grid-rows-1 gap-8 mb-12">
          {/* Logo Column - First */}
          <div className="space-y-6 sm:col-span-3 lg:col-span-1">
            <Logo />
            {/* Newsletter */}
            <div>
              <div className="text-sm text-white mb-4 font-semibold">
                Subscribe to our newsletter
              </div>
              <div className="border-b border-white/10 max-w-[300px]">
                <div className="flex items-center justify-between pb-2">
                  <input
                    className="bg-transparent outline-none text-white placeholder-white/50 text-sm flex-1"
                    placeholder="Email address"
                  />
                  <button className="bg-[#c4f144] rounded-lg p-2 flex items-center justify-center ml-2">
                    <FaArrowRight size={16} className="text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4 sm:col-span-1">
              <h3 className="text-base font-semibold text-[#bae730]">
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="block text-sm font-medium text-white hover:text-[#bae730] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - Copyright & Social Icons */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white">
              © 2025 Phala. Build AI People Can Trust.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com/PhalaNetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://discord.gg/phala-network"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>
              <a
                href="https://t.me/phalanetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
