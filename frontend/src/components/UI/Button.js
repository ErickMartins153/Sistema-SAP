import { Pressable, StyleSheet, Text, Vibration, View } from "react-native";
import { Colors } from "../../constants/style";

export default function Button({ children, onPress, style, labelStyle }) {
  function handlePress() {
    Vibration.vibrate(10);
    onPress();
  }

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.externalContainer,
        pressed && styles.pressed,
        style,
      ]}
      android_ripple={{ color: Colors.buttonRipple }}
    >
      <View style={styles.internalContainer}>
        <View>
          <Text style={[styles.text, labelStyle]}>{children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  externalContainer: {
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.accentColor,
    elevation: 4,
    overflow: "hidden",
  },
  internalContainer: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 18,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: Colors.white,
  },
});
