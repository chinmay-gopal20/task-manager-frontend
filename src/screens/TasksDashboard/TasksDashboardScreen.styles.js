import { StyleSheet } from "react-native";
import { ColorConstants } from "../../constants/ColorConstants";

export const TasksDashboardScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 110,
    rowGap: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  newTaskButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingBottom: 40,
  },
  button: {
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 15,
    flex: 1,
    borderColor: 'blue',
    borderColor: ColorConstants.VIOLET,
  },
  textContainer: {
    flexDirection: 'row',
    columnGap: 5,
  },
  text: {
    color: ColorConstants.VIOLET,
    fontSize: 16,
    fontWeight: 'bold',
  },
})