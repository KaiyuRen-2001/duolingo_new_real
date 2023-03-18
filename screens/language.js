import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, Button, Image } from 'react-native';

const LanguageScreen = () => {
  const [translation, setTranslation] = useState('');
  const [message, setMessage] = useState('');

  const handlePress = () => {
    if (translation === 'Hello, how are you?') {
      setMessage('Congratulations! Your Spanish translation is correct.');
    } else {
      setMessage('Sorry, your translation is incorrect.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sentence}>Hola, ¿cómo estás?</Text>
      <Image source={require('../assets/spanish_mascot.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        onChangeText={setTranslation}
        value={translation}
        placeholder="Enter your translation"
      />
      <Text style={styles.sentence1}>Please select from the following words: are, you, how, hello</Text>
      <Button title="Check" onPress={handlePress} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sentence: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sentence1: {
    fontSize: 20,
    
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default LanguageScreen;