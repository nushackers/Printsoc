import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  formLabel: {
    ...ApplicationStyles.screen.normalText,
    fontWeight: 'bold'
  }
});
