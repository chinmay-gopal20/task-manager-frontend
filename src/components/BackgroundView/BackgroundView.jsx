import { TouchableWithoutFeedback, Keyboard, View } from "react-native";
import { BackgroundViewStyles } from "./BackgroundView.styles";

export default BackgroundView = ({ children, theme = 'dark' }) => {

  const disableKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={disableKeyboard}>
      <View style={[BackgroundViewStyles.container, theme === 'dark' ? BackgroundViewStyles.dark : BackgroundViewStyles.light ]}>{children}</View>
    </TouchableWithoutFeedback>
  );
}