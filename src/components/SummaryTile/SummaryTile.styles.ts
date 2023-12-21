import {StyleSheet } from 'react-native'
import { ColorConstants } from '../../constants/ColorConstants';

export const SummaryTileStyles = StyleSheet.create({
  touchableBox: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    margin: 5,
    backgroundColor: ColorConstants.DARK_GRAY,
    width: '50%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  count: {
    marginRight: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: ColorConstants.WHITE,
    textAlign: 'right',
    flex: 1,
  },
  countContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ColorConstants.LIGHT_GRAY,
  },
});
