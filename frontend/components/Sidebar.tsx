'use client'
import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { CircleQuestionMark, LucideIcon, MessageCircle, Menu, X } from 'lucide-react';

interface Section {
  title: string;
  subtitle: string;
  icon: LucideIcon
}

const sections:Section[]=[
  {
    title: 'Chats',
    subtitle: 'Recent',
    icon:MessageCircle
  },{
    title: 'Getting Started',
    subtitle: 'How to Use', 
    icon:CircleQuestionMark
  }
]


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        flex flex-col min-h-screen w-72 bg-blue-900 text-black rounded-[15px]
        fixed lg:static top-0 left-0 z-40 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center gap-2 p-4 ">
          <button
            type="button"
            onClick={() => history.back()}
            aria-label="Go back"
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
            <Logo />
        </div>

        <div className="p-3">
          <button className="w-full text-left bg-linear-to-r from-white to-gray-50 border rounded-md px-3 py-2 font-medium text-sm hover:shadow-sm">
            + New Chat
          </button>

          <div className="mt-4">
            <nav className="space-y-1">
              {sections.map((section,key) => (
                <button
                  key={key}
                  className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-gray-50 transition text-sm"
                >
                  <div className="flex items-center gap-3">
                    {section.icon && <section.icon className="h-5 w-5 text-white" />}
                    <div className="text-left">
                      <div className="font-medium">{section.title}</div>
                      <div className="text-xs text-white">{section.subtitle}</div>
                    </div>
                  </div>
                </button>
              ))}
            </nav>
          </div>

        </div>

        <div className="mt-auto p-4 border-t">
          <div className="flex items-center justify-between gap-3">
            <Link href="/settings" className="flex items-center gap-2 text-sm text-white hover:text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0a1.724 1.724 0 002.583 1.01c.8-.581 1.9.02 1.9.99 0 .386.28.714.662.78a1.725 1.725 0 011.5 1.684c0 .678.541 1.229 1.219 1.229.655 0 1.174.633.99 1.284-.135.455.068.94.48 1.208.337.22.48.636.333 1.01-.773 2.061-2.63 3.503-4.78 3.503-1.445 0-2.78-.593-3.746-1.62l-.84.84c-.39.39-1.024.39-1.414 0l-1.414-1.414a1 1 0 010-1.414l.84-.84A5.978 5.978 0 018.5 12c0-1.66.672-3.166 1.762-4.242.3-.3.693-.469 1.106-.53z" />
              </svg>
              Settings
            </Link>

            <Link href="/profile" className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-8 w-8 rounded-full bg-blue-900" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar