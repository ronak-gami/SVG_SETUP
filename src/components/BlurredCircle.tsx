import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Svg, { Circle } from 'react-native-svg';

const BlurredCircle = () => {
  return (
    <View style={styles.container}>
      <BlurView
        style={styles.blur}
        blurType="light" // or "dark", "xlight"
        blurAmount={14}
        reducedTransparencyFallbackColor="white"
      />
      <Svg width={100} height={100} style={styles.svg}>
        <Circle cx={29} cy={29} r={17} fill="orange" opacity={0.8} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 58,
    height: 58,
    position: 'relative',
  },
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 29,
  },
  svg: {
    position: 'absolute',
  },
});
export default BlurredCircle;
