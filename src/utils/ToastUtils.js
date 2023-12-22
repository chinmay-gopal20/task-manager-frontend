import Toast from 'react-native-root-toast'
import { ColorConstants } from '../constants/ColorConstants';

export const error = (message, otherProps = {}) => {
  Toast.show(message, {
    ...otherProps,
    backgroundColor: ColorConstants.DANGER,
    textColor: ColorConstants.WHITE,
  });
};

export const success = (message, otherProps = {}) => {
  Toast.show(message, {
    ...otherProps,
    backgroundColor: ColorConstants.SUCCESS,
    textColor: ColorConstants.WHITE,
  });
};

export const info = (message, otherProps = {}) => {
  Toast.show(message, {
    ...otherProps,
    backgroundColor: ColorConstants.MEDIUM_BLUE,
    textColor: ColorConstants.WHITE,
  });
};