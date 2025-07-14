import { Image, Text, TouchableOpacity, View } from 'react-native';
import trip1 from '../assets/images/trip1.png';
import trip2 from '../assets/images/trip2.png';
import trip3 from '../assets/images/trip3.png';
import formatDateTime from '../utils/formatDateTime';

const tripImages = [trip1, trip2, trip3];

export default function TripCard({ trip, index, onDelete }) {
  return (
    <View className="flex-row justify-between items-center rounded-xl py-3">
      <View className="flex-1 pr-4">
        <Text className="font-inter font-semibold text-sm text-[#876363]">
          {trip.loadLoc.name} → {trip.unloadLoc.name}
        </Text>
        <Text className="text-[#171212] text-base font-bold font-inter mt-1">
          {formatDateTime(trip.date)}
        </Text>
        {onDelete && (
          <TouchableOpacity onPress={() => onDelete(trip.id)}>
            <Text className="text-red-500 text-sm mt-1 font-inter">Delete</Text>
          </TouchableOpacity>
        )}
      </View>
      <Image
        source={tripImages[index % tripImages.length]}
        className="w-[130px] h-[64px] rounded-lg"
        resizeMode="cover"
      />
    </View>
  );
}
