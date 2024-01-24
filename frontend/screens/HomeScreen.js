import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/style";

export default function HomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.contentContainer}>
        <Text>HOME</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    marginHorizontal: "auto",
    borderWidth: 1,
    alignItems: "center",
  },
  contentContainer: {
    marginTop: 100,
  },
});
