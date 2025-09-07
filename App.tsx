import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IMAGES, OverLay, Pin } from './src/assets';
import BlurredCircle from './src/components/BlurredCircle';
import CustomMarker from './src/components/customMarker';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Pin width={100} height={100} color={'red'} /> */}
      {/* <OverLay width={100} height={100} fill={'blue'} /> */}
      <BlurredCircle />
      {/* <CustomMarker
        image={IMAGES.delete}
        color="#FF1493"
        size={90}
        blurIntensity={10}
      /> */}
      <CustomMarker color="#FF6B35" size={100} blurRadius={20} glowSize={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
});

export default App;
