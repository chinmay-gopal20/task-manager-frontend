import BackgroundView from "../../components/BackgroundView/BackgroundView"
import {
   View
} from "react-native"
import { DashboardScreenStyles } from "./DashboardScreen.styles"
import SummaryTile from "../../components/SummaryTile/SummaryTile"
import { ReminderTypeConstants } from "../../constants/ReminderTypeConstants"
import { DashboardScreenConstants } from "./DashboardScreen.constants"
import { observer } from 'mobx-react-lite';
import { useStoreContext } from "../../contexts/StoreContext"

const DashboardScreen = ({onPressNewTask}) => {

  const { taskStore } = useStoreContext();

  return (
    <BackgroundView>
      <View style={DashboardScreenStyles.container}>
        <View style={DashboardScreenStyles.row}>
          <SummaryTile type={ReminderTypeConstants.TODAY} count={taskStore.counts[ReminderTypeConstants.TODAY]}/>
          <SummaryTile type={ReminderTypeConstants.ALL} count={taskStore.counts[ReminderTypeConstants.ALL]} />
        </View>

        <View style={DashboardScreenStyles.row}>
        <SummaryTile type={ReminderTypeConstants.COMPLETED} count={taskStore.counts[ReminderTypeConstants.COMPLETED]} />
        <SummaryTile type={ReminderTypeConstants.IN_COMPLETE} count={taskStore.counts[ReminderTypeConstants.IN_COMPLETE]} />
        </View>
      </View>

      <View style={DashboardScreenStyles.newTaskButton}>
          <TextButton icon={DashboardScreenConstants.NEW_TASK.Icon}
            text={DashboardScreenConstants.NEW_TASK.Text}
            onPress={onPressNewTask}
            type={DashboardScreenConstants.NEW_TASK.Type}
            iconColor={DashboardScreenConstants.NEW_TASK.IconColor}
          />
      </View>
    </BackgroundView>
  )
}

export default observer(DashboardScreen);