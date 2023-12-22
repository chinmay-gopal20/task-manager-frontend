import { ColorConstants } from "../../constants/ColorConstants";
import { ReminderTypeConstants } from "../../constants/ReminderTypeConstants";

export const SummaryTileConstants = {
  [ReminderTypeConstants.ALL]: {
    Icon: require('../../../assets/calendar-lines.svg'),
    Text: 'All',
    Color: ColorConstants.MEDIUM_BLUE
  },
  [ReminderTypeConstants.COMPLETED]: {
    Icon: require('../../../assets/calendar-check.svg'),
    Text: 'Completed',
    Color: ColorConstants.MEDIUM_BLUE
  },
  [ReminderTypeConstants.IN_COMPLETE]: {
    Icon: require('../../../assets/calendar-xmark.svg'),
    Text: 'In Complete',
    Color: ColorConstants.MEDIUM_BLUE
  },
  [ReminderTypeConstants.TODAY]: {
    Icon: require('../../../assets/clock-three.svg'),
    Text: 'Today',
    Color: ColorConstants.MEDIUM_BLUE
  }
}