import { useLayoutEffect } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Button,
} from "react-native";

import { Colors, GlobalStyles } from "../constants/style";
import UserAvatar from "../components/UI/UserAvatar";
import PickerButton from "../components/PickerButton";

export default function AddPostScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        ...GlobalStyles.title,
      },
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      contentContainerStyle={styles.screen}
    >
      <ScrollView style={styles.flex} contentContainerStyle={styles.scroll}>
        <View style={styles.section}>
          <View style={styles.AvatarInputContainer}>
            <View>
              <UserAvatar size={90} />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                multiline={true}
                autoCapitalize="sentences"
                placeholder="O que está acontecendo?"
                maxLength={280}
                style={styles.textInput}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.filesContainer}>
            <PickerButton size={32} icon="image" />
            <PickerButton size={32} icon="link" />
            <PickerButton size={32} icon="camera" />
          </View>
          <View style={styles.submitButton}>
            <Button title="submit" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  flex: {},
  section: {
    minHeight: 500,
    height: 600,
    paddingTop: 100,
    alignItems: "center",
    backgroundColor: Colors.white,
    elevation: 4,
  },
  AvatarInputContainer: {
    flexDirection: "row",
    marginTop: 32,
  },
  inputContainer: {
    marginHorizontal: 8,
    width: 250,
  },
  textInput: {
    padding: 32,
    borderRadius: 16,
    borderWidth: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  filesContainer: {
    flexDirection: "row",
  },
  submitButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
