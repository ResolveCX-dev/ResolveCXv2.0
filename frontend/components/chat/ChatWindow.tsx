'use client';

import { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { Message } from '@/types/chat';

export default function ChatWindow() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'assistant',
            content: 'Hello! How can I help you today?',
            timestamp: new Date(),
        }
    ]);

    const handleSend = (content: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content,
            timestamp: new Date(),
        };

        setMessages([...messages, newMessage]);

        // TODO: Send to backend and get response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: 'This is a demo response. Backend integration coming soon!',
                timestamp: new Date(),
            }]);
        }, 1000);
    };

    return (
        <div className="flex flex-col h-screen w-full rounded-[15px]">
            <div className="bg-blue-500 text-white p-4 flex items-center gap-3 rounded-t-[15px]">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-500 font-bold">RX</span>
                </div>
                <div>
                    <h1 className="font-semibold">ResolveX Assistant</h1>
                    <p className="text-xs opacity-90">Always here to help</p>
                </div>
            </div>


                <div className=" flex-1 overflow-y-auto bg-gray-50">
                {messages.map(message => (
                    <ChatMessage key={message.id} message={message} />
                ))}
            </div>

            <div className="bottom-0 rounded-b-[15px]">
                                    <ChatInput onSend={handleSend} />
            </div>

            
        </div>
    );
}