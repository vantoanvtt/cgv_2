/**
 * @format
 */

import {AppRegistry, Group} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/screens/Login/Login'
import FullNews from './src/screens/FullNews/FullNews'

AppRegistry.registerComponent(appName, () => Login);
