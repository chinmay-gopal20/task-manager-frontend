import BackgroundView from "../../components/BackgroundView/BackgroundView"
import { TaskDetailsScreenStyles } from "./TaskDetails.styles"
import { View, TextInput, Text } from 'react-native';
import DatePicker from "../../components/DatePicker/DatePicker";
import { useStoreContext } from "../../contexts/StoreContext"
import { observer } from 'mobx-react-lite';
import moment from 'moment';


const TaskDetailsScreen = ({ taskId }) => {

  const { taskStore } = useStoreContext();

  const task = taskStore.getTask(taskId);

  return (
    <BackgroundView >
      <View style={TaskDetailsScreenStyles.container}>
        <View style={TaskDetailsScreenStyles.inputFieldContainer}>
          <View style={TaskDetailsScreenStyles.inputFieldLabelContainer}>
            <View style={TaskDetailsScreenStyles.inputFieldLabel}>
              <Text style={TaskDetailsScreenStyles.label}>Title</Text>
            </View>
          </View>
          <TextInput
            style={TaskDetailsScreenStyles.input}
            value={task.title}
            editable={false}
          />
        </View>

        <View style={TaskDetailsScreenStyles.inputFieldContainer}>
          <View style={TaskDetailsScreenStyles.inputFieldLabelContainer}>
            <View style={TaskDetailsScreenStyles.inputFieldLabel}>
              <Text style={TaskDetailsScreenStyles.label}>Description</Text>
            </View>
          </View>
          <TextInput
            style={[TaskDetailsScreenStyles.input, TaskDetailsScreenStyles.descriptionInput]}
            value={task.description}
            multiline
            editable={false}
          />
        </View>

        <View style={TaskDetailsScreenStyles.inputFieldContainer}>
          <View style={TaskDetailsScreenStyles.inputFieldLabelContainer}>
            <View style={TaskDetailsScreenStyles.inputFieldLabel}>
              <Text style={TaskDetailsScreenStyles.label}>{`Due Date ${task.isOverDue && !task.completedDate ? '(Overdue)' : ''}`} </Text>
            </View>
            <DatePicker selectedDate={moment(task.dueDate, 'DD-MM-YYYY').toDate()} disabled={true} display='default'/>
          </View>
        </View>

        {task.completedDate &&
          <View style={TaskDetailsScreenStyles.inputFieldContainer}>
            <View style={TaskDetailsScreenStyles.inputFieldLabelContainer}>
              <View style={TaskDetailsScreenStyles.inputFieldLabel}>
                <Text style={TaskDetailsScreenStyles.label}>Completed Date</Text>
              </View>
              <DatePicker selectedDate={moment(task.completedDate, 'DD-MM-YYYY').toDate()} disabled={true} display='default'/>
            </View>
          </View>
        }
      </View>
    </BackgroundView>
  )
}

export default observer(TaskDetailsScreen);