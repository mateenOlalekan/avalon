import { useState } from 'react';
import { MessageSquare, Send, Search, Paperclip } from 'lucide-react';

// Sample chat data
const chatsList = [
  {
    id: 1,
    user: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      online: true
    },
    lastMessage: "I'd like to return my recent order",
    time: "2 min ago",
    unread: 2
  },
  {
    id: 2,
    user: {
      name: "Michael Scott",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      online: true
    },
    lastMessage: "Do you have this in a different color?",
    time: "25 min ago",
    unread: 1
  },
  {
    id: 3,
    user: {
      name: "Sarah Miller",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      online: false
    },
    lastMessage: "Thanks for your help yesterday!",
    time: "2 hours ago",
    unread: 0
  },
  {
    id: 4,
    user: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      online: false
    },
    lastMessage: "When will my order arrive?",
    time: "Yesterday",
    unread: 0
  },
  {
    id: 5,
    user: {
      name: "Olivia Martinez",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      online: false
    },
    lastMessage: "I have a question about shipping",
    time: "2 days ago",
    unread: 0
  }
];

const messages = [
  {
    id: 1,
    sender: "customer",
    text: "Hello! I'd like to return my recent order.",
    time: "10:32 AM"
  },
  {
    id: 2,
    sender: "agent",
    text: "Hi Emma! I'd be happy to help you with that. Could you provide your order number, please?",
    time: "10:34 AM"
  },
  {
    id: 3,
    sender: "customer",
    text: "Sure, it's #ORD-29875",
    time: "10:35 AM"
  },
  {
    id: 4,
    sender: "agent",
    text: "Thank you. I can see your order for the wireless headphones that was delivered last week. What's the reason for the return?",
    time: "10:38 AM"
  },
  {
    id: 5,
    sender: "customer",
    text: "The sound quality isn't what I expected, and there's a small issue with the right earpiece.",
    time: "10:40 AM"
  },
  {
    id: 6,
    sender: "agent",
    text: "I'm sorry to hear that. We can process a return for you. Would you like a refund or would you prefer to exchange for a different model?",
    time: "10:42 AM"
  },
  {
    id: 7,
    sender: "customer",
    text: "I think I'd like a refund this time.",
    time: "10:44 AM"
  }
];

const ChatsPage = () => {
  const [selectedChat, setSelectedChat] = useState(chatsList[0]);
  const [newMessage, setNewMessage] = useState("");
  
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <MessageSquare size={24} className="mr-2 text-green-600" />
          <h1 className="text-xl font-semibold">Chats</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
            4 Online Agents
          </span>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md">
            New Chat
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search conversations" 
                className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 w-full"
              />
            </div>
          </div>
          
          <div className="divide-y overflow-y-auto" style={{ maxHeight: "600px" }}>
            {chatsList.map((chat) => (
              <div 
                key={chat.id}
                className={`p-4 hover:bg-gray-50 cursor-pointer ${selectedChat.id === chat.id ? 'bg-gray-50' : ''}`}
                onClick={() => setSelectedChat(chat)}
              >
                <div className="flex items-start">
                  <div className="relative mr-3">
                    <img 
                      src={chat.user.avatar} 
                      alt={chat.user.name} 
                      className="w-10 h-10 rounded-full"
                    />
                    {chat.user.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <h4 className="font-medium truncate">{chat.user.name}</h4>
                      <span className="text-xs text-gray-500">{chat.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  </div>
                  
                  {chat.unread > 0 && (
                    <span className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Chat Window */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden lg:col-span-2">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative mr-3">
                <img 
                  src={selectedChat.user.avatar} 
                  alt={selectedChat.user.name} 
                  className="w-10 h-10 rounded-full"
                />
                {selectedChat.user.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </div>
              
              <div>
                <h4 className="font-medium">{selectedChat.user.name}</h4>
                <span className="text-xs text-gray-500">
                  {selectedChat.user.online ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                <Search size={18} />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                <Paperclip size={18} />
              </button>
            </div>
          </div>
          
          {/* Messages */}
          <div className="p-4 overflow-y-auto" style={{ height: "480px" }}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`flex ${message.sender === 'agent' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'agent' 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-green-600 text-white'
                  }`}>
                    <p>{message.text}</p>
                    <span className={`text-xs block mt-1 ${
                      message.sender === 'agent' ? 'text-gray-500' : 'text-green-100'
                    }`}>
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex items-center">
              <input 
                type="text"
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-green-500"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-r-md">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatsPage;
