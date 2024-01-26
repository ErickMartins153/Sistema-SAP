import { Alert, StyleSheet, Text, View } from "react-native";
import { useContext } from "react";

import { Colors, GlobalStyles } from "../constants/style";
import Icon from "../components/UI/Icon";
import UserAvatar from "../components/UI/UserAvatar";
import FormattedImage from "../components/UI/FormattedImage";
import SubmitButton from "../components/UI/SubmitButton";
import { AuthContext } from "../store/auth-context";
import { PostContext } from "../store/post-context";

export default function PostScreen({ route, navigation }) {
  const { status } = useContext(AuthContext);
  const { deletePost, posts } = useContext(PostContext);
  const postData = route.params;

  function handleComment() {
    alert("Em breve!");
  }

  function handleAlert() {
    Alert.alert(
      "Você tem certeza?",
      "Uma vez deletado esse post não poderá ser recuperado!",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          style: "destructive",
          onPress: () => handleDelete(postData.id),
        },
      ]
    );
  }

  function handleDelete(id) {
    deletePost(id);
    navigation.goBack();
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.headerIcons}>
          <Icon
            icon="corner-down-left"
            style={styles.icon}
            onPress={() => navigation.navigate("Home")}
          />
          {status === "admin" && (
            <Icon
              icon="trash-2"
              style={styles.icon}
              iconColor={Colors.error50}
              onPress={handleAlert}
            />
          )}
        </View>
        <View style={styles.postContent}>
          <View style={styles.userContainer}>
            <Text style={styles.userText}>{postData.user}</Text>
          </View>
          <View style={styles.avatarContainer}>
            <UserAvatar size={80} />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <FormattedImage path={postData.imageUri} />
          </View>
          <Text style={styles.description}>{postData.description}</Text>
        </View>
        <View style={styles.submitContainer}>
          <SubmitButton
            icon="message-square"
            size={32}
            style={styles.submitButton}
            onSubmit={handleComment}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    borderWidth: 1,
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    marginVertical: 32,
    width: "90%",
    backgroundColor: Colors.white,
    elevation: 4,
    borderRadius: 20,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  icon: {
    marginLeft: 0,
    marginTop: 12,
  },
  postContent: {
    paddingHorizontal: "auto",
    marginTop: 18,
  },
  avatarContainer: {
    width: 86,
    marginLeft: 24,
  },
  userContainer: {
    flex: 1,
    backgroundColor: Colors.accentColor,
    padding: 4,
    paddingLeft: 48,
    paddingRight: 52,
    borderRadius: 8,
    position: "absolute",
    left: "24%",
    bottom: "20%",
  },
  userText: {
    ...GlobalStyles.defaultText,
    fontWeight: "bold",
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 32,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {},
  description: {
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  submitContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 8,
  },
  submitButton: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    overflow: "hidden",
  },
});
