import { FlatList, View, Text, TouchableWithoutFeedback } from 'react-native'
import CheckBox from 'expo-checkbox';
import { ViewTasksScreenStyles } from './ViewTasksScreen.styles';
import BackgroundView from '../../components/BackgroundView/BackgroundView';
import { FontAwesome } from '@expo/vector-icons';
import { ColorConstants } from '../../constants/ColorConstants';

export default ViewTasksScreen = ({ markAsComplete, viewTask }) => {
  const data = [
    {
      id: 1,
      title: 'Title A',
      dueDate: '22-12-2023',
      completedDate: '21-12-2023',
      isOverDue: false
    },
    {
      id: 2,
      title: 'Title B',
      dueDate: '21-13-2023',
      isOverDue: true
    },
    {
      id: 3,
      title: 'Task C',
      dueDate: '21-14-2023',
      isOverDue: false
    },
    {
      id: 4,
      title: 'Task D',
      dueDate: '21-15-2023',
      completedDate: '21-15-2023',
      isOverDue: false
    }
  ]

  const renderItem = ({item}) => {
    return (
      <View style={ViewTasksScreenStyles.itemContainer}>
        <CheckBox style={{borderRadius: 10}} value={item.completedDate} onValueChange={() => markAsComplete(item.id)} disabled={item.completedDate}/>
        <View style={ViewTasksScreenStyles.textContainer}>
          <Text style={ViewTasksScreenStyles.title}>{item.title}</Text>
          {item.completedDate
            ? <Text style={[ViewTasksScreenStyles.subTitle, ViewTasksScreenStyles.success]}>Completed: {item.completedDate}</Text>
            : <Text style={[ViewTasksScreenStyles.subTitle, item.isOverDue && { color: ViewTasksScreenStyles.danger.color }]}>Due: {item.dueDate}</Text>
          }
        </View>
        <FontAwesome style={{ marginLeft: 'auto' }} name="info-circle" size={24} color={ColorConstants.PRIMARY} onPress={() => viewTask(item.id)}/>
      </View>
    )
  }

  return (
    <BackgroundView>
      <View style={ViewTasksScreenStyles.container}>
        {
          data.length > 0 ? (
            <FlatList
              data={data}
              keyExtractor={(item, index) => index}
              renderItem={renderItem}
              />
          ) : (
              <Text style={ ViewTasksScreenStyles.emptyContainer} >No Tasks!</Text>
          )
        }

      </View>
    </BackgroundView>
  )

}