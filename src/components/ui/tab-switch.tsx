'use client'

import React, { useState } from 'react'

interface Tab {
  id: string
  label: string
}

interface TabSwitchProps {
  tabs: Tab[]
  defaultActiveTab?: string
  onTabChange?: (activeTabId: string) => void
  className?: string
}

export function TabSwitch({
  tabs,
  defaultActiveTab,
  onTabChange,
  className = '',
}: TabSwitchProps) {
  const [activeTab, setActiveTab] = useState(
    defaultActiveTab || tabs[0]?.id || ''
  )

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    onTabChange?.(tabId)
  }

  return (
    <div className={`flex gap-6 justify-center ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className="flex flex-col items-center px-2 py-3 transition-colors"
          >
            <span
              className={`text-xl text-[#1e2119] ${
                isActive ? 'font-semibold' : 'font-medium'
              }`}
            >
              {tab.label}
            </span>
            {isActive && <div className="h-1 bg-[#bae730] w-full mt-1"></div>}
          </button>
        )
      })}
    </div>
  )
}
