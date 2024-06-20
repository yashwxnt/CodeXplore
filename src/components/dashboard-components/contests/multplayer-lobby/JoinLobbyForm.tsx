'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';

const JoinLobbyForm = () => {
  const [code, setCode] = useState('');

  const handleJoinLobby = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to join lobby with the entered code
    console.log('Joining lobby with code:', code);
  };

  return (
    <form onSubmit={handleJoinLobby}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="code">Lobby Code</Label>
          <input
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            className="w-full mt-1"
          />
        </div>
        <Button type="submit" className="w-full mt-4">
          Join Lobby
        </Button>
      </div>
    </form>
  );
};

export default JoinLobbyForm;
