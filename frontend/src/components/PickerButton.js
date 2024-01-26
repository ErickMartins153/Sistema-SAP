import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

import { Colors } from "../constants/style";
import { pickImage } from "../util/pickers";

export default function PickerButton({ icon, size, onConfirm, type }) {
  async function handleImagePicker() {
    if (type === "image") {
      const image = await pickImage();
      onConfirm(image.assets, "image");
    }
    if (type === "camera") {
    }
  }
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
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