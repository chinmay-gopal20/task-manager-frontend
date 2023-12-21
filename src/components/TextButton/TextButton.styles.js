import { StyleSheet } from "react-native";
import { ColorConstants } from "../../constants/ColorConstants";

export const TextButtonStyles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
  primary: {
    color: ColorConstants.PRIMARY,
  },
  danger: {
    color: ColorConstants.DANGER,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 10
  },
})