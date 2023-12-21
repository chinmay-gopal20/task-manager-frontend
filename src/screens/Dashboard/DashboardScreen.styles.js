import { StyleSheet } from "react-native";

export const DashboardScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
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
  }
})