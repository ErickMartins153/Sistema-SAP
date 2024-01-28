import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/style";

export default function ScreenLayout({ children, style }) {
  return (
    <View style={[styles.rootContainer, style]}>
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    marginHorizontal: "auto",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    marginTop: 100,
  },
});
