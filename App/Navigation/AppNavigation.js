import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import LoginScreen from '../Containers/LoginScreen';

import styles from './Styles/NavigationStyles';

const MainNav = createStackNavigator(
  {
    LaunchScreen
    // TODO: PrintScreen
  },
  {
    mode: 'modal'
  }
);

const PrimaryNav = createSwitchNavigator(
  {
    Main: MainNav,
    Login: LoginScreen
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Main'
  }
);

export default PrimaryNav;
