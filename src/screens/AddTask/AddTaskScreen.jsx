import BackgroundView from "../../components/BackgroundView/BackgroundView"
import { View , TextInput, Text} from 'react-native';
import { AddTaskScreenStyles } from "./AddTaskScreen.styles";
import {useState, forwardRef, useImperativeHandle} from 'react';
import DatePicker from "../../components/DatePicker/DatePicker";
import moment from 'moment';

export default AddTaskScreen = forwardRef((props, ref) => {

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [dueDate, setDueDate] = useState(new Date());

  useImperativeHandle(ref, () => ({
    getValues: () => ({
      title,
      description,
      dueDate: moment(dueDate).format('DD-MM-YYYY'),
    }),
  }));

  const onDateChange = (date) => {
    setDueDate(date)
  }

  return (
    <BackgroundView>
      <View style={AddTaskScreenStyles.container}>
        <View style={AddTaskScreenStyles.inputFieldContainer}>
          <View style={AddTaskScreenStyles.inputFieldLabelContainer}>
            <View style={AddTaskScreenStyles.inputFieldLabel}>
              <Text style={AddTaskScreenStyles.label}>Title</Text>
            </View>
          </View>
          <TextInput
            style={AddTaskScreenStyles.input}
              onChangeText={(e) => {
                  setTitle(e)
              }}
              value={title}
          />
        </View>

        <View style={AddTaskScreenStyles.inputFieldContainer}>
          <View style={AddTaskScreenStyles.inputFieldLabelContainer}>
            <View style={AddTaskScreenStyles.inputFieldLabel}>
              <Text style={AddTaskScreenStyles.label}>Description</Text>
            </View>
          </View>
          <TextInput
            style={[AddTaskScreenStyles.input, AddTaskScreenStyles.descriptionInput]}
              onChangeText={(e) => {
                  setDescription(e)
              }}
            value={description}
            multiline
          />
        </View>

        <View style={AddTaskScreenStyles.inputFieldContainer}>
          <View style={AddTaskScreenStyles.inputFieldLabelContainer}>
            <View style={AddTaskScreenStyles.inputFieldLabel}>
              <Text style={AddTaskScreenStyles.label}>Due Date</Text>
            </View>
          </View>

          <DatePicker selectedDate={dueDate} onSelectDate={onDateChange}/>
        </View>
      </View>
    </BackgroundView>
  )
})