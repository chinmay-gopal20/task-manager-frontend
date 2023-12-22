import { TouchableOpacity, View, Text } from 'react-native';
import { SummaryTileStyles } from './SummaryTile.styles';
import { FontAwesome } from '@expo/vector-icons';
import { SummaryTileConstants } from './SummaryTile.constants';
import TextButton from '../TextButton/TextButton';
import { useNavigation } from '@react-navigation/native';
import { ScreenConstants } from '../../constants/ScreenConstants';
import { Image} from 'expo-image';

export default SummaryTile = ({ type, count }) => {

  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate(ScreenConstants.VIEW_TASKS, {
      type
    })
  }

  return (
    <TouchableOpacity style={SummaryTileStyles.touchableBox} onPress={navigateTo}>
      <View style={SummaryTileStyles.shadowContainer}>
      <View style={SummaryTileStyles.container}>
        <View style={SummaryTileStyles.icon}>
            <Image source={SummaryTileConstants[type].Icon}  style={{width: 25, height: 25}}/>
        </View>
        <View style={SummaryTileStyles.countContainer }>
          <Text style={SummaryTileStyles.count}>{count}</Text>
          </View>
      </View>
      <View style={SummaryTileStyles.container}>
        <Text style={SummaryTileStyles.text}>{SummaryTileConstants[type].Text}</Text>
        </View>
        </View>
    </TouchableOpacity>
  )
}