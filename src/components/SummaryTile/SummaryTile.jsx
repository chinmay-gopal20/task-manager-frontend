import { TouchableOpacity, View, Text } from 'react-native';
import { SummaryTileStyles } from './SummaryTile.styles';
import { FontAwesome } from '@expo/vector-icons';
import { SummaryTileConstants } from './SummaryTile.constants';
import TextButton from '../TextButton/TextButton';

export default SummaryTile = ({ type, count }) => {

  return (
    <TouchableOpacity style={SummaryTileStyles.touchableBox}>
      <View style={SummaryTileStyles.container}>
        <View style={SummaryTileStyles.icon}>
          <FontAwesome name={SummaryTileConstants[type].Icon} size={24} color={SummaryTileConstants[type].Color}/>
        </View>
        <View style={SummaryTileStyles.countContainer }>
          <Text style={SummaryTileStyles.count}>{count}</Text>
          </View>
      </View>
      <View style={SummaryTileStyles.container}>
        <Text style={SummaryTileStyles.text}>{SummaryTileConstants[type].Text}</Text>
      </View>
    </TouchableOpacity>
  )
}