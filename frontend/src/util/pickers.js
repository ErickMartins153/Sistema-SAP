import * as DocumentPicker from "expo-document-picker";

export async function pickImage() {
  try {
    const image = await DocumentPicker.getDocumentAsync({ type: "image/*" });
    return image;
  } catch (error) {
    throw new Error(error);
  }
}

export async function pickPhoto() {}
