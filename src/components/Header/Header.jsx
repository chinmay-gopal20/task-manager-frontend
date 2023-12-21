import { View, Text } from 'react-native';
import { HeaderStyles } from './Header.styles';

export default Header = ({onLeftButtonPress, onRightButtonPress, title}) => {
  return (
    <View style={HeaderStyles.headerContainer}>
    <Text style={HeaderStyles.headerTitle}> {title} </Text>
    <View style={HeaderStyles.headerLeft}>
      <TextButton
        text={"Back"}
        type='primary'
        onPress={() => onLeftButtonPress()}
      ></TextButton>
    </View>
    <View style={HeaderStyles.headerRight}>
      <TextButton
        text={"Add"}
        type='primary'
        onPress={() => onRightButtonPress()}
      ></TextButton>
    </View>
  </View>
  )
}