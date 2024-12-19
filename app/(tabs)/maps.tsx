import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useMemo, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Stack } from 'expo-router';
import apartments from '@/assets/data/appartments.json';
import CustomMarker from '@/components//CustomMarker';
import ApartmentListItem from '@/components/ApartmentListItem';
import { SafeAreaView } from 'react-native';

import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type Apartment = (typeof apartments)[0];

export default function AirbnbScreen() {
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null
  );
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // variables
  const snapPoints = useMemo(() => [115, '70%'], []);

  return (
    
    <GestureHandlerRootView style={{flex:1,}}>
    <View>
      <Stack.Screen options={{ headerShown: false }} />

      <MapView  style={styles.map} region={mapRegion}>
        {apartments.map((apartment) => (
          <CustomMarker
            key={apartment.id}
            apartment={apartment}
            onPress={() => setSelectedApartment(apartment)}
          />
        ))}
      </MapView>

      {/* Display selected Apartment */}
      {selectedApartment && (
        <ApartmentListItem
          apartment={selectedApartment}
          containerStyle={styles.selectedContainer}
        />
      )}
      

      <BottomSheet index={0} snapPoints={snapPoints}>
        <View style={{ }}>
          <Text style={styles.listTitle}>Over {apartments.length} places</Text>
          <BottomSheetFlatList
            data={apartments}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            renderItem={({ item }) => <ApartmentListItem apartment={item} />}
          />
        </View>
      </BottomSheet>
      
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  listTitle: {
    textAlign: 'center',
    fontFamily: 'InterSemi',
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 20,
  },
  selectedContainer: {
    position: 'absolute',
    bottom: 110,
    right: 10,
    left: 10,
  },
});
