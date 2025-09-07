import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { Pin } from '../assets';

const CustomMarker = ({ image, color = '#00BFFF', size = 80 }) => {
  const imageSize = size * 0.4;
  const glowSize = size * 1.8; // Fixed glow size - 80% bigger than pin

  return (
    <View style={[styles.container, { width: glowSize, height: glowSize }]}>
      {/* Glow Effect - BlurView */}
      <BlurView
        style={[
          styles.glow,
          {
            width: glowSize,
            height: glowSize,
            backgroundColor: color,
          },
        ]}
        blurType="light"
        blurAmount={15}
      />

      {/* Pin SVG */}
      <Pin width={size} height={size} color={color} style={styles.pin} />

      {/* Circular Image */}
      {/* <Image
        source={typeof image === 'string' ? { uri: image } : image}
        style={[
          styles.image,
          {
            width: imageSize,
            height: imageSize,
            borderRadius: imageSize / 2,
          },
        ]}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  glow: {
    position: 'absolute',
    borderRadius: 1000,
    opacity: 0.4,
  },
  pin: {
    position: 'absolute',
    zIndex: 2,
  },
  image: {
    position: 'absolute',
    top: '20%', // Position inside pin's circle
    zIndex: 3,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
  },
});

export default CustomMarker;
