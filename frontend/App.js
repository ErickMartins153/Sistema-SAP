import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useContext } from "react";

import LoginScreen from "./src/screens/LoginScreen";
import RecoveryPasswordScreen from "./src/screens/RecoveryPasswordScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AddPostScreen from "./src/screens/AddPostScreen";

import AuthContextProvider, { AuthContext } from "./src/store/auth-context";
import Navbar from "./src/components/UI/Navbar";
import { Colors } from "./src/constants/style";
import PostContextProvider from "./src/store/post-context";
import PostScreen from "./src/screens/PostScreen";
import Icon from "./src/components/UI/Icon";

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
            <Icon
              icon="align-center"
              onPress={navigation.toggleDrawer}
              style={{ marginLeft: 16, marginTop: 0 }}
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
        <Drawer.Screen
          name="PostScreen"
          component={PostScreen}
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
      <StatusBar style="auto" />

      <Navigator />
    </AuthContextProvider>
  );
}
