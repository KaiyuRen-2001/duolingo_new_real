import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, Button } from 'react-native';

const CodeScreen = ({ navigation }) => {
  //const [code, setCode] = useState('_');
  const [code, setCode] = useState('____');


  const handlePress = () => {
    // Do something with the code (e.g. send to server for verification)
    navigation.navigate('LanguageScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Enter the 4-digit code you received:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCode}
        value={code}
        placeholder="Code"
        keyboardType="numeric"
        maxLength={4}
        secureTextEntry
        keyboardAppearance='dark' 
      />
      
      <Button title="Next" onPress={handlePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
});

export default CodeScreen;


