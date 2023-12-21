import { ScreenConstants } from "../constants/ScreenConstants";
import AddTaskScreen from "../screens/AddTask/AddTaskScreen"
import { useEffect, useRef } from 'react';
import Header from "../components/Header/Header";

export default AddTaskContainer = (props) => {


  const { navigation } = props;
  const ref = useRef();


  useEffect(() => {
    navigation.setOptions({
      header: () => (<Header title="Add Task" onLeftButtonPress={onCancel } onRightButtonPress={onAdd }/>)
    })
  }, [])

  const onCancel = () => {
    navigation.navigate(ScreenConstants.DASHBOARD);
  }

  const onAdd = () => {
    console.log('Saving task :: ', ref.current.getValues())
    // Store the values in the store
  }

  return (
    <AddTaskScreen ref={ref}/>
  )
}