import React from 'react';
import { Button, View } from 'react-native';

function Home({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Product Details"
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
    </View>
  );
}

export default Home;