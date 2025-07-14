import { useState } from 'react';
import { TouchableOpacity, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateTimeInput({ value, onChange }) {
  const [showPicker, setShowPicker] = useState(false);
  const [mode, setMode] = useState('date');
  const [tempDate, setTempDate] = useState(value || new Date());

  const showDatePicker = () => {
    setMode('date');
    setShowPicker(true);
  };

  const handleChange = (event, selected) => {
    if (event.type === 'dismissed') {
      setShowPicker(false);
      return;
    }

    if (mode === 'date') {
      const selectedDate = selected || tempDate;
      setTempDate(selectedDate);
      if (Platform.OS === 'android') {
        setMode('time');
        setShowPicker(true);
      } else {
        setShowPicker(false);
      }
    } else {
      const finalDateTime = new Date(
        tempDate.getFullYear(),
        tempDate.getMonth(),
        tempDate.getDate(),
        selected.getHours(),
        selected.getMinutes()
      );
      onChange(finalDateTime);
      setShowPicker(false);
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={showDatePicker}
        className="rounded-lg px-4 py-4 font-inter text-black bg-[#F5F0F0]"
      >
        <Text className="font-inter text-base text-black">
          {value ? value.toLocaleString() : 'Date & Time'}
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={tempDate}
          mode={mode}
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={handleChange}
        />
      )}
    </>
  );
}
