import {  View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

export default DatePicker = ({
  selectedDate,
  onSelectDate,
  disabled = false,
  display = 'spinner'
}) => {

  const handleDateChange = (event_, date) => {
      if (date) onSelectDate(date);
    }

return (
    <View>
    <DateTimePicker
      value={selectedDate}
      mode={'date'}
      onChange={handleDateChange}
      themeVariant={'dark'}
      display={display}
      disabled={disabled}
      />
    </View>
  )
}