import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../constants/style";

export default function ReturnIcon({ onPress, style }) {
  return (
    <View style={[styles.container, style]}>
      <Feather
        name="corner-down-left"
        size={32}
        color={Colors.primary500}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    marginLeft: 24,
  },
});
