import { StyleSheet, TextInput, View } from "react-native";
import { Colors, GlobalStyles } from "../constants/style";
import { Feather } from "@expo/vector-icons";
import PasswordIcon from "./UI/PasswordIcon";

export default function Input({ placeholder, icon, mode }) {
  return (
    <View style={styles.container}>
      <Feather
        name={icon}
        size={24}
        color={Colors.primaryAlpha}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.primaryAlpha}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        secureTextEntry={mode === "password"}
      />
      {mode === "password" && (
        <PasswordIcon size={24} color={Colors.primaryAlpha} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    marginVertical: 24,
    backgroundColor: Colors.white,
    borderColor: "#5F9F62",
    borderWidth: 1,
    borderRadius: 16,
    elevation: 2,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  input: {
    minWidth: 250,
    ...GlobalStyles.defaultText,
  },
});
