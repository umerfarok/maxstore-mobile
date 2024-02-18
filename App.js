import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation/StackNavigator';
import { ReactNativeKeycloakProvider } from '@react-keycloak/native';
import keycloak from './keycloak';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => (
  <ReactNativeKeycloakProvider
    authClient={keycloak}
    initOptions={{
      redirectUri: 'maxstore-mobile://Homepage',
    }}
    isLoadingCheck={(keycloak) => !keycloak.authenticated}
  >
    <View style={styles.container}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </ApolloProvider>
    </View>
  </ReactNativeKeycloakProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
