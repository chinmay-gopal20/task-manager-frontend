import { FlatList, View, Text, TouchableWithoutFeedback } from 'react-native'
import CheckBox from 'expo-checkbox';
import { ViewTasksScreenStyles } from './ViewTasksScreen.styles';
import BackgroundView from '../../components/BackgroundView/BackgroundView';
import { FontAwesome } from '@expo/vector-icons';
import { ColorConstants } from '../../constants/ColorConstants';
import {observer} from 'mobx-react-lite'
import { useStoreContext } from '../../contexts/StoreContext';

const ViewTasksScreen = ({ markAsComplete, viewTask, type }) => {

  const { taskStore } = useStoreContext();

  const data = taskStore.getAllTasks(type);

  const renderItem = ({ item }) => {
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

export default observer(ViewTasksScreen)