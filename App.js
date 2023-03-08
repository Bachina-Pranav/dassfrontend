import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
} from './src/screens'
import Profile from './src/screens/Profile_patient'
import Dashboard from './src/screens/Dashboard_patient'
import Dashboard_doctor from './src/screens/Dashboard_doctor'
import Profile_doctor from './src/screens/Profile_doctor'
import ResetPasswordScreen2 from './src/screens/enternewpassword'


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard_patient" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="Profile_patient" component={ Profile }/>
          <Stack.Screen name="Dashboard_doctor" component={ Dashboard_doctor } />
          <Stack.Screen name="Profile_doctor" component={Profile_doctor} />
          <Stack.Screen name="enternewpassword" component={ResetPasswordScreen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
