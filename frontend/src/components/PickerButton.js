import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, Vibration } from "react-native";

import { Colors } from "../constants/style";
import { pickImage } from "../util/pickers";

export default function PickerButton({ icon, size, onConfirm, type, style }) {
  async function handleImagePicker() {
    Vibration.vibrate(10);
    if (type === "image") {
      const image = await pickImage();
      onConfirm(image.assets, "image");
    }
    if (type === "camera") {
      alert("Em breve!");
    }
  }
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        style,
      ]}
      android_ripple={{ color: Colors.buttonRipple }}
      onPress={handleImagePicker}
    >
      <Feather name={icon} size={size} color={Colors.white} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    marginVertical: 16,
    marginHorizontal: 8,
    overflow: "hidden",
    padding: 20,
  },

  pressed: {
    opacity: 0.75,
  },
});
