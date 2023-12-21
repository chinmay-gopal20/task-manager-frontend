import { StyleSheet } from 'react-native';
import { ColorConstants } from '../../constants/ColorConstants';

export const AddTaskScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    rowGap: 20,
  },
  input: {
    height: 45,
    borderColor: ColorConstants.WHITE,
    borderWidth: 1,
    borderRadius: 10,
    color: ColorConstants.WHITE,
    backgroundColor: ColorConstants.BLACK,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    width: '100%',
    textAlign: 'auto',
  },
  descriptionInput: {
    height: 150
  },
  inputFieldLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputFieldLabel: {
    flexDirection: 'row',
  },
  label: {
    color: ColorConstants.TEXT_LABEL,
    fontSize: 18,
  },
  inputFieldContainer: {
    rowGap: 8,
    width: '100%',
  },
  inputContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    flexGrow: 1,
  },
})