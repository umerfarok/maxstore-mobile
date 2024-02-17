import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation/StackNavigator';
import Auth from './auth';

// Configure Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

// Define App component
const App = () => (
  <View style={styles.container}>
    <ApolloProvider client={client}>
   
      <NavigationContainer>
      
        <MyStack />
      </NavigationContainer>
    </ApolloProvider>
  </View>
);

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;