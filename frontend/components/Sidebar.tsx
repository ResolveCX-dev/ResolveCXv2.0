'use client'
import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

const sections = [
  { id: 'chats', label: 'Chats', subtitle: 'Recent', icon: '💬' },
  { id: 'channels', label: 'Channels', subtitle: 'Teams & topics', icon: '📂' },
  { id: 'contacts', label: 'Contacts', subtitle: 'People', icon: '👥' },
  { id: 'starred', label: 'Starred', subtitle: 'Important', icon: '⭐' },
  { id: 'archived', label: 'Archived', subtitle: 'Old chats', icon: '🗄️' },
]

const Sidebar = () => {
  return (
    <aside className="flex flex-col border-r max-h-screen w-72 bg-white text-gray-800 rounded-[15px]">
      <div className="flex items-center justify-between p-4 border-b">
        <button
          type="button"
          onClick={() => history.back()}
          aria-label="Go back"
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex justify-center">
          <Logo />
        </div>

        <Link href="/new" className="p-2 rounded-md hover:bg-gray-100 transition" aria-label="Start new chat">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
          </svg>
        </Link>
      </div>

      <div className="p-3">
        <button className="w-full text-left bg-linear-to-r from-white to-gray-50 border rounded-md px-3 py-2 font-medium text-sm hover:shadow-sm">
          + New Chat
        </button>

        <div className="mt-4">
          <nav className="space-y-1">
            {sections.map((s) => (
              <button
                key={s.id}
                className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-gray-50 transition text-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="text-lg">{s.icon}</div>
                  <div className="text-left">
                    <div className="font-medium">{s.label}</div>
                    <div className="text-xs text-gray-500">{s.subtitle}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">3</div>
              </button>
            ))}
          </nav>
        </div>

      </div>

      <div className="mt-auto p-4 border-t">
        <div className="flex items-center justify-between gap-3">
          <Link href="/settings" className="flex items-center gap-2 text-sm text-gray-700 hover:text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0a1.724 1.724 0 002.583 1.01c.8-.581 1.9.02 1.9.99 0 .386.28.714.662.78a1.725 1.725 0 011.5 1.684c0 .678.541 1.229 1.219 1.229.655 0 1.174.633.99 1.284-.135.455.068.94.48 1.208.337.22.48.636.333 1.01-.773 2.061-2.63 3.503-4.78 3.503-1.445 0-2.78-.593-3.746-1.62l-.84.84c-.39.39-1.024.39-1.414 0l-1.414-1.414a1 1 0 010-1.414l.84-.84A5.978 5.978 0 018.5 12c0-1.66.672-3.166 1.762-4.242.3-.3.693-.469 1.106-.53z" />
            </svg>
            Settings
          </Link>

          <Link href="/profile" className="flex items-center gap-2">
            <img src="/avatar-placeholder.png" alt="Profile" className="h-8 w-8 rounded-full bg-gray-100" />
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
