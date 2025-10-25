// components/chat/ChatMessage.tsx
import { Message } from '@/types/chat';
import { Bot, User } from 'lucide-react';

export default function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex gap-3 p-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      
      <div className={`max-w-[70%] rounded-lg p-3 ${
        isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'
      }`}>
        <p className="text-sm">{message.content}</p>
        <span className="text-xs opacity-70 mt-1 block">
          {message.timestamp.toLocaleTimeString()}
        </span>
      </div>
      
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <User className="w-5 h-5 text-gray-700" />
        </div>
      )}
    </div>
  );
}