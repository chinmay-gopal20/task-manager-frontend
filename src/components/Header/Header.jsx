import { View, Text } from 'react-native';
import TextButton from '../TextButton/TextButton';
import { HeaderStyles } from './Header.styles';

export default Header = ({theme = "dark", onLeftButtonPress, onRightButtonPress, title, rightButtonTitle = "Add", rightButtonType = "Primary"}) => {
  return (
    <View style={[HeaderStyles.headerContainer, theme === "dark" ? HeaderStyles.dark : HeaderStyles.light]}>
      <Text style={[HeaderStyles.headerTitle, theme === "light" ? {color: 'black'} : {}]}> {title} </Text>

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
            text={rightButtonTitle}
            type={rightButtonType}
            onPress={() => onRightButtonPress()}
          />
        </View>
      }
  </View>
  )
}