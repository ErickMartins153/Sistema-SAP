import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Input from "../Input";
import LinkedText from "../UI/LinkedText";
import Button from "../UI/Button";
import { useState } from "react";
import { Colors } from "../../constants/style";

export default function LoginForm({ onSubmit, isvalid, onInput }) {
  const [inputs, setInputs] = useState({ login: "", password: "" });
  const navigation = useNavigation();
  function handleNavigation(destiny) {
    navigation.navigate(destiny);
  }

  function handleInputChange(text, field) {
    onInput(field);
    setInputs((prevInput) => ({ ...prevInput, [field]: text }));
  }

  function handleLogin() {
    onSubmit(inputs.login, inputs.password);
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email@upe.br"
          icon="user"
          maxLength={27}
          onChangeText={handleInputChange}
          value={inputs.login}
          field="login"
          style={!isvalid && styles.invalid}
        />
        <View style={styles.passwordContainer}>
          <Input
            placeholder="Digite sua senha"
            icon="lock"
            mode="password"
            style={[styles.passwordInput, !isvalid && styles.invalid]}
            maxLength={27}
            onChangeText={handleInputChange}
            value={inputs.password}
            field="password"
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
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
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
  invalid: {
    borderWidth: 2,
    borderColor: Colors.error50,
  },
});
