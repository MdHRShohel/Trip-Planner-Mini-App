import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import userImage from '../assets/images/user-image.png';
import Button from '../components/Button';
import { AuthContext } from '../context/AuthContext';

const imagesMap = { userImage };

export default function SettingsScreen() {
  const { user, logout } = useContext(AuthContext);

  return (
    <View className="flex-1 bg-white p-4 justify-between">
      <View>
        <Text className="text-[#171212] text-lg font-bold font-inter mb-5 text-center">Settings</Text>

        <View className="items-center mb-8">
          <Image
            source={imagesMap[user?.imageKey]}
            className="size-[128px] rounded-full mb-4"
          />
          <Text className="text-[#171212] text-[22px] leading-7 font-bold font-inter">{user?.name || ''}</Text>
          <Text className="text-[#876363] font-inter">{user?.email || ''}</Text>
        </View>
      </View>

      <Button title="Logout" onPress={logout} />
    </View>
  );
}
