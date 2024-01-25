import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { Colors } from "../constants/style";

export default function PickerButton({ icon, size, onConfirm, type }) {
  function handleImagePicker() {}
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.flex, pressed && styles.pressed]}
        android_ripple={{ color: Colors.buttonRipple }}
      >
        <Feather
          name={icon}
          size={size}
          onPress={handleImagePicker}
          color={Colors.white}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    marginVertical: 16,
    marginHorizontal: 8,
    overflow: "hidden",
  },
  flex: {
    flex: 1,
    padding: 20,
  },
  pressed: {
    opacity: 0.75,
  },
});
