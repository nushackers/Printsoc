import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import PrintScreen from '../Containers/PrintScreen';
import LoginScreen from '../Containers/LoginScreen';

import styles from './Styles/NavigationStyles';

const MainNav = createStackNavigator(
  {
    Launch: LaunchScreen,
    Print: PrintScreen
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
