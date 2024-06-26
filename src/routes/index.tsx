import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import FirstWelcomePage from '../pages/welcomePage/FirstWelcomePage';
import SecondWelcomePage from '../pages/welcomePage/SecondWelcomePage';
import ThirdWelcomePage from '../pages/welcomePage/ThirdWelcomePage';
import LoginScreen from '../pages/LoginScreen';
import MyBudgets from '../pages/Budgets/MyBudgets';
import CreateBudgets from '../pages/Budgets/CreateBudgets/SelectType';
import SelectExistent from '../pages/Budgets/CreateBudgets/SelectExistent';


const Tab = createStackNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false  }}>
          <Tab.Screen name="FirstWelcomePage" component={FirstWelcomePage} />
          <Tab.Screen name="SecondWelcomePage" component={SecondWelcomePage} />
          <Tab.Screen name="ThirdWelcomePage" component={ThirdWelcomePage} />
          <Tab.Screen name="LoginScreen" component={LoginScreen} />
          <Tab.Screen name="MyBudgets" component={MyBudgets} />
          <Tab.Screen name="CreateBudgets" component={CreateBudgets} />
          <Tab.Screen name="SelectExistent" component={SelectExistent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}