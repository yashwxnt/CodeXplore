'use client';
import React, { useState } from 'react';
import LobbyForm from './LobbyForm';
import JoinLobbyForm from './JoinLobbyForm';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction } from '@/components/ui/alert-dialog';

const LobbyCreationPage = () => {
  const [isLobbyCreated, setIsLobbyCreated] = useState(false);
  const [lobbyCode, setLobbyCode] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLobbyCreation = (code: string) => {
    setIsLobbyCreated(true);
    setLobbyCode(code);
    setIsDialogOpen(false); // Close the form dialog
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-brenet-regular text-primary bg-background">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center">Create or Join a Lobby</h1>
        {!isLobbyCreated && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>Create Lobby</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Create a Lobby</DialogTitle>

            </DialogContent>
          </Dialog>
        )}
        <JoinLobbyForm />
        {isLobbyCreated && (
          <AlertDialog open={isLobbyCreated} onOpenChange={setIsLobbyCreated}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Lobby Created</AlertDialogTitle>
                <AlertDialogDescription>
                  Your lobby has been created! Use the code <strong>{lobbyCode}</strong> to invite others.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction asChild>
                  <Button onClick={() => setIsLobbyCreated(false)}>Close</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    </div>
  );
};

export default LobbyCreationPage;
