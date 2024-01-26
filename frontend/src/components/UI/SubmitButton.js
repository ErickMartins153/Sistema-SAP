import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, Vibration, View } from "react-native";

import { Colors } from "../../constants/style";

export default function SubmitButton({ icon, size, onSubmit, style }) {
  function handleSubmition() {
    Vibration.vibrate(10);
    onSubmit();
  }
  return (
    <View style={[styles.container, style]}>
      <Pressable
        style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
        android_ripple={{ color: Colors.buttonRipple }}
        onPress={handleSubmition}
      >
        <Feather name={icon ?? "send"} size={size} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 100,
  },
  pressable: {
    padding: 20,
    borderRadius: 100,
    backgroundColor: Colors.primaryAlpha,
    overflow: "hidden",
    elevation: 1,
  },
  pressed: {
    opacity: 0.75,
  },
});
