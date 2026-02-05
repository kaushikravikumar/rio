/**
 * React Native TikTok-style Feed App
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {VideoFeed} from './src/components/VideoFeed';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.container}>
          <VideoFeed />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
