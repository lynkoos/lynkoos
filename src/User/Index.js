// User.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Clipboard, Alert, Modal, ScrollView } from 'react-native';
import styles from './Style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const User = () => {
    const [verifiedBannerVisible, setVerifiedBannerVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleVerifiedPress = () => {
        setVerifiedBannerVisible(true);
        setTimeout(() => {
            setVerifiedBannerVisible(false);
        }, 3000);
    };

    const handleCopyToClipboard = (text) => {
        if (text === '@owellandry') {
            Clipboard.setString(text);
            Alert.alert('Éxito', `${text} copiado al portapapeles`);
        }
    };

    const handleModalOpen = () => {
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.bannerUser}>
                <Image source={{ uri: 'https://64.media.tumblr.com/c5543874b9cbe98da1d20945a45e989b/tumblr_o5a5r9Z9O71tvppquo1_r1_1280.gif' }} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={styles.profileImageContainer}>
                <View style={styles.profileImage}>
                    <Image source={{ uri: 'https://media.licdn.com/dms/image/D4E03AQFjifh7ZnDBuw/profile-displayphoto-shrink_800_800/0/1699368520200?e=1712793600&v=beta&t=0lvFeZ1dSrAAJ9zpn7xTZs5iVBTK6nfWrKRSfEIIvcQ' }} style={styles.ImagenUser} />
                    <TouchableOpacity onPress={handleVerifiedPress} style={styles.verifiedIcon}>
                        <Image source={{ uri: 'https://img.icons8.com/?size=256&id=2xnEesCdQvBQ&format=png' }} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.usernameContainer}>
                    <TouchableOpacity onPress={() => handleCopyToClipboard('@owellandry')}>
                        <Text style={styles.username}>Owell Polanco</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleCopyToClipboard('@owellandry')}>
                        <Text style={styles.Nickusername}>@owellandry</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleModalOpen} style={styles.extraBadge}>
                        <Image source={{ uri: 'https://img.icons8.com/?size=256&id=6xAxa01b934f&format=png' }} style={{ width: 24, height: 24 }} />
                    </TouchableOpacity>
                </View>
            </View>
            {verifiedBannerVisible && (
                <View style={styles.verifiedBanner}>
                    <Text style={styles.verifiedText}>Esta cuenta está verificada porque pertenece al equipo oficial en Lynkoos</Text>
                </View>
            )}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleModalClose}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>El usuario trabaja para Lynkoos</Text>
                        <TouchableOpacity onPress={handleModalClose} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.socialIconsContainer}>
                <TouchableOpacity style={styles.socialIcon}>
                    <Icon name="facebook" size={30} color="#3b5998" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                    <Icon name="discord" size={30} color="#1da1f2" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                    <Icon name="telegram" size={30} color="#c13584" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                    <Icon name="email" size={30} color="#c13584" />
                </TouchableOpacity>
            </View>
            <View style={styles.DescriptionUser}>
                <Text style={styles.userDescription}>
                    Soy Owell, un desarrollador senior, apasionado por el mundo de la tecnología y los desafíos que esta ofrece. Siempre he sido un soñador y estoy comprometido en lograr cada uno de mis objetivos profesionales.

                    Actualmente, soy el dueño de BreakLineStudio, una empresa dedicada al desarrollo web y de software. Como desarrollador, cuento con habilidades que me permiten construir soluciones digitales eficientes y de alta calidad. Me considero un profesional en constante crecimiento y estoy trabajando para convertirme en un desarrollador full stack.
                </Text>
            </View>
        </ScrollView>
    );
};

export default User;
