import { FontAwesome } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextButtonStyles } from './TextButton.styles';

export default TextButton = ({ icon, text, onPress, type, iconColor }) => {
  return (
    <TouchableOpacity style={TextButtonStyles.container} onPress={onPress}>
      <View style={{ flex: 1, flexDirection: 'row'}}>
        <FontAwesome name={icon} color={iconColor} size={24}/>
        <Text style={[TextButtonStyles.textButton, TextButtonStyles[type]]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}