import {ColorConstants} from '../../constants/ColorConstants';
import { StyleSheet } from 'react-native';

export const BackgroundViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.APP_BACKGROUND,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
});
