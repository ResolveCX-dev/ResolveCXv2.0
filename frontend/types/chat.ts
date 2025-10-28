// types/chat.ts
export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  confidence?: number; // For RAG confidence
  sources?: Source[];
}

export interface Source {
  title: string;
  url?: string;
  excerpt: string;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  language: string;
  customerId?: string; // End user identifier
}

export interface WidgetConfig {
  apiKey: string;
  theme: 'light' | 'dark';
  position: 'bottom-right' | 'bottom-left';
  primaryColor: string;
  greeting: string;
  language: string;
}