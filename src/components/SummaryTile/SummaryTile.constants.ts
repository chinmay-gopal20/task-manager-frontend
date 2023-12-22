import { ColorConstants } from "../../constants/ColorConstants";
import { ReminderTypeConstants } from "../../constants/ReminderTypeConstants";

export const SummaryTileConstants = {
  [ReminderTypeConstants.ALL]: {
    Icon: 'calendar',
    Text: 'All',
    Color: ColorConstants.MEDIUM_BLUE
  },
  [ReminderTypeConstants.COMPLETED]: {
    Icon: 'calendar-check-o',
    Text: 'Completed',
    Color: ColorConstants.MEDIUM_BLUE
  },
  [ReminderTypeConstants.IN_COMPLETE]: {
    Icon: 'calendar-times-o',
    Text: 'In Complete',
    Color: ColorConstants.MEDIUM_BLUE
  },
  [ReminderTypeConstants.TODAY]: {
    Icon: 'clock-o',
    Text: 'Today',
    Color: ColorConstants.MEDIUM_BLUE
  }
}