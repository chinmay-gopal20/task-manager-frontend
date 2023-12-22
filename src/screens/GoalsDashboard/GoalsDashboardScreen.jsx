import BackgroundView from "../../components/BackgroundView/BackgroundView"
import {GoalsDashboardScreenStyles } from './GoalsDashboardScreen.styles'
import { View, Text, TouchableOpacity } from 'react-native';
import { info } from "../../utils/ToastUtils";
import { ReminderTypeConstants } from "../../constants/ReminderTypeConstants";
import { useStoreContext } from "../../contexts/StoreContext"
import { observer } from 'mobx-react-lite';

const GoalsDashboardScreen = ({ onPressNewGoal }) => {

  const { taskStore } = useStoreContext();

  return (
    <BackgroundView theme="white">
    <View style={GoalsDashboardScreenStyles.container}>
        <View style={GoalsDashboardScreenStyles.row}>
          <SummaryTile type={ReminderTypeConstants.TODAY} count={taskStore.counts[ReminderTypeConstants.TODAY]}/>
          <SummaryTile type={ReminderTypeConstants.ALL} count={taskStore.counts[ReminderTypeConstants.ALL]} />
        </View>

        <View style={GoalsDashboardScreenStyles.row}>
          <SummaryTile type={ReminderTypeConstants.COMPLETED} count={taskStore.counts[ReminderTypeConstants.COMPLETED]} />
          <SummaryTile type={ReminderTypeConstants.IN_COMPLETE} count={taskStore.counts[ReminderTypeConstants.IN_COMPLETE]} />
        </View>
      </View>

    <View style={GoalsDashboardScreenStyles.bottomContainer}>
      <TouchableOpacity style={GoalsDashboardScreenStyles.button} onPress={() => info('New Goal Button Pressed!')}>
        <View style={GoalsDashboardScreenStyles.textContainer}>
          <Text style={GoalsDashboardScreenStyles.text}>New Goal</Text>
        </View>
      </TouchableOpacity>
    </View>
  </BackgroundView>

  )

}

export default observer(GoalsDashboardScreen)