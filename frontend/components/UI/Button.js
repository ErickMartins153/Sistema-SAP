import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/style";

export default function Button({ children, onPress }) {
  return (
    <View style={styles.externalContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.internalContainer,
          pressed && styles.pressed,
        ]}
        android_ripple={{ color: Colors.buttonRipple }}
      >
        <View>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
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
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: Colors.white,
  },
});
