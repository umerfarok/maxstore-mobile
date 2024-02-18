import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8080/realms/maxstore/protocol/openid-connect/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password&client_id=maxstore-client`,
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Access token:', data.access_token);
      } else {
        console.error('Login failed:', data);
        console.error('Response:', response);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

export default Login;