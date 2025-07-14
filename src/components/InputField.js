import { TextInput } from 'react-native';

export default function InputField({ value, onChangeText, placeholder, secureTextEntry, keyboardType = 'default' }) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#876363"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      className="rounded-lg px-4 py-4 font-inter text-black bg-[#F5F0F0]"
    />
  );
}