import { createStackNavigator } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import LoginScreen from '../Containers/LoginScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LoginScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
