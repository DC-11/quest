// app/(tabs)/profile.tsx

import { Button, View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '@/components/theme/ThemContext';
import React, { useContext } from 'react';

const ProfileScreen = () => {
  const { colors, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text }}>Profile Screen</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;