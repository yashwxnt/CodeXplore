"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import Compiler from "@/components/Editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Chat from "./chatbox";



interface Challenge {
  description: string;
  language: string;
  code: string;
}

const initialChallenge = {
  description: "Solve the coding problem",
  language: "javascript",
  code: "// Start coding here",
};

const StaticLobby = () => {
  const [message, setMessage] = useState("");
  const [challenge, setChallenge] = useState<Challenge | null>(initialChallenge);
  const [timer, setTimer] = useState(600); // 10 minutes timer

  // Timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
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
      <ResizablePanelGroup direction="horizontal" className="w-full h-[100%] max-w-screen-3xl flex-grow">
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
     <Chat roomName={""}/>
    </div>
  );
};

export default StaticLobby;