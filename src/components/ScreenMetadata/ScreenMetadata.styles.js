import { StyleSheet } from 'react-native';
import { ColorConstants } from '../../constants/ColorConstants';

export const ScreenMetadataStyles = StyleSheet.create({
  titleContainer: {
    flexBasis: 'auto',
    rowGap: 10,
  },
  titleText: {
    color: ColorConstants.WHITE,
    fontSize: 44,
    textAlign: 'center',
  },
});
