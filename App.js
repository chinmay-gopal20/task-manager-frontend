import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent} from 'react-native-root-siblings'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ContainerStyles } from './src/styles/ContainerStyles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenConstants } from './src/constants/ScreenConstants';
import DashboardContainer from './src/containers/DashboardContainer'
import TaskDetailsContiner from './src/containers/TaskDetailsContainer';
import ViewTasksContainer from './src/containers/ViewTasksContainer';
import AddTaskContainer from './src/containers/AddTaskContainer';
import { StoreProvider } from './src/contexts/StoreContext';
import { DashboardTopNavigators } from './src/navigators/DashboardNavigators';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <StoreProvider>
      <RootSiblingParent>
        <SafeAreaProvider>
          <NavigationContainer>
            <SafeAreaView style={ContainerStyles.safeArea}>
              <Stack.Navigator initialRouteName={ScreenConstants.DASHBOARD}>
                <Stack.Screen
                  name={ScreenConstants.DASHBOARD}
                  component={DashboardTopNavigators}
                />
                <Stack.Screen
                  name={ScreenConstants.TASK_DETAILS}
                  component={TaskDetailsContiner}
                />
                <Stack.Screen
                  name={ScreenConstants.VIEW_TASKS}
                  component={ViewTasksContainer}
                />
                <Stack.Screen
                  name={ScreenConstants.ADD_TASK}
                  component={AddTaskContainer}
                />
              </Stack.Navigator>
            </SafeAreaView>
          </NavigationContainer>
        </SafeAreaProvider>
    </RootSiblingParent>
    </StoreProvider>
  );
}
