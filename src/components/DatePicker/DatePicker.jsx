import {  View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

export default DatePicker = ({
  selectedDate,
  onSelectDate,
  onClose
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
      display='spinner'
      />
    </View>
  )
}