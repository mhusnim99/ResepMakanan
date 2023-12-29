import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text, useKeyboardBottomInset } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./HomeScreen";
import Save from "../(tabs)/save";
import Profile from "../(tabs)/profile";
import Kategori from "../(tabs)/kategori";
// import Favorite from "./(tabs)/favorit";


// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "book-outline";
              break;
            case "Kategori":
              iconName = "restaurant-outline";
              break;
            case "Save":
              iconName = "heart-outline";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Kategori" component={Kategori} options={noHead} />
      <Tab.Screen name="Save" component={Save} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
      {/* <Tab.Screen name="Favorit" component={Favorit} options={noHead} /> */}
    </Tab.Navigator>
  );
};

export default Tabs;