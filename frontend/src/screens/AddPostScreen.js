import { useContext, useLayoutEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import { Colors, GlobalStyles } from "../constants/style";
import UserAvatar from "../components/UI/UserAvatar";
import PickerButton from "../components/PickerButton";
import SubmitButton from "../components/UI/SubmitButton";
import { PostContext } from "../store/post-context";
import ReturnIcon from "../components/UI/ReturnIcon";
import FormattedImage from "../components/UI/FormattedImage";

export default function AddPostScreen({ navigation }) {
  const [appendedFiles, setAppendedFiles] = useState({});
  const [description, setDescription] = useState(null);

  const postCtx = useContext(PostContext);

  let imagePath = require("../assets/defaultPicture.png");
  const isImage = appendedFiles?.image ? true : false;

  if (isImage) {
    imagePath = { uri: appendedFiles.image[0].uri };
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        ...GlobalStyles.title,
      },
      headerLeft: () => <ReturnIcon onPress={handleClearPage} />,
    });
  }, [navigation]);

  function handleDescription(text) {
    setDescription(text);
  }

  function handleAppendFile(file, type) {
    if (file) {
      setAppendedFiles((prevFiles) => ({ ...prevFiles, [type]: file }));
    }
  }

  function handleRemoveImage() {
    setAppendedFiles((prevFiles) => ({ ...prevFiles, image: null }));
  }

  function handleAddPost() {
    const imageSanitizer = appendedFiles?.image
      ? appendedFiles?.image[0].uri
      : null;
    const descriptionSanitizer = description ?? "Sem descrição";
    postCtx.addPost("erick", new Date(), imageSanitizer, descriptionSanitizer);
    handleClearPage();
  }

  function handleClearPage() {
    setAppendedFiles({});
    setDescription(null);
    navigation.goBack();
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
                onChangeText={handleDescription}
                value={description}
              />
            </View>
          </View>
          <View style={styles.filesContainer}>
            <FormattedImage
              path={imagePath}
              onDelete={handleRemoveImage}
              deleteButton={isImage}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.filesButtonsContainer}>
            <PickerButton
              size={32}
              icon="image"
              onConfirm={handleAppendFile}
              type="image"
            />
            <PickerButton size={32} icon="link" />
            <PickerButton size={32} icon="camera" type="camera" />
          </View>
          <View style={styles.submitButton}>
            <SubmitButton size={32} onSubmit={handleAddPost} />
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
    paddingTop: 100,
    backgroundColor: Colors.white,
    elevation: 4,
    marginHorizontal: 12,
    marginTop: 6,
    borderRadius: 6,
    paddingBottom: 16,
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
