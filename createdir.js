const fs = require('fs');

const directories = [
  'assets/images',
  'assets/fonts',
  'components/ProductCard',
  'components/ProductList',
  'components/Cart',
  'components/Checkout',
  'screens/Home',
  'screens/ProductDetails',
  'screens/CartScreen',
  'screens/CheckoutScreen',
  'navigation/StackNavigator',
  'navigation/TabNavigator',
  'services/api',
  'services/auth',
  'state/context',
  'state/reducers',
  'utils'
];

directories.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const files = [
  'App.js',
  'package.json',
  ...directories.map((dir) => `${dir}/index.js`)
];

files.forEach((file) => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '');
  }
});