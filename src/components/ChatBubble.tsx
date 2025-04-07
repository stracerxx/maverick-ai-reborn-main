"use client";

import React, { useState, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, MessageSquare, X } from "lucide-react";

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { sender: "user" | "spark"; text: string }[]
  >([]);
  const [newMessage, setNewMessage] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { sender: "user", text: newMessage }]);
      // Simulate Spark's response (replace with actual API call)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "spark", text: "This is a simulated response from Spark." },
        ]);
      }, 500);
      setNewMessage("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={toggleChat}
          className="bg-primary text-primary-foreground rounded-full p-2 shadow-lg hover:bg-primary/80 transition"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      ) : (
        <div className="w-80 bg-background border rounded-lg shadow-lg flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="Spark" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <span className="font-semibold">Spark (AI Concierge)</span>
            </div>
            <button onClick={toggleChat} className="hover:opacity-70 transition">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div
            className="p-4 overflow-y-auto flex-1 space-y-2"
            style={{ maxHeight: "300px" }}
            ref={chatContainerRef}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  message.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`rounded-lg px-3 py-2 inline-block ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex space-x-2">
              <Textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 resize-none shadow-none"
              />
              <Button type="submit" aria-label="Send message">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
