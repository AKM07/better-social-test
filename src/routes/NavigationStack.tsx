import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './RouteStackParamList';
import HomeScreen from '../screens/HomeScreen';
import colors from '../../public/theme/colors';
import MainScreen from '../screens/MainScreen';

const stackNavigator = createNativeStackNavigator<RootStackParamList>();
function NavigationStack() {
  return (
    <stackNavigator.Navigator>
      {
        <stackNavigator.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShadowVisible: false,
            headerTitleStyle: {
              color: colors.white,
            },
            headerStyle: {
              backgroundColor: colors.white,
            },
          }}
        />
      }
    </stackNavigator.Navigator>
  );
}

export default NavigationStack;
