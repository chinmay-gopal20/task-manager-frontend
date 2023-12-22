
import { ScreenConstants } from "../constants/ScreenConstants";
import DashboardScreen from "../screens/Dashboard/DashboardScreen";
import { useEffect } from 'react';
import Header from "../components/Header/Header";

export default DashboardContainer = (props) => {

  const { navigation } = props;


  useEffect(() => {
    navigation.setOptions({
      header: () => <Header title="Dashboard"/>
    })
  }, [])

  const addTask = () => {
    navigation.navigate(ScreenConstants.ADD_TASK);
  }

  return (
    <DashboardScreen onPressNewTask={ addTask}/>
  )
}