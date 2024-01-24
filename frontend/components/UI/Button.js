import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/style";

export default function Button({ children }) {
  return (
    <View style={styles.externalContainer}>
      <Pressable
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
    flex: 1,
    marginBottom: 20,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.buttonBackground,
    elevation: 4,
    overflow: "hidden",
  },
  internalContainer: {
    flex: 1,
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
