"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import Compiler from "@/components/Editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatMessage {
  sender: { username: string };
  message: string;
}

interface Challenge {
  description: string;
  language: string;
  code: string;
}

const users = [
  { id: 1, username: "User 1", avatar: "/path-to-avatar/user1.png" },
  { id: 2, username: "User 2", avatar: "/path-to-avatar/user2.png" },
  { id: 3, username: "User 3", avatar: "/path-to-avatar/user3.png" },
  { id: 4, username: "User 4", avatar: "/path-to-avatar/user4.png" },
];

const initialChallenge = {
  description: "Solve the coding problem",
  language: "javascript",
  code: "// Start coding here",
};

const StaticLobby = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>(initialChallenge);
  const [timer, setTimer] = useState(600); // 10 minutes timer
  const [activeUser, setActiveUser] = useState<number | null>(null);

  // Timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = () => {
    const newMessage = {
      sender: { username: "User 1" },
      message,
    };
    setChatHistory((prevChatHistory) => [...prevChatHistory, newMessage]);
    setMessage("");
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleAvatarClick = (userId: number) => {
    setActiveUser(userId === activeUser ? null : userId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 overflow-auto text-white p-8 flex flex-col items-center relative">
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Lobby 123
      </motion.h2>
      <ResizablePanelGroup direction="horizontal" className="w-full h-[100%] max-w-screen-3xl   flex-grow">
        <ResizablePanel defaultSize={30} minSize={20} className="bg-gray-800 p-4 rounded-lg flex flex-col">
          {challenge && (
            <motion.div
              className="w-full h-full flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Challenge:</h3>
              <p className="mb-4">{challenge.description}</p>
            </motion.div>
          )}
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70} minSize={20} className="bg-gray-900 p-4 rounded-lg flex flex-col">
          {challenge && (
            <motion.div
              className="w-full h-full flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Online Code Compiler</h3>
              <Compiler
                language={challenge.language}
                code={challenge.code}
                setCode={(newCode: string) =>
                  setChallenge((prevChallenge) =>
                    prevChallenge ? { ...prevChallenge, code: newCode } : null
                  )
                }
              />
              <Button className="mt-4">Compile</Button>
            </motion.div>
          )}
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold">Timer: {formatTime(timer)}</h3>
      </div>
      {users.map((user, index) => {
        const userMessages = chatHistory.filter((msg) => msg.sender.username === user.username);
        const hasNewMessages = userMessages.length > 0;

        const positionClasses = [
          "top-16 left-4",
          "top-16 right-4",
          "bottom-16 left-4",
          "bottom-16 right-4",
        ];

        return (
          <motion.div
            key={user.id}
            className={`absolute p-2 bg-gray-800 rounded-lg cursor-pointer ${positionClasses[index]}`}
            onClick={() => handleAvatarClick(user.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="flex items-center space-x-2 relative">
              <img src={user.avatar} alt={user.username} className="w-12 h-12 rounded-full" />
              {hasNewMessages && (
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full" />
              )}
            </div>
            {activeUser === user.id && (
              <div className="mt-2 p-2 bg-gray-700 rounded-lg max-w-xs">
                {userMessages.length > 0 ? (
                  userMessages.map((msg, idx) => (
                    <div key={idx} className="mb-2">
                      <strong>{msg.sender.username}:</strong> {msg.message}
                    </div>
                  ))
                ) : (
                  <div>No messages</div>
                )}
              </div>
            )}
          </motion.div>
        );
      })}
      <motion.div
        className="fixed bottom-8 left-0 right-0 mx-auto max-w-screen-sm p-4 bg-gray-800 rounded-lg flex space-x-2"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Input
          className="flex-grow"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </motion.div>
    </div>
  );
};

export default StaticLobby;
