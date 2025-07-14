import { Text, TouchableOpacity } from 'react-native';

export default function Button({ onPress, title, bgColor = '#A30F0F', textColor = 'white', ...props }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="py-3 rounded-lg"
      style={{ backgroundColor: bgColor }}
      {...props}
    >
      <Text className={`text-center text-base font-bold font-inter`} style={{ color: textColor }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
