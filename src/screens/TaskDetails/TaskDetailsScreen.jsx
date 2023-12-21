import BackgroundView from "../../components/BackgroundView/BackgroundView"
import { TaskDetailsScreenStyles } from "./TaskDetails.styles"
import { View, TextInput, Text } from 'react-native';
import DatePicker from "../../components/DatePicker/DatePicker";


export default TaskDetailsScreen = ({taskId}) => {
  const data = [
    {
      id: 1,
      title: 'Title A',
      dueDate: '22-12-2023',
      completedDate: '21-12-2023',
      isOverDue: false,
      description: ''
    },
    {
      id: 2,
      title: 'Title B',
      dueDate: '21-13-2023',
      isOverDue: true,
      description: ''
    },
    {
      id: 3,
      title: 'Task C',
      dueDate: '21-14-2023',
      isOverDue: false,
      description: ''
    },
    {
      id: 4,
      title: 'Task D',
      dueDate: '21-15-2023',
      completedDate: '21-15-2023',
      isOverDue: false,
      description: `
      In this example, the style={{ marginLeft: 'auto' }} is added to the FontAwesome component.
      This CSS style sets the left margin to auto, which pushes the FontAwesome icon to the rightmost end of the View.

      Adjust the margin value or use other styling properties as needed to achieve the desired layout.
    `
    }
  ]

  const task = data.find((task) => task.id === taskId)

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
              <Text style={TaskDetailsScreenStyles.label}>{`Due Date ${task.isOverDue ? '(Overdue)' : ''}`} </Text>
            </View>
            <DatePicker selectedDate={new Date(task.dueDate)} disabled={true} display='default'/>
          </View>
        </View>

        {task.completedDate &&
          <View style={TaskDetailsScreenStyles.inputFieldContainer}>
            <View style={TaskDetailsScreenStyles.inputFieldLabelContainer}>
              <View style={TaskDetailsScreenStyles.inputFieldLabel}>
                <Text style={TaskDetailsScreenStyles.label}>Completed Date</Text>
              </View>
              <DatePicker selectedDate={new Date(task.completedDate)} disabled={true} display='default'/>
            </View>
          </View>
        }
      </View>
    </BackgroundView>
  )
}