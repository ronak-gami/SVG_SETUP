import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { Pin } from '../assets';
import { Marker } from 'react-native-maps';

interface CustomMarkerProps {
  size: number;
  color: string;
  image: any;
  coordinate: { latitude: number; longitude: number };
}

const CustomMarker: React.FC<CustomMarkerProps> = ({
  size,
  color,
  image,
  coordinate,
}) => {
  // Calculate dimensions based on pin proportions
  const pinWidth = size;
  const pinHeight = size * 1; // Pin is typically taller than wide
  const circleSize = size * 0.6; // Circle area inside pin top
  const imageSize = size * 0.6; // Image size inside circle
  const glowRadius = size * 0.18; // Glow effect radius

  return (
    <Marker coordinate={coordinate} anchor={{ x: 0.5, y: 0.5 }}>
      <View
        style={[
          styles.container,
          {
            width: pinWidth + glowRadius * 2,
            height: pinHeight + glowRadius * 2,
          },
        ]}
      >
        {/* Glow Effect Background */}
        <BlurView
          style={[
            styles.glowEffect,
            {
              width: pinWidth + glowRadius * 2,
              height: pinHeight + glowRadius * 2,
              borderRadius: (pinWidth + glowRadius * 2) / 2,
            },
          ]}
          blurType="light"
          blurAmount={12}
          reducedTransparencyFallbackColor={`${color}50`}
        />

        {/* Main Pin Container */}
        <View
          style={[
            styles.pinContainer,
            {
              width: pinWidth,
              height: pinHeight,
            },
          ]}
        >
          {/* Pin SVG */}
          <Pin
            width={pinWidth}
            height={pinHeight}
            color={color}
            style={styles.pin}
          />

          {/* Image Container */}
          <View
            style={[
              styles.imageContainer,
              {
                width: circleSize,
                height: circleSize,
                borderRadius: circleSize / 2,
                top: size * 0.08, // Adjust based on your pin's circle position
              },
            ]}
          >
            <Image
              source={image}
              style={[
                styles.image,
                {
                  width: imageSize,
                  height: imageSize,
                  borderRadius: imageSize / 2,
                },
              ]}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  glowEffect: {
    position: 'absolute',
  },
  additionalGlow: {
    position: 'absolute',
    opacity: 0.4,
  },
  pinContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 10,
  },
  pin: {
    position: 'absolute',
    zIndex: 1,
  },
  imageContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    overflow: 'hidden',
  },
  image: {
    zIndex: 3,
  },
});

export default CustomMarker;
