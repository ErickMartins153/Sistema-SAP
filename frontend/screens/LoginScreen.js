import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors, GlobalStyles } from "../constants/style";
import Input from "../components/Input";
import Button from "../components/UI/Button";
import LinkedText from "../components/UI/LinkedText";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";

export default function LoginScreen({ navigation }) {
  const authCtx = useContext(AuthContext);
  function handleNavigation(destiny) {
    navigation.navigate(destiny);
  }

  function handleLogin() {
    authCtx.authenticate("test");
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
          <View style={styles.inputContainer}>
            <Input placeholder={"Email@upe.br"} icon="user" />
            <View style={styles.passwordContainer}>
              <Input
                placeholder={"Digite sua senha"}
                icon="lock"
                mode="password"
                style={styles.passwordInput}
              />
              <View style={styles.passwordTextContainer}>
                <LinkedText onPress={handleNavigation.bind(this, "Recovery")}>
                  Esqueci a senha
                </LinkedText>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={handleLogin}>ENTRAR</Button>
          </View>
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
  inputContainer: {
    flex: 1,
    marginTop: "5%",
  },
  passwordContainer: {
    paddingBottom: 32,
  },
  passwordInput: {
    marginBottom: 12,
  },
  passwordTextContainer: {
    alignItems: "flex-end",
    marginHorizontal: 16,
  },

  buttonContainer: {
    flex: 1,
    marginBottom: 20,
  },
});
