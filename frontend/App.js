import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useContext } from "react";
import { Feather } from "@expo/vector-icons";

import LoginScreen from "./screens/LoginScreen";
import RecoveryPasswordScreen from "./screens/RecoveryPasswordScreen";
import HomeScreen from "./screens/HomeScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import Navbar from "./components/UI/Navbar";
import { Colors } from "./constants/style";
import AddPostScreen from "./screens/AddPostScreen";
import PostContextProvider from "./store/post-context";

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

function StackWrapper() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          title: "Add Post",
          headerStyle: {
            backgroundColor: Colors.background,
            elevation: 0,
          },
          headerTransparent: false,
        }}
      />
    </Stack.Navigator>
  );
}

function DrawerScreens() {
  return (
    <PostContextProvider>
      <Drawer.Navigator
        drawerContent={(props) => <Navbar {...props} />}
        screenOptions={({ navigation }) => ({
          headerTransparent: true,
          headerTitleAlign: "center",
          drawerType: "slide",
          headerLeft: () => (
            <Feather
              name="align-center"
              size={32}
              color={Colors.primary500}
              onPress={navigation.toggleDrawer}
              style={{ marginLeft: 16 }}
            />
          ),
        })}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Mural",
          }}
        />
        <Drawer.Screen
          name="StackWrapper"
          component={StackWrapper}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </PostContextProvider>
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
