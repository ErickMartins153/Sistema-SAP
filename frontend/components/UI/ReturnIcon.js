import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../constants/style";

export default function ReturnIcon({ onPress }) {
  return (
    <View style={styles.returnButton}>
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
  returnButton: {
    marginLeft: 16,
    marginTop: 16,
  },
});
