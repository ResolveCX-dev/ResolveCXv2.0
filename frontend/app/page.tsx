import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatWindow from '@/components/chat/ChatWindow'

export default function Page() {
  return (
    <div className="min-h-screen p-6 flex bg-gray-50">
      <Sidebar />
      <ChatWindow />
    </div>
  )
}