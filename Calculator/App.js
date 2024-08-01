import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.colorColumn}>
        <View style={[styles.colorBox, { backgroundColor: 'red', flex: 0.7 }]} />
        <View style={[styles.colorBox, { backgroundColor: 'yellow', flex: 1 }]} />
        <View style={[styles.colorBox, { backgroundColor: 'green', flex: 1 }]} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  colorColumn: {
    flexDirection: 'column',
    width: '100%',
    height: '50%', 
    justifyContent: 'flex-start', 
  },
  colorBox: {
    width: '100%',
  },
});