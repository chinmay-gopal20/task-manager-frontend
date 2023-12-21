import ViewTasksScreen from "../screens/ViewTasks/ViewTasksScreen";
import { useEffect } from 'react';
import Header from "../components/Header/Header";
import { ScreenConstants } from "../constants/ScreenConstants";


export default ViewTasksContainer = (props) => {
  const type = props?.route?.params?.type;
  const { navigation } = props;

  goBack = () => {
    navigation.navigate(ScreenConstants.DASHBOARD)
  }

  markAsComplete = (taskId) => {
    console.log('Marking task as completed :: ', taskId)
  }

  redirectToTaskDetailsScreen = (taskId) => {
    navigation.navigate(ScreenConstants.TASK_DETAILS, {
      taskId
    })
  }

  useEffect(() => {
    navigation.setOptions({
      header: () => <Header title={type} onLeftButtonPress={goBack}/>
    })
  })

  return (
    <ViewTasksScreen type={type}
      markAsComplete={markAsComplete}
      viewTask={redirectToTaskDetailsScreen}
    />
  )
}