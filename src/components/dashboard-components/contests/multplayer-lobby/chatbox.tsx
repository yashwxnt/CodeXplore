'use client'
import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [roomName, setRoomName] = useState("");
  const [joinedRoom, setJoinedRoom] = useState<string | null>(null);
  const [socketId, setSocketId] = useState("");
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:4500", {
      withCredentials: true,
      // transports: ['websocket', 'polling'], // Use websocket and fallback to polling
    });

    socketRef.current = newSocket;

    newSocket.on("connect", () => {
      console.log("connected", newSocket.id);
      setSocketId(String(newSocket?.id));
    });

    newSocket.on("welcome", (welcome) => {
      console.log(welcome);
    });

    newSocket.on("receive_message", (message) => {
      console.log("data message", message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "" && socketRef.current && joinedRoom) {
      socketRef.current.emit("send_message", { message, room: joinedRoom });
      setMessage(""); // Clear the input field after sending the message
    }
  };

  const joinRoomHandler = (e: any) => {
    e.preventDefault();
    if (socketRef.current && roomName.trim() !== "") {
      socketRef.current.emit("join_room", roomName);
      setJoinedRoom(roomName);
      setRoomName("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <span className="font-semibold">Socket ID:</span> {socketId}
        </div>
        {joinedRoom && (
          <div className="mb-4">
            <span className="font-semibold">Room:</span> {joinedRoom}
          </div>
        )}
        <form onSubmit={joinRoomHandler} className="mb-4">
          <h5 className="mb-2 font-semibold">Join Room</h5>
          <div className="flex space-x-2">
            <input 
              type="text" 
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              id='roomName'
              placeholder="Room Name"
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type='submit' className='px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500'>
              Join
            </button>
          </div>
        </form>

        <form onSubmit={(e) => {e.preventDefault(); sendMessage();}} className="mb-4">
          <div className="mb-2 font-semibold">Send Message</div>
          <div className="flex flex-col space-y-2">
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id='message'
              placeholder="Message"
              className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type='submit' className='px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
              Send
            </button>
          </div>
        </form>

        <div className="flex flex-col space-y-2 mb-4 h-64 overflow-y-auto bg-gray-50 p-4 rounded-lg">
          {messages.map((msg, index) => (
            <div key={index} className="p-2 bg-blue-100 rounded-lg">
              {msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;