import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginScreen from "./screens/LoginScreen";
import RecoveryPasswordScreen from "./screens/RecoveryPasswordScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Recovery" component={RecoveryPasswordScreen} />
    </>
  );
}

function DrawerScreens() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar hidden={true} style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {AuthStack()}
          <Stack.Screen name="Drawer" component={DrawerScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
