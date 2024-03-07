import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import styles from './Style';

const NewPostScreen = () => {
  const [postContent, setPostContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const askPermission = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Error', 'Se necesita permiso para acceder a la galería de fotos.');
      }
    }
  };

  const pickImage = async () => {
    await askPermission();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const handlePost = () => {
    if (!postContent.trim()) {
      Alert.alert('Error', 'Por favor, escribe algo antes de publicar.');
      return;
    }

    console.log('Contenido de la publicación:', postContent);
    console.log('Imagen seleccionada:', selectedImage || 'Ninguna');
  };

  return (
    <>
      <View style={styles.containerNewPost}>
        <TextInput
          style={styles.inputNewPost}
          onChangeText={text => setPostContent(text)}
          value={postContent}
          placeholder="Escribe tu publicación aquí..."
          multiline={true}
        />
        {selectedImage && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: selectedImage }} style={styles.imagePreviewNewPost} />
          </View>
        )}
        <TouchableOpacity style={styles.imageButtonNewPost} onPress={pickImage}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="camera" size={24} color="white" /> 
            <Text style={styles.imageButtonTextNewPost}>Seleccionar Imagen</Text>
          </View>
        </TouchableOpacity>
        <Button title="Publicar" onPress={handlePost} />
      </View>
    </>
  );
};

export default NewPostScreen;
