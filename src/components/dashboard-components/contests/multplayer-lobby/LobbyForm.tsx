import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { Label } from '@/components/ui/label';

interface FormData {
  code: string;
}

const JoinLobbyForm = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();

  const handleJoinLobby = (formData: FormData) => {
    console.log('Joining lobby with code:', formData.code);
    setIsDialogOpen(false);
  };

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button>Join Lobby</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Join a Lobby</DialogTitle>
          <form onSubmit={handleSubmit(handleJoinLobby)}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="code">Lobby Code</Label>
                <input
                  id="code"
                  {...register('code')}
                  className="w-full mt-1"
                />
              </div>
              <Button type="submit" className="w-full mt-4">
                Join Lobby
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default JoinLobbyForm;
