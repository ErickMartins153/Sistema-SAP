import { useLayoutEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";

import { Colors, GlobalStyles } from "../constants/style";
import UserAvatar from "../components/UI/UserAvatar";
import PickerButton from "../components/PickerButton";
import Button from "../components/UI/Button";
import SubmitButton from "../components/UI/SubmitButton";

export default function AddPostScreen({ navigation }) {
  const [appendedFiles, setAppendedFiles] = useState({});

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        ...GlobalStyles.title,
      },
    });
  }, [navigation]);

  function handleAppendFile(file, type) {
    if (file) {
      setAppendedFiles((prevFiles) => ({ ...prevFiles, [type]: file }));
    }
  }

  function handleRemoveImage() {
    setAppendedFiles((prevFiles) => ({ ...prevFiles, image: null }));
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      contentContainerStyle={styles.screen}
    >
      <ScrollView style={styles.flex} contentContainerStyle={styles.scroll}>
        <View style={styles.section}>
          <View style={styles.AvatarInputContainer}>
            <View>
              <UserAvatar size={90} style={{ marginLeft: 6 }} />
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
          <View style={styles.filesContainer}>
            <View style={styles.imageButtonContainer}>
              {appendedFiles?.image ? (
                <>
                  <Image
                    style={styles.image}
                    source={{ uri: appendedFiles.image[0].uri }}
                  />
                  <Button onPress={handleRemoveImage}>Remover imagem</Button>
                </>
              ) : (
                <Image
                  style={styles.image}
                  source={require("../assets/defaultPicture.png")}
                />
              )}
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.filesButtonsContainer}>
            <PickerButton size={32} icon="image" onConfirm={handleAppendFile} />
            <PickerButton size={32} icon="link" />
            <PickerButton size={32} icon="camera" />
          </View>
          <View style={styles.submitButton}>
            <SubmitButton size={32} />
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
  section: {
    minHeight: 500,
    height: 600,
    paddingTop: 100,
    backgroundColor: Colors.white,
    elevation: 4,
    marginHorizontal: 12,
    marginTop: 6,
    borderRadius: 6,
  },
  AvatarInputContainer: {
    flexDirection: "row",
  },
  inputContainer: {
    flex: 1,
    marginLeft: 4,
    marginRight: 12,
    width: 230,
  },
  textInput: {
    padding: 32,
    borderRadius: 16,
    borderWidth: 1,
  },
  filesContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: "flex-start",
  },
  imageButtonContainer: {
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  filesButtonsContainer: {
    flexDirection: "row",
  },
  submitButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
