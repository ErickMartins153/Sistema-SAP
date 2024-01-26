import { Pressable, StyleSheet, Vibration, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons/";
import { Colors } from "../constants/style";
import { useNavigation } from "@react-navigation/native";

export default function PostButton() {
  const navigation = useNavigation();

  function handleAddPost() {
    Vibration.vibrate(10);
    navigation.navigate("StackWrapper");
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleAddPost}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        android_ripple={{ color: Colors.buttonRipple }}
      >
        <MaterialIcons name="add" size={64} color={Colors.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    borderWidth: 3,
    borderColor: "#5DA4A4",
    borderRadius: 100,
    position: "absolute",
    bottom: 40,
    right: 20,
    elevation: 4,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  pressed: {
    opacity: 0.75,
  },
});
