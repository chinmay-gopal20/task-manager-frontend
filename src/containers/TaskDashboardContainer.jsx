import Header from "../components/Header/Header";
import TasksDashboardScreen from "../screens/TasksDashboard/TasksDashboardScreen";
import { useEffect } from 'react';

export const TaskDashboardContainer = (props) => {
  const { navigation } = props;


  useEffect(() => {
    navigation.setOptions({
      header: () => <Header title="Dashboard" theme="light"/>
    })
  }, [])

  const addTask = () => {
    navigation.navigate(ScreenConstants.ADD_TASK);
  }

  return (
    <TasksDashboardScreen onPressNewTask={ addTask}/>
  )
}