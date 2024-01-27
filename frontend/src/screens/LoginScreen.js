import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useContext, useState } from "react";

import { AuthContext } from "../store/auth-context";
import { Colors, GlobalStyles } from "../constants/style";
import LoginForm from "../components/login/LoginForm";

export default function LoginScreen() {
  const [isvalid, setIsValid] = useState(true);

  const authCtx = useContext(AuthContext);

  function handleLogin(login, password) {
    const valid = authCtx.authenticate(login.toLowerCase().trim());
    setIsValid(valid);
  }

  function handleInput() {
    setIsValid(true);
  }

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scroll}>
        <View style={styles.rootContainer}>
          <Text style={styles.welcomeText}>Seja bem-vinde ao app do SAP!</Text>
          <Image
            style={styles.image}
            source={require("../assets/SAP-logo.png")}
          />
          <LoginForm
            onSubmit={handleLogin}
            isvalid={isvalid}
            onInput={handleInput}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  welcomeText: {
    ...GlobalStyles.defaultText,
    marginTop: "20%",
    textAlign: "center",
  },
  image: {
    marginTop: "35%",
  },
});
