import { StyleSheet } from 'react-native';
import { ColorConstants } from '../constants/ColorConstants';

export const DashboardNavigatorsStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: '18%',
    right: '18%',
    top: 30,
    borderRadius: 12,
    backgroundColor: ColorConstants.LIGHT_GRAY,
    height: 45
  },
  activeTabItem: {
    backgroundColor: ColorConstants.BLACK,
    height: '100%',
    borderRadius: 12,
  },
  tabItem: {
    height: '100%',
  },
  activeTabLabel: {
    fontWeight: '500',
    fontSize: 18,
    color: ColorConstants.WHITE,
    textTransform: 'capitalize',
    lineHeight: 20,
  },
  tabLabel: {
    fontWeight: '500',
    fontSize: 18,
    color: ColorConstants.BLACK,
    textTransform: 'capitalize',
    lineHeight: 20,
  },
});