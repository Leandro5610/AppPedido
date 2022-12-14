import React from 'react';

import {

  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { Button } from 'react-native-paper';
import ProductsView from './app/ui/views/ProductsView';

const App = () => {

  return (
    
      <ProductsView />

  );

};

export default App;