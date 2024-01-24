import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors, GlobalStyles } from "../constants/style";
import Input from "../components/Input";
import Button from "../components/UI/Button";

export default function LoginScreen() {
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
            <Input
              placeholder={"Digite sua senha"}
              icon="lock"
              mode="password"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button>ENTRAR</Button>
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
  buttonContainer: {
    flex: 1,
  },
});
