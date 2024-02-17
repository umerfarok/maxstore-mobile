import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts($filter: ProductFilterInput, $limit: Int, $skip: Int) {
    getProducts(filter: $filter, limit: $limit, skip: $skip) {
      id
      name
      price
      description
    }
  }
`;

const DemoComponent = () => {
  const [skip, setSkip] = useState(0);
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { filter: {}, limit: 10, skip },
  });

  const nextPage = () => {
    setSkip(skip + 10);
  };

  const previousPage = () => {
    setSkip(skip - 10 < 0 ? 0 : skip - 10);
  };

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error :(</Text>;

  return (
    <View style={styles.container}>
      {data.getProducts.map((product) => (
        <View key={product.id} style={styles.product}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
        </View>
      ))}
      <Button title="Previous Page" onPress={previousPage} />
      <Button title="Next Page" onPress={nextPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  product: {
    padding: 10,
    margin: 10,
    backgroundColor: 'orange',
  },
  productName: {
    color: 'black',
    fontWeight: 'bold',
  },
  productPrice: {
    color: 'black',
  },
  productDescription: {
    color: 'black',
  },
});

export default DemoComponent;