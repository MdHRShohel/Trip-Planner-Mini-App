import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import TripCard from '../components/TripCard';

export default function TripsScreen() {
  const [trips, setTrips] = useState([]);

  const loadTrips = async () => {
    const data = await AsyncStorage.getItem('trips');
    setTrips(data ? JSON.parse(data) : []);
  };

  useFocusEffect(
    useCallback(() => {
      loadTrips();
    }, [])
  );

  const deleteTrip = async (id) => {
  const updatedTrips = trips.filter((t) => t.id !== id);
  setTrips(updatedTrips);
  await AsyncStorage.setItem('trips', JSON.stringify(updatedTrips));
};

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-[#171212] text-lg font-bold font-inter mb-5 text-center">
        Your Trips
      </Text>

      {trips.length === 0 ? (
        <Text className="text-center text-gray-500 mt-5 font-inter">
          No trips found
        </Text>
      ) : (
        <FlatList
          data={[...trips].reverse()}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => (
            <TripCard trip={item} index={index} onDelete={deleteTrip} />
          )}
        />
      )}
    </View>
  );
}
