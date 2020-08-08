  
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login'
import Register from '../screens/Register'
import Dashboard from '../screens/Dashboard'
import Detail from '../screens/Detail'

const Stack = createStackNavigator()

class Navigation extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen component={Dashboard} name={'dashboard'} options={{headerShown: false}}/>
            <Stack.Screen component={Login} name={'login'} options={{headerShown: false}}/>
            <Stack.Screen component={Register} name={'register'} options={{headerShown: false}}/>
            <Stack.Screen component={Detail} name={'detail'} options={{
              title: '',
              headerTransparent: true,
              headerTintColor: 'white'
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default Navigation