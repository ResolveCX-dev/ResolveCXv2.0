import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatWindow from '@/components/chat/ChatWindow'

export default function Page() {
  return (
    <div className="min-h-screen p-2 flex bg-blue-900 gap-3">
      <Sidebar />
      <ChatWindow />
    </div>
  )
}