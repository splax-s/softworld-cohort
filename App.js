import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import React, { useState } from 'react';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [loggedIn, setLoggedIn] = useState(false);

  if(!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation loggedIns={loggedIn} />
        </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  }
});
