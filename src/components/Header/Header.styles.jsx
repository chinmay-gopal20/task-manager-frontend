import {ColorConstants} from '../../constants/ColorConstants';
import { StyleSheet } from 'react-native';

export const HeaderStyles =  StyleSheet.create({
  headerContainer: {
    backgroundColor: ColorConstants.BLACK,
    justifyContent: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: ColorConstants.GRAY,
    flexDirection: 'row',
  },
  headerTitleContainer: {
    gap: 5,
    justifyContent: 'flex-start',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: ColorConstants.WHITE,
  },
  headerSubTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: ColorConstants.WHITE,
  },
  headerLeft: {
    left: 10,
    alignSelf: 'center',
    position: 'absolute',
  },
  headerRight: {
    right: 10,
    alignSelf: 'center',
    position: 'absolute',
  },
});
