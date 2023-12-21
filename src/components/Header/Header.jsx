import { View, Text } from 'react-native';
import { HeaderStyles } from './Header.styles';

export default Header = ({onLeftButtonPress, onRightButtonPress, title}) => {
  return (
    <View style={HeaderStyles.headerContainer}>
      <Text style={HeaderStyles.headerTitle}> {title} </Text>

      {onLeftButtonPress &&
        <View style={HeaderStyles.headerLeft}>
          <TextButton
            text={"Back"}
            type='primary'
            onPress={() => onLeftButtonPress()}
          />
        </View>
      }
      {onRightButtonPress &&
        <View style={HeaderStyles.headerRight}>
          <TextButton
            text={"Add"}
            type='primary'
            onPress={() => onRightButtonPress()}
          />
        </View>
      }
  </View>
  )
}