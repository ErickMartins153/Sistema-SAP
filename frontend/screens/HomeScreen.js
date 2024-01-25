import { useLayoutEffect } from "react";

import { StyleSheet, View } from "react-native";
import { Colors, GlobalStyles } from "../constants/style";
import Post from "../components/Post";
import PostButton from "../components/PostButton";

export default function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        ...GlobalStyles.title,
      },
    });
  }, [navigation]);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.contentContainer}>
        <Post />
      </View>
      <PostButton />
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
    flex: 1,
    marginTop: 100,
  },
});
