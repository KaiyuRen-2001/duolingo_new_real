import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, Button, Image } from 'react-native';

const AuthorizationScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');

  

  const handlePress = () => {
    if (!phoneNumber || !name) {
      alert('Please enter both your phone number and name.');
      return;
    }
    if (phoneNumber.length !== 10) {
      alert('Please enter a valid phone number.');
      return;
    }
    // Do something with the phone number and name (e.g. send to server)
    navigation.navigate('CodeScreen');
  };
  

  return (
    <SafeAreaView style={styles.container}>
        <Image source={require('../assets/duolingo.png')} style={styles.logo} />

        <Text style={styles.title}>Log In Page</Text>
      <Text style={styles.title}>Enter your phone number and name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="Phone number"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Your Duolinguo Name"
      />
      
      <Button
        title="Next"
        onPress={handlePress}
        style={styles.button}
        color="#FFFFFF"
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
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
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default AuthorizationScreen;


