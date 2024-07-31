import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [mais, setMais] = useState(0);

  const adicionar = () => {
    setMais(mais + 1);
  };

  const subtrair = () => {
    setMais(mais - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{mais}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={adicionar}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={subtrair}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 60,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '80%',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
});
