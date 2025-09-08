import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { mapCustomStylingJSON } from '../utils/constants';
import { IMAGES } from '../assets';
import CustomMarker from '../components/customMarker';

const AHMEDABAD_COORDS = {
  latitude: 23.0249769,
  longitude: 72.5045738,
  latitudeDelta: 0.08,
  longitudeDelta: 0.08,
};

const Maps = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.container}
        initialRegion={AHMEDABAD_COORDS}
        customMapStyle={mapCustomStylingJSON}
      >
        <CustomMarker
          coordinate={{ latitude: 23.0249769, longitude: 72.5045738 }}
          size={30}
          image={IMAGES.delete}
          color="blue"
        />
        <CustomMarker
          coordinate={{ latitude: 23.0584718, longitude: 72.466151 }}
          size={30}
          image={IMAGES.delete}
          color="red"
        />
        <CustomMarker
          coordinate={{ latitude: 23.0487758, longitude: 72.48615 }}
          size={30}
          image={IMAGES.delete}
          color="pink"
        />
        <CustomMarker
          coordinate={{ latitude: 23.0584411, longitude: 72.527101 }}
          size={30}
          image={IMAGES.delete}
          color="green"
        />
        <CustomMarker
          coordinate={{ latitude: 23.0584728, longitude: 72.496557 }}
          size={30}
          image={IMAGES.delete}
          color="yellow"
        />
        <CustomMarker
          coordinate={{ latitude: 23.057471, longitude: 72.456567 }}
          size={30}
          image={IMAGES.delete}
          color="purple"
        />
      </MapView>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
