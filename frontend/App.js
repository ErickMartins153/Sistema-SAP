import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useContext } from "react";

import LoginScreen from "./screens/LoginScreen";
import RecoveryPasswordScreen from "./screens/RecoveryPasswordScreen";
import HomeScreen from "./screens/HomeScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import Navbar from "./components/UI/Navbar";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Recovery" component={RecoveryPasswordScreen} />
    </Stack.Navigator>
  );
}

function DrawerScreens() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Navbar {...props} />}
      screenOptions={{
        headerTransparent: true,
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Mural",
        }}
      />
    </Drawer.Navigator>
  );
}

function Navigator() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <DrawerScreens />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <StatusBar hidden={true} style="light" />

      <Navigator />
    </AuthContextProvider>
  );
}
