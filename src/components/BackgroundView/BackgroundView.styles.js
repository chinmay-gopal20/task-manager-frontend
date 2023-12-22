import {ColorConstants} from '../../constants/ColorConstants';
import { StyleSheet } from 'react-native';

export const BackgroundViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  dark: {
    backgroundColor: ColorConstants.APP_BACKGROUND,
  },
  light: {
    backgroundColor: ColorConstants.WHITE,
  }
});
