import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import BottomSelectModal from './BottomSelectModal';

export default function LocationInput({ value, onSelect, placeholder, data }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        className="rounded-lg px-4 py-4 font-inter text-black bg-[#F5F0F0]"
      >
        <Text className="font-inter text-base text-black">
          {value?.name || placeholder}
        </Text>
      </TouchableOpacity>

      <BottomSelectModal
        visible={visible}
        onClose={() => setVisible(false)}
        data={data}
        onSelect={onSelect}
        title={`Select ${placeholder}`}
      />
    </>
  );
}
