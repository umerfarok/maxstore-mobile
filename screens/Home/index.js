import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

function Home() {
  const navigation = useNavigation();
  const discovery = useAutoDiscovery('http://10.0.2.2:8080/realms/maxstore');

  if (!discovery) {
    console.error('Discovery document not loaded');
  } else {
    console.log('Discovery document loaded');
  }

  const [request, result, promptAsync] = useAuthRequest(
    {
      clientId: 'maxstore-client',
      redirectUri: makeRedirectUri({
        useProxy: false
      }),
      scopes: ['openid', 'profile', 'email', 'offline_access'],
    },
    discovery
  );

  if (!request) {
    console.error('You are notLogged In');
  } else {
    console.log('Auth request loaded');
  }

  const handleLogin = async () => {
    try {
      await promptAsync();
      console.log('Login initiated');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <View>
      <Button
        title="Go to Product Details home"
        onPress={() => navigation.navigate('ProductDetails')}
      />
      <Button
        title="Go to Cart"
        onPress={() => navigation.navigate('Cart')}
      />
      <Button
        title="Go to Checkout"
        onPress={() => navigation.navigate('Checkout')}
      />
      <Button title="Go to UserLogin" onPress={() => navigation.navigate('UserLogin')} />
      <Button title="Login!" disabled={!request} onPress={handleLogin} />
      {result && <Text>{JSON.stringify(result, null, 2)}</Text>}
    </View>
  );
}

export default Home;