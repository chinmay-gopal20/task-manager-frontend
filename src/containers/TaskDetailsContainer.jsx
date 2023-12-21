
import { useEffect } from "react";
import Header from "../components/Header/Header";
import TaskDetailsScreen from "../screens/TaskDetails/TaskDetailsScreen"

export default TaskDetailsContainer = (props) => {

  const taskId = props?.route?.params?.taskId;
  const { navigation } = props;

  const deleteTask = () => {
    console.log('Deleting task :: ', taskId);
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