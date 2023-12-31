import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import Register from './register';
import Login from './login';
import Tabs from './(tabs)/_layout';
import Kalkulator from './(tabs)/kalku';
import Ingredient from './(tabs)/Ingredient';
import Recipe from './(tabs)/Recipe';
import Profile from './(tabs)/profile';
import EditProfile from './(tabs)/editprofile';
import List from './(tabs)/listResto';
import Kaloritinggi from './(tabs)/kaloritinggi';
import Kalorirendah from './(tabs)/kalorirendah';
import ListResep from './(tabs)/listresep';
import Ulasan from './(tabs)/ulasan';
import FavoritesScreen from './(tabs)/save';

const Stack = createNativeStackNavigator();
const noHead = { headerShown: false };

function MyStack() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={noHead} />
            <Stack.Screen name="Register" component={Register} options={noHead} />
            <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
            <Stack.Screen name='Kalkulator' component={Kalkulator} options={noHead}/>
            <Stack.Screen name='Ingredient' component={Ingredient} options={noHead}/>
            <Stack.Screen name='Recipe' component={Recipe} options={noHead}/>
            <Stack.Screen name="Profile" component={Profile} options={noHead} />
            <Stack.Screen name="Kaloritinggi" component={Kaloritinggi} options={noHead} />
            <Stack.Screen name="Kalorirendah" component={Kalorirendah} options={noHead} />
            <Stack.Screen name="Edit Profile" component={EditProfile} options={noHead} />
            <Stack.Screen name="List Restaurant" component={List} options={noHead} />
            <Stack.Screen name="List Resep" component={ListResep} options={noHead} />
            <Stack.Screen name="Ulasan" component={Ulasan} options={noHead} />
            <Stack.Screen name="FavoriteScreen" component={FavoritesScreen} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

export default MyStack;
