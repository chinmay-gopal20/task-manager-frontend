import ViewTasksScreen from "../screens/ViewTasks/ViewTasksScreen";
import { useEffect } from 'react';
import Header from "../components/Header/Header";
import { ScreenConstants } from "../constants/ScreenConstants";
import { useStoreContext } from "../contexts/StoreContext";
import { success } from "../utils/ToastUtils";


export default ViewTasksContainer = (props) => {
  const type = props?.route?.params?.type;
  const { navigation } = props;
  const { taskStore } = useStoreContext();

  goBack = () => {
    navigation.navigate(ScreenConstants.DASHBOARD)
  }

  markAsComplete = (taskId) => {
    taskStore.markAsComplete(taskId);
    success('Task completed!')
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