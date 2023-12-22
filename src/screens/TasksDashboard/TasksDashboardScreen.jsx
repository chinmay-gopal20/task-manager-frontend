import BackgroundView from "../../components/BackgroundView/BackgroundView"

import { View, Text, TouchableOpacity } from 'react-native';
import { TasksDashboardScreenStyles } from "./TasksDashboardScreen.styles";
import { info } from "../../utils/ToastUtils";
import { ReminderTypeConstants } from "../../constants/ReminderTypeConstants";
import { useStoreContext } from "../../contexts/StoreContext"
import { observer } from 'mobx-react-lite';

const TasksDashboardScreen = ({ onPressNewTask }) => {

  const { taskStore } = useStoreContext();

  return (
    <BackgroundView theme="white">
      <View style={TasksDashboardScreenStyles.container}>
        <View style={TasksDashboardScreenStyles.row}>
          <SummaryTile type={ReminderTypeConstants.TODAY} count={taskStore.counts[ReminderTypeConstants.TODAY]}/>
          <SummaryTile type={ReminderTypeConstants.ALL} count={taskStore.counts[ReminderTypeConstants.ALL]} />
        </View>

        <View style={TasksDashboardScreenStyles.row}>
          <SummaryTile type={ReminderTypeConstants.COMPLETED} count={taskStore.counts[ReminderTypeConstants.COMPLETED]} />
          <SummaryTile type={ReminderTypeConstants.IN_COMPLETE} count={taskStore.counts[ReminderTypeConstants.IN_COMPLETE]} />
        </View>
      </View>

      <View style={TasksDashboardScreenStyles.bottomContainer}>
        <TouchableOpacity style={TasksDashboardScreenStyles.button} onPress={() => info('New Task Button Pressed!')}>
          <View style={TasksDashboardScreenStyles.textContainer}>
            <Text style={TasksDashboardScreenStyles.text}>New Task</Text>
          </View>
        </TouchableOpacity>
      </View>
    </BackgroundView>

  )
}

export default observer(TasksDashboardScreen)