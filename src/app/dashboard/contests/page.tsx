'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { lobbies } from '@/constants/lobbies';


const ContestsPage = () => {
  const [loadedLobbies, setLoadedLobbies] = useState(lobbies);
  const router = useRouter();

  const handleLobbyClick = (lobbyId: string) => {
    router.push(`/dashboard/contests/lobby/${lobbyId}`);
  };

  return (
    <div>
      <h1>Contests</h1>
      {loadedLobbies.length === 0 ? (
        <p>Loading lobbies...</p>
      ) : (
        <ul>
          {loadedLobbies.map((lobby) => (
            <li key={lobby._id}>
              <button onClick={() => handleLobbyClick(lobby._id)}>
                {lobby.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContestsPage;
