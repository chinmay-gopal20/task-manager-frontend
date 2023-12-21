import { TouchableWithoutFeedback, Keyboard, View } from "react-native";
import { BackgroundViewStyles } from "./BackgroundView.styles";

export default BackgroundView = ({ children }) => {

  const disableKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={disableKeyboard}>
      <View style={BackgroundViewStyles.container}>{children}</View>
    </TouchableWithoutFeedback>
  );
}