// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import SplashScreen from '../screens/onboarding/splashScreen';

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen name="Home" component={BottomTabNavigator} options={{
                headerShown: false,
            }}/> */}
    </Stack.Navigator>
  );
}
