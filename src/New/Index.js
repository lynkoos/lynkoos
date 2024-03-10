import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useCallback, useState } from 'react';
import { Alert, Button, Image, Platform, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './Style';

const NewPostScreen = () => {
  const [postContent, setPostContent] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  const askPermission = useCallback(async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Error', 'Se necesita permiso para acceder a la galería de fotos.');
      }
    }
  }, []);

  const pickImages = useCallback(async () => {
    await askPermission();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      multiple: true,
    });

    console.log('Resultado de la selección de imágenes:', result);

    if (!result.cancelled) {
      setSelectedImages(prevImages => [...prevImages, ...result.uri]);
      console.log('Imágenes seleccionadas actualizadas:', selectedImages);
    }
  }, [askPermission, selectedImages]);

  const removeImage = useCallback(index => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  }, [selectedImages]);

  const handlePost = useCallback(() => {
    console.log('Contenido de la publicación:', postContent);
    console.log('Imágenes seleccionadas:', selectedImages);
  }, [postContent, selectedImages]);

  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Text style={styles.title}>Nueva Publicación</Text>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            onChangeText={text => setPostContent(text)}
            value={postContent}
            placeholder="Escribe tu publicación aquí..."
            multiline={true}
          />
          <View style={styles.imagePreviewContainer}>
            {selectedImages.map((image, index) => (
              <View key={index} style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.imagePreview} />
                <TouchableOpacity style={styles.removeImageButton} onPress={() => removeImage(index)}>
                  <Ionicons name="close-circle" size={24} color="red" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.imageButton} onPress={pickImages}>
            <Ionicons name="camera" size={24} color="white" />
            <Text style={styles.imageButtonText}>Seleccionar Imágenes</Text>
          </TouchableOpacity>
          <Button title="Publicar" onPress={handlePost} />
        </View>
      </View>
    </>
  );
};

export default NewPostScreen;