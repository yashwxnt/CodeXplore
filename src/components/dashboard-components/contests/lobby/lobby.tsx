// components/Lobby.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Compiler from '@/components/Editor';
import VoiceChat from './VoiceChat';

const socket = io('http://localhost:4500'); 

const Lobby = ({ lobbyId, user }: { lobbyId: string, user: { _id: string, username: string } }) => {
  const [lobby, setLobby] = useState(null);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ sender: { username: string }, message: string }[]>([]);
  const [challenge, setChallenge] = useState<{ description: string, language: string, code: string } | null>(null);


  useEffect(() => {
    socket.emit('joinLobby', lobbyId, user);

    socket.on('lobbyUpdate', (updatedLobby) => {
      setLobby(updatedLobby);
      setChatHistory(updatedLobby.chatHistory);
    });

    socket.on('newMessage', (newMessage) => {
      setChatHistory((prevChatHistory) => [...prevChatHistory, newMessage]);
    });

    socket.on('challengeStarted', (newChallenge) => {
      setChallenge(newChallenge);
    });

    return () => {
      socket.disconnect();
    };
  }, [lobbyId, user]);

  const handleSendMessage = () => {
    const newMessage = {
      sender: user._id,
      message,
      timestamp: new Date(),
    };
    socket.emit('sendMessage', lobbyId, newMessage);
    setMessage('');
  };

  const handleStartChallenge = () => {
    const newChallenge = {
      description: 'Solve the coding problem',
      language: 'javascript',
      code: '// Start coding here',
    };
    socket.emit('startChallenge', lobbyId, newChallenge);
  };

  return (
    <div>
      {lobby && (
        <div>
          <h2>{lobby.name}</h2>
          <div>
            {chatHistory.map((msg, index) => (
              <div key={index}>
                <strong>{msg.sender.username}</strong>: {msg.message}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
          {challenge ? (
            <Compiler
              language={challenge.language}
              code={challenge.code}
              setCode={(newCode) => setChallenge({ ...challenge, code: newCode })}
            />
          ) : (
            <button onClick={handleStartChallenge}>Start Challenge</button>
          )}
          <VoiceChat lobbyId={lobbyId} />
        </div>
      )}
    </div>
  );
};

export default Lobby;
