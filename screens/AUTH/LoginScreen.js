import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { COLORS, icons } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {


  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Basic authentication logic, replace it with your actual authentication logic
    if (userId === 'admin' && password === 'admin') {
      navigation.navigate('AdminNavigation');
    } else if (userId === 'ps' && password === 'ps') {
      navigation.navigate('PSNavigation');
    } else if (userId === 'sdpo' && password === 'sdpo') {
      navigation.navigate('SDPONavigation');
    } else if (userId === 'sp' && password === 'sp') {
      navigation.navigate('SPNavigation');
    } else if (userId === 'dig' && password === 'dig') {
      navigation.navigate('DIGNavigation');
    } else if (userId === 'dg' && password === 'dg') {
      navigation.navigate('DGPIGPNavigation');
    } else {
      // Handle invalid credentials
      alert('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={icons.logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.text}>DigiReport</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="User ID"
          placeholderTextColor={COLORS.black}
          onChangeText={text => setUserId(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={COLORS.black}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 50,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: COLORS.black,
  },
  loginButton: {
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  text:{
    fontSize:24,
    textAlign:'center'
  }
});
