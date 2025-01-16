import { Redirect, Stack } from 'expo-router';
//import { useAuth } from '~/context/AuthProvider';

export default function Authlayout() {
  const isAuthenticated =false;

  if (isAuthenticated) {
    return <Redirect href="/" />;
  }
  return <Stack />;
}
