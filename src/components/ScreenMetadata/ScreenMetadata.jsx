import { View, Text } from 'react-native';
import { ScreenMetadataStyles } from './ScreenMetadata.styles';

export default ScreeMetadata = ({ title }) => {
  return (
    <View style={ScreenMetadataStyles.titleContainer}>
      <Text style={ScreenMetadataStyles.titleText}>{title}</Text>
    </View>
  )
}