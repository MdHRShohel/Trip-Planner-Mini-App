import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import TripPlannerSettings from '../assets/icons/Trip-planner-Settings.svg';
import Button from '../components/Button';
import DateTimeInput from '../components/DateTimeInput';
import LocationInput from '../components/LocationInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const locations = [
  { id: 1, name: 'Dhaka' },
  { id: 2, name: 'Chittagong' },
  { id: 3, name: 'Sylhet' },
  { id: 4, name: 'Khulna' },
  { id: 5, name: 'Rajshahi' }
];

export default function HomeScreen() {
  const [loadLoc, setLoadLoc] = useState(null);
  const [unloadLoc, setUnloadLoc] = useState(null);
  const [date, setDate] = useState(null);
  const [error, setError] = useState('');

  const navigation = useNavigation();

   useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => setError(''), 3000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  const handleCreateTrip = async () => {
    if (!loadLoc || !unloadLoc || !date) {
      setError('All fields are required');
      setTimeout(() => setError(''), 10000);
      return;
    }

    const newTrip = {
      id: Date.now(),
      loadLoc,
      unloadLoc,
      date
    };

    const existing = await AsyncStorage.getItem('trips');
    const trips = existing ? JSON.parse(existing) : [];
    trips.push(newTrip);

    await AsyncStorage.setItem('trips', JSON.stringify(trips));
    setLoadLoc(null);
    setUnloadLoc(null);
    setDate(null);
    navigation.navigate('Trips');
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

        {error ? (
          <Text className="text-red-600 font-inter text-base">{error}</Text>
        ) : null}

        <Button title="Create Trip" onPress={handleCreateTrip} />
      </View>
    </View>
  );
}
