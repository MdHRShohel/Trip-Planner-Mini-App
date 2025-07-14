import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Text, View } from 'react-native';
import Toast from 'react-native-root-toast';
import TripPlannerSettings from '../assets/icons/Trip-planner-Settings.svg';
import Button from '../components/Button';
import DateTimeInput from '../components/DateTimeInput';
import LocationInput from '../components/LocationInput';

const locations = [
  { id: 1, name: 'Dhaka' },
  { id: 2, name: 'Chittagong' },
  { id: 3, name: 'Sylhet' },
  { id: 4, name: 'Khulna' },
  { id: 5, name: 'Rajshahi' }
]

export default function HomeScreen() {
  const [loadLoc, setLoadLoc] = useState(null);
  const [unloadLoc, setUnloadLoc] = useState(null);
  const [date, setDate] = useState(null);

  const handleCreateTrip = async () => {
    if (!loadLoc || !unloadLoc || !date) {
      Toast.show('Please fill all fields', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        backgroundColor: '#A30F0F',
        textColor: '#fff',
      });
      return;
    }

    const newTrip = {
      id: Date.now(),
      load: loadLoc.name,
      unload: unloadLoc.name,
      date: date.toISOString(),
    };

    const existingTrips = await AsyncStorage.getItem('trips');
    const parsedTrips = existingTrips ? JSON.parse(existingTrips) : [];

    parsedTrips.push(newTrip);
    await AsyncStorage.setItem('trips', JSON.stringify(parsedTrips));

    setLoadLoc(null);
    setUnloadLoc(null);
    setDate(null);

    Toast.show('Trip created successfully', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      backgroundColor: '#16a34a',
      textColor: '#fff',
    });
  };

  return (
    <View className="flex-1 bg-white p-4 justify-between">
      <View className="flex-row items-center mb-5">
        <View className="flex-1 items-center">
          <Text className="text-[#171212] text-lg font-bold font-inter text-center">
            Trip Planner
          </Text>
        </View>
        <TripPlannerSettings />
      </View>

      <View className="flex-1 gap-6">
        <Text className="text-[#171212] text-[28px] leading-[35px] font-bold font-inter">
          Design Your Trip
        </Text>

        <LocationInput
          value={loadLoc}
          onSelect={setLoadLoc}
          placeholder="Load Location"
          data={locations}
        />

        <LocationInput
          value={unloadLoc}
          onSelect={setUnloadLoc}
          placeholder="Unload Location"
          data={locations}
        />

        <DateTimeInput value={date} onChange={setDate} />

        <Button title="Create Trip" onPress={handleCreateTrip} />
      </View>
    </View>
  )
}
