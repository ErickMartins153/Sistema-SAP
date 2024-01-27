import { StyleSheet, Text, View } from "react-native";
import { Colors, GlobalStyles } from "../constants/style";

export default function User({ userData }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{userData.name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{userData.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.white,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 16,
    marginHorizontal: 32,
    overflow: "hidden",
  },
  header: {
    flex: 1,
    padding: 4,
    backgroundColor: Colors.accentColor,
  },
  headerText: {
    ...GlobalStyles.smallText,
    textAlign: "left",
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  textContainer: {
    backgroundColor: Colors.background,
  },
  text: {
    ...GlobalStyles.smallText,
    justifyContent: "center",
    textAlign: "left",
    padding: 8,
  },
});
