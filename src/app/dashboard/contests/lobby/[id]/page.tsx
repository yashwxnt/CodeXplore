import Lobby from '@/components/dashboard-components/contests/lobby/lobby';
import { useRouter } from 'next/router';

const LobbyPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const user = { _id: 'user1', username: 'User 1' }; // Mock user, replace with actual user data

  if (!id) return <div>Loading...</div>;

  return <Lobby lobbyId={id} user={user} />;
};

export default LobbyPage;
