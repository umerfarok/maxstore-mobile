import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { useNavigation } from '@react-navigation/native';

const Auth = () => {
  const [authState, setAuthState] = useState(null);
  const navigation = useNavigation();

  const config = {
    issuer: 'http://localhost:8080/realms/maxstore',
    clientId: 'maxstore-client',
    scopes: ['openid', 'profile'],
    redirectUri: 'http://localhost:8081/', // Update this to match your Expo web server address
  };

  const discovery = AuthSession.useAutoDiscovery(config.issuer);

  const login = async () => {
    const request = new AuthSession.AuthRequest(config);
    const result = await request.promptAsync(discovery);
    if (result.type === 'success') {
      setAuthState(result.params);
    }
  };

  const logout = () => {
    setAuthState(null);
  };

  useEffect(() => {
    if (authState) {
      console.log('Logged in!');
      navigation.navigate('Home');
    }
  }, [authState]);

  return (
    <View>
      {authState ? (
        <Button title="Log out" onPress={logout} />
      ) : (
        <Button title="Log in" onPress={login} />
      )}
    </View>
  );
};

export default Auth;