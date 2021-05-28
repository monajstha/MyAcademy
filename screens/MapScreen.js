import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default function Map() {
  const trackingCoordinate = {
    latitude: 28.20402, // <-- your event latitude
    longitude: 83.976837, // <---your event longitude
  };

  const trackingRegion = {
    ...trackingCoordinate,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        showsUserLocation
        showsMyLocationButton
        loadingEnabled
        initialRegion={trackingRegion}>
        <Marker title={'Abc Event'} coordinate={trackingCoordinate} />
      </MapView>
    </View>
  );
}
