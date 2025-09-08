import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IMAGES, OverLay, Pin } from './src/assets';
import BlurredCircle from './src/components/BlurredCircle';
import CustomMarker from './src/components/customMarker';
import Maps from './src/screens/Maps';

const App = () => {
  return <Maps />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#333',
  },
});

export default App;
