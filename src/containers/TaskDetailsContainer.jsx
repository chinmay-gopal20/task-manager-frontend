
import { useEffect } from "react";
import Header from "../components/Header/Header";
import { useStoreContext } from "../contexts/StoreContext";
import TaskDetailsScreen from "../screens/TaskDetails/TaskDetailsScreen"
import { success } from "../utils/ToastUtils";

export default TaskDetailsContainer = (props) => {

  const taskId = props?.route?.params?.taskId;
  const { navigation } = props;

  const { taskStore } = useStoreContext();

  const deleteTask = () => {
    taskStore.deleteTask(taskId);
    success('Task deleted successfully!');
    navigation.goBack();
  }

  useEffect(() => {
    navigation.setOptions({
      header: () => <Header title='Task Details'
        onLeftButtonPress={() => navigation.goBack()}
        onRightButtonPress={deleteTask}
        rightButtonTitle="Delete"
        rightButtonType="danger"
      />
    })
  })

  return (
    <TaskDetailsScreen taskId={taskId}/>
  )
}