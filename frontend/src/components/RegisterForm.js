import { StyleSheet, View } from "react-native";
import Input from "./Input";
import { useContext, useState } from "react";
import Icon from "./UI/Icon";
import { Colors } from "../constants/style";
import { AuthContext } from "../store/auth-context";

export default function RegisterForm() {
  const { addUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  function handleEmail(text) {
    setEmail(text);
  }

  function handleSubmit() {
    const name = email.split("@")[0];
    addUser(email, name);
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Input
          icon="user"
          maxLength={27}
          placeholder="email@upe.br"
          value={email}
          onChangeText={handleEmail}
          style={styles.input}
        />
        <Icon
          icon="arrow-right-circle"
          onPress={handleSubmit}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    elevation: 4,
    borderRadius: 20,
  },
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "flex-end",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
  },
  input: {
    marginVertical: 8,
    elevation: 12,
  },
  button: {
    marginTop: 8,
    padding: 8,
  },
});
