import { StyleSheet} from 'react-native';
import { ColorConstants } from '../../constants/ColorConstants';

export const ViewTasksScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    rowGap: 20,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: ColorConstants.GRAY,
  },
  textContainer: {
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: ColorConstants.WHITE,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 12,
    color: ColorConstants.TEXT_LABEL,
  },
  success: {
    color: ColorConstants.SUCCESS,
  },
  danger: {
    color: ColorConstants.DANGER,
  },
  emptyContainer: {
    color: ColorConstants.GRAY,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})