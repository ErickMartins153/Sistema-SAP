import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

export default function PasswordIcon({ size, color, onPress }) {
  const [isActive, setIsActive] = useState(false);

  function handleIsActive() {
    setIsActive((prevState) => !prevState);
  }
  return (
    <Pressable onPress={handleIsActive}>
      <Feather
        name={isActive ? "eye-off" : "eye"}
        size={size}
        color={color}
        style={styles.icon}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon: {
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  pressed: {},
});
