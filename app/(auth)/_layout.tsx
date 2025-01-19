import { Redirect, Stack } from 'expo-router';
import { AuthProvider, AuthContext } from '@/store/authStore'; // Adjust the import path as needed
import { useContext } from 'react';

export default function Authlayout() {
  return (
    <AuthProvider>
      <AuthWrapper />
    </AuthProvider>
  );
}

function AuthWrapper() {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Redirect href="/" />;
  }

  return <Stack  screenOptions={ {headerShown: false,
     // Enable headers if needed
    headerTitle: "",  } }/>;
}
