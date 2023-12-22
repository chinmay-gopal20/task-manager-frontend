import Header from "../components/Header/Header";
import  GoalsDashboardScreen  from "../screens/GoalsDashboard/GoalsDashboardScreen";
import { useEffect } from 'react';

export const GoalsDashboardContainer = (props) => {
  const { navigation } = props;


  useEffect(() => {
    navigation.setOptions({
      header: () => <Header title="Dashboard" theme="light"/>
    })
  }, [])

  const addGoals = () => {
    navigation.navigate(ScreenConstants.ADD_TASK);
  }

  return (
    <GoalsDashboardScreen onPressNewGoal={ addGoals}/>
  )
}