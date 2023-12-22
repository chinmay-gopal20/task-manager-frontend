import {StyleSheet } from 'react-native'
import { ColorConstants } from '../../constants/ColorConstants';

export const SummaryTileStyles = StyleSheet.create({
  touchableBox: {
    width: '50%',
    overflow: 'hidden',
    marginRight: 10,
  },
  shadowContainer: {
    borderRadius: 8,
    shadowColor: ColorConstants.GRAY,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    backgroundColor: ColorConstants.WHITE,
    padding: 10,
    margin: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  count: {
    fontSize: 35,
    fontWeight: 'bold',
    color: ColorConstants.VIOLET,
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
    fontSize: 16,
    fontWeight: '500',
    color: ColorConstants.BLACK,
  },
});
