
import { ScreenConstants } from "../constants/ScreenConstants";
import DashboardScreen from "../screens/Dashboard/DashboardScreen"

export default DashboardContainer = (props) => {

  const { navigation } = props;

  addTask = () => {
    navigation.navigate(ScreenConstants.ADD_TASK);
  }

  return (
    <DashboardScreen onPressNewTask={ addTask}/>
  )
}