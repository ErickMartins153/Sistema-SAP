import { Pressable, StyleSheet, Text } from "react-native";
import { Colors, GlobalStyles } from "../../constants/style";

export default function LinkedText({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      android_ripple={{ color: Colors.buttonRipple }}
      onPress={onPress.bind(this, "PasswordRecovery")}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    ...GlobalStyles.defaultText,
    textAlign: "center",
    width: 120,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accentColor,
  },
  pressed: {
    opacity: 0.75,
    overflow: "hidden",
  },
});
