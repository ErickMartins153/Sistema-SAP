import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { Colors } from "../../constants/style";

export default function UserAvatar({ size, style }) {
  return (
    <View style={[styles.avatarContainer, style]}>
      <Avatar.Image
        style={styles.avatar}
        source={require("../../assets/DefaultAvatar.png")}
        size={size}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: 500,
    padding: 2,
    backgroundColor: Colors.accentColor,
    overflow: "hidden",
  },
  avatar: {
    backgroundColor: Colors.accentColor,
    borderRadius: 500,
  },
});
