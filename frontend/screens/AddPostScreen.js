import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/style";

export default function AddPostScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.rootContainer}>
        <Text>Add Post screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
});
