import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScreenConstants } from '../constants/ScreenConstants'
import { TaskDashboardContainer } from '../containers/TaskDashboardContainer'
import { GoalsDashboardContainer } from '../containers/GoalsDashboardContainer'
import { DashboardNavigatorsStyles } from './DashboardNavigators.styles';


const Tab = createMaterialTopTabNavigator();

export const DashboardTopNavigators =() => {
  return (
    <Tab.Navigator
      screenOptions={(props) => {
        const { navigation } = props;
        return {
          tabBarStyle: DashboardNavigatorsStyles.container,
          tabBarLabelStyle: navigation.isFocused()
            ? DashboardNavigatorsStyles.activeTabLabel
            : DashboardNavigatorsStyles.tabLabel,
          tabBarIndicatorStyle: navigation.isFocused()
            ? DashboardNavigatorsStyles.activeTabItem
            : DashboardNavigatorsStyles.tabItem,
        };
      }}
    >
      <Tab.Screen name={ScreenConstants.TASKS_DASHBOARD} component={TaskDashboardContainer} />
      <Tab.Screen name={ScreenConstants.GOALS_DASHBOARD} component={GoalsDashboardContainer} />
    </Tab.Navigator>
  );
}
