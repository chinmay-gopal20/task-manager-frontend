import BackgroundView from "../../components/BackgroundView/BackgroundView"
import { View , TextInput, Text} from 'react-native';
import { AddTaskScreenStyles } from "./AddTaskScreen.styles";
import {useState, forwardRef, useImperativeHandle} from 'react';

export default AddTaskScreen = forwardRef((props, ref) => {

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  useImperativeHandle(ref, () => ({
    getValues: () => ({
      title,
      description,
      dueDate,
    }),
  }));


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
      </View>
    </BackgroundView>
  )
})