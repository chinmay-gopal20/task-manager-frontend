import BackgroundView from "../../components/BackgroundView/BackgroundView"
import {
   View
} from "react-native"
import { DashboardScreenStyles } from "./DashboardScreen.styles"
import SummaryTile from "../../components/SummaryTile/SummaryTile"
import { ReminderTypeConstants } from "../../constants/ReminderTypeConstants"
import { DashboardScreenConstants } from "./DashboardScreen.constants"

export default DashboardScreen = ({onPressNewTask}) => {

  return (
    <BackgroundView>

      <View style={DashboardScreenStyles.container}>
        <View style={DashboardScreenStyles.row}>
          <SummaryTile type={ReminderTypeConstants.TODAY} count={0}/>
          <SummaryTile type={ReminderTypeConstants.ALL} count={0} />
        </View>

        <View style={DashboardScreenStyles.row}>
        <SummaryTile type={ReminderTypeConstants.COMPLETED} count={0} />
        <SummaryTile type={ReminderTypeConstants.IN_COMPLETE} count={0} />
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