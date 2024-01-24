import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

import { Colors, GlobalStyles } from "../constants/style";

export default function Post() {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.postContainer,
          pressed && styles.pressed,
        ]}
        android_ripple={{ color: Colors.buttonRipple }}
      >
        <View style={styles.postHeader}>
          <View style={styles.userContainer}>
            <Text style={styles.userText}>User adm</Text>
          </View>
          <View style={styles.avatarContainer}>
            <Avatar.Image
              style={styles.avatar}
              source={require("../assets/DefaultAvatar.png")}
              size={64}
            />
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>24/01/24</Text>
          </View>
        </View>
        <View style={styles.postContent}>
          <Image
            source={require("../assets/defaultPicture.png")}
            style={styles.image}
          />
          <Text style={styles.postText}>
            Lorem ipsum dolor sit amet. Et quia architecto et ipsa fugiat est
            voluptate voluptatem
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    elevation: 8,
    borderRadius: 20,
    overflow: "hidden",
  },
  postContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 20,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.85,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 4,
    paddingLeft: 8,
  },
  avatarContainer: {
    borderRadius: 500,
    padding: 2,
    backgroundColor: Colors.accentColor,
    overflow: "hidden",
  },
  avatar: {
    backgroundColor: Colors.accentColor,
  },
  userContainer: {
    backgroundColor: Colors.accentColor,
    padding: 8,
    paddingLeft: 24,
    borderRadius: 8,
    position: "absolute",
    left: 56,
  },
  userText: {
    ...GlobalStyles.smallText,
    color: "white",
  },
  dateContainer: {
    flex: 1,
  },
  dateText: {
    ...GlobalStyles.smallText,
    textAlign: "right",
  },
  postContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 124,
    height: 124,
  },
  postText: {
    ...GlobalStyles.smallText,
    maxWidth: 150,
  },
});
