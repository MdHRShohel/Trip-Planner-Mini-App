import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import ArrowRight from '../assets/icons/ArrowRight.svg';

export default function BottomSelectModal({ visible, onClose, data, onSelect, title }) {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      swipeDirection="down"
      onSwipeComplete={onClose}
      style={{ justifyContent: 'flex-end', margin: 0 }}
    >
      <View className="bg-white px-6 max-h-[60%] rounded-t-2xl pt-3">
        <TouchableOpacity className="items-center justify-center mb-4">
          <View className="bg-[#E3DEDE] h-1 w-9 rounded-full" />
        </TouchableOpacity>

        <Text className="text-lg font-bold mb-4">{title}</Text>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                onSelect(item);
                onClose();
              }}
              className="py-4 flex-row items-center justify-between"
            >
              <Text className="font-inter text-lg text-[#171212]">{item.name}</Text>
              <ArrowRight />
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
}
