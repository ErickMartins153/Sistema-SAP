import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors, GlobalStyles } from "../constants/style";
import Input from "../components/Input";
import Button from "../components/UI/Button";
import { Feather } from "@expo/vector-icons";

export default function RecoveryPasswordScreen({ navigation }) {
  function handleNavigation() {
    navigation.goBack();
  }

  return (
    <View style={styles.screen}>
      <View style={styles.returnButton}>
        <Feather
          name="corner-down-left"
          size={32}
          color={Colors.primary500}
          onPress={handleNavigation}
        />
      </View>
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
  returnButton: {
    marginLeft: 16,
    marginTop: 16,
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
