import { useContext, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View
} from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
  setError('');
  if (!email.trim() || !password.trim()) {
    setError('Email and password required');
    return;
  }
  setLoading(true);
  const result = await login(email, password);
  setLoading(false);

  if (!result.success) {
    setError(result.message);
  }
};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-white"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="flex-1 px-4 gap-6 mt-5">
          <Text className="font-inter font-bold text-[28px] leading-[35px] text-center text-[#171212]">
            Welcome
          </Text>

          <InputField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <InputField
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            secureTextEntry
          />

          {error ? (
            <Text className="text-red-600 font-inter text-center">{error}</Text>
          ) : null}
          
          <Button title="Login" onPress={handleLogin} bgColor="#A30F0F" disabled={loading} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
