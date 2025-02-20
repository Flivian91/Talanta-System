"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineSend } from "react-icons/ai";

export default function MessagesPage() {
  // Dummy conversation data (simulate conversations)
  const dummyConversations = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://via.placeholder.com/40?text=JD",
      lastMessage: "Hey, what's up?",
      messages: [
        { from: "John Doe", text: "Hey, what's up?", timestamp: "10:30 AM" },
        { from: "Me", text: "Not much, you?", timestamp: "10:32 AM" },
        { from: "John Doe", text: "All good here!", timestamp: "10:35 AM" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://via.placeholder.com/40?text=JS",
      lastMessage: "Can we talk later?",
      messages: [
        { from: "Jane Smith", text: "Hi, can we talk later?", timestamp: "9:15 AM" },
        { from: "Me", text: "Sure, what's up?", timestamp: "9:17 AM" },
      ],
    },
    {
      id: 3,
      name: "Tech Support",
      avatar: "https://via.placeholder.com/40?text=TS",
      lastMessage: "Your ticket is resolved",
      messages: [{ from: "Tech Support", text: "Your ticket is resolved", timestamp: "Yesterday" }],
    },
  ];

  const [conversationList, setConversationList] = useState(dummyConversations);
  const [selectedConversation, setSelectedConversation] = useState(dummyConversations[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    const updatedConversation = {
      ...selectedConversation,
      messages: [
        ...selectedConversation.messages,
        { from: "Me", text: newMessage, timestamp: "Now" },
      ],
      lastMessage: newMessage,
    };

    // Update the active conversation and the conversation list
    setSelectedConversation(updatedConversation);
    setConversationList(
      conversationList.map((conv) =>
        conv.id === updatedConversation.id ? updatedConversation : conv
      )
    );
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-4 flex items-center justify-between sticky top-0 z-10">
        <h1 className="text-2xl font-bold">Messages</h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel: Conversation List */}
        <div className="w-1/3 border-r border-gray-300 bg-white overflow-y-auto">
          {conversationList.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation)}
              className={`flex items-center p-4 border-b hover:bg-gray-50 cursor-pointer ${
                selectedConversation.id === conversation.id ? "bg-gray-100" : ""
              }`}
            >
              <img
                src={conversation.avatar}
                alt={conversation.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h2 className="font-semibold">{conversation.name}</h2>
                <p className="text-sm text-gray-500">{conversation.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel: Chat Window */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-300 bg-white">
            <h2 className="text-xl font-semibold">{selectedConversation.name}</h2>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {selectedConversation.messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg max-w-md break-words ${
                  msg.from === "Me"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-white text-gray-800 self-start border"
                }`}
              >
                <p>{msg.text}</p>
                <span className="text-xs text-gray-400 block mt-1">{msg.timestamp}</span>
              </motion.div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-white border-t border-gray-300 flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleSendMessage(); }}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition"
            >
              <AiOutlineSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
