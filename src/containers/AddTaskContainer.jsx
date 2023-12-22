import { ScreenConstants } from "../constants/ScreenConstants";
import AddTaskScreen from "../screens/AddTask/AddTaskScreen"
import { useEffect, useRef } from 'react';
import Header from "../components/Header/Header";
import { useStoreContext } from "../contexts/StoreContext";
import { error, success } from "../utils/ToastUtils";

export default AddTaskContainer = (props) => {
  const {taskStore} = useStoreContext();
  const { navigation } = props;
  const ref = useRef();

  useEffect(() => {
    navigation.setOptions({
      header: () => (<Header title="Add Task" onLeftButtonPress={onCancel } onRightButtonPress={onAdd } rightButtonType="primary" rightButtonTitle="Add"/>)
    })
  }, [])

  const onCancel = () => {
    navigation.navigate(ScreenConstants.DASHBOARD);
  }

  const onAdd = () => {
    const taskDetails = ref.current.getValues();

    if (!taskDetails.title) {
      error('Task title is empty')
    } else if (!taskDetails.dueDate) {
      error('Task due date is empty')
    } else {
      taskStore.addTask(taskDetails);
      success('Task added successfully');
      ref.current.reset();
      navigation.navigate(ScreenConstants.DASHBOARD);
    }

  }

  return (
    <AddTaskScreen ref={ref}/>
  )
}