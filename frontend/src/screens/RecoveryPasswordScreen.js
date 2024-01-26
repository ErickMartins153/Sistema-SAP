import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors, GlobalStyles } from "../constants/style";
import Input from "../components/Input";
import Button from "../components/UI/Button";
import ReturnIcon from "../components/UI/ReturnIcon";

export default function RecoveryPasswordScreen({ navigation }) {
  function handleNavigation() {
    navigation.goBack();
  }

  return (
    <View style={styles.screen}>
      <ReturnIcon onPress={handleNavigation} />
      <ScrollView style={styles.scroll}>
        <View style={styles.rootContainer}>
          <Text style={styles.welcomeText}>Seja bem-vinde ao app do SAP!</Text>
          <Image
            style={styles.image}
            source={require("../assets/SAP-logo.png")}
          />
          <View style={styles.inputContainer}>
            <Input placeholder={"Email@upe.br"} icon="user" />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={handleNavigation}>ENVIAR EMAIL</Button>
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
    marginTop: "12%",

    textAlign: "center",
  },
  image: {
    marginTop: "20%",
  },
  inputContainer: {
    flex: 1,
    marginTop: "5%",
  },

  buttonContainer: {
    flex: 1,
    marginBottom: 20,
  },
});
