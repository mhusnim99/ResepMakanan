import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from './register';
import Login from './login';
import Tabs from './(tabs)/_layout';
import Kalkulator from './(tabs)/kalku';
import Ingredient from './(tabs)/Ingredient';
import Recipe from './(tabs)/Recipe';
import kalorirendah from './(tabs)/kalorirendah';
import kaloritinggi from './(tabs)/kaloritinggi';

const Stack = createNativeStackNavigator();
const noHead = { headerShown: false };

function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={noHead} />
            <Stack.Screen name="Register" component={Register} options={noHead} />
            <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
            <Stack.Screen name='Kalkulator' component={Kalkulator} options={noHead}/>
            <Stack.Screen name='Ingredient' component={Ingredient} options={noHead}/>
            <Stack.Screen name='Recipe' component={Recipe} options={noHead}/>
            <Stack.Screen name='kalorirendah' component={kalorirendah} options={noHead}/>
            <Stack.Screen name='kaloritinggi' component={kaloritinggi} options={noHead}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
