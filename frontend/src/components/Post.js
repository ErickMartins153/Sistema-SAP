import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Colors, GlobalStyles } from "../constants/style";
import UserAvatar from "./UI/UserAvatar";
import FormattedImage from "./UI/FormattedImage";

export default function Post({ postData }) {
  const navigation = useNavigation();

  let imageUri = require("../assets/defaultPicture.png");

  if (postData?.imageUri) {
    imageUri = { uri: postData.imageUri };
  }

  function handleShowPost() {
    navigation.navigate("PostScreen");
  }

  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.postContainer,
          pressed && styles.pressed,
        ]}
        android_ripple={{ color: Colors.buttonRipple }}
        onPress={handleShowPost}
      >
        <View style={styles.postHeader}>
          <View style={styles.userContainer}>
            <Text style={styles.userText}>{postData.user}</Text>
          </View>
          <UserAvatar size={64} />
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>
              {postData.date.toLocaleString()}
            </Text>
          </View>
        </View>
        <View style={styles.postContent}>
          <FormattedImage path={imageUri} />
          <Text style={styles.postText}>{postData.description}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    elevation: 8,
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 8,
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
