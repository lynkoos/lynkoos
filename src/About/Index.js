import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Share, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import ViewShot from "react-native-view-shot";
import styles from './Style';

const AboutScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isAvatarSelected, setIsAvatarSelected] = useState(true);
  const qrRef = useRef();

  const user = {
    name: 'owellandry',
    email: 'usuario@example.com',
    phone: '+1234567890',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ligula consequat, vehicula odio eu, pretium justo. Vivamus luctus vitae ipsum non consectetur.',
    avatar: "https://media.licdn.com/dms/image/D4E03AQFjifh7ZnDBuw/profile-displayphoto-shrink_800_800/0/1699368520200?e=1712793600&v=beta&t=0lvFeZ1dSrAAJ9zpn7xTZs5iVBTK6nfWrKRSfEIIvcQ",
  };

  const handleToggle = () => {
    setIsAvatarSelected(!isAvatarSelected);
  };

  const shareProfile = async () => {
    try {
      if (isAvatarSelected) {
        const message = `Nombre: ${user.name}\nCorreo electrónico: ${user.email}\nTeléfono: ${user.phone}\nBiografía: ${user.bio}`;
        await Share.share({
          message: message,
          url: user.avatar,
          title: 'Perfil de usuario',
        });
      } else {
        await captureQR();
      }
    } catch (error) {
      console.error('Error al compartir:', error);
    }
  };

  const captureQR = async () => {
    try {
      const uri = await qrRef.current.capture();
      await Share.share({
        title: 'QR Code',
        url: uri,
      });
    } catch (error) {
      console.error('Error al capturar el QR:', error);
    }
  };

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleQRPress = () => {
    handleToggle();
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={handleQRPress} style={styles.qrContainer}>
          <ViewShot ref={qrRef} options={{ format: "png", quality: 1 }}>
            <QRCode value={user.name} size={40} />
          </ViewShot>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openModal(user.avatar)}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.phone}>{user.phone}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <TouchableOpacity onPress={shareProfile} style={styles.shareButton}>
        <Text style={styles.shareButtonText}>Compartir Perfil</Text>
      </TouchableOpacity>

      <Modal visible={showModal} transparent={true} onRequestClose={closeModal}>
        <View style={styles.qrModalContainer}>
          <View style={styles.qrModalContent}>
            {modalContent && isAvatarSelected ? (
              <Image source={{ uri: modalContent }} style={styles.qrModalImage} />
            ) : (
              <QRCode value={user.name} size={200} />
            )}
            <TouchableOpacity onPress={shareProfile} style={styles.shareButton}>
              <Text style={styles.shareButtonText}>Compartir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AboutScreen;
  