import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Clipboard, Alert, Modal, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import verifiedIcon from '../img/verified.png';
import upgradeIcon from '../img/upgrade.png';
import { StatusBar } from 'react-native';
import styles from './Style';

const User = () => {
    const [verifiedBannerVisible, setVerifiedBannerVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const userBanner = require('../img/BannerLynkoos.png');
    const defaultBanner = require('../img/BannerDefault.png');
    const userProfileImage = require('../img/LogoLynkoos.png');
    const defaultProfileImage = require('../img/LogoDefault.png');

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
    <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <View style={styles.container}>
            <View style={styles.bannerUser}>
                <Image source={userBanner || defaultBanner} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={styles.profileImageContainer}>
                <View style={styles.profileImage}>
                    <Image source={userProfileImage || defaultProfileImage} style={styles.ImagenUser} />
                    <TouchableOpacity onPress={handleVerifiedPress} style={styles.verifiedIcon}>
                        <Image source={verifiedIcon} style={{ width: 30, height: 30 }} />
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
                        <Image source={upgradeIcon} style={{ width: 22, height: 22 }} />
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
                    <Icon name="email" size={30} color="#1da1f2" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                    <Icon name="facebook" size={30} color="#c13584" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                    <Icon name="email" size={30} color="#c13584" />
                </TouchableOpacity>
            </View>
            <View style={styles.DescriptionUser}>
                {/* Aquí puedes reemplazar el texto con los iconos según tus necesidades */}
                <Text style={styles.userDescription}>

                    <Icon name="work" size={20} color="#009688" /> Soy Owell, un desarrollador senior, apasionado por el mundo de la tecnología y los desafíos que esta ofrece. Siempre he sido un soñador y estoy comprometido en lograr cada uno de mis objetivos profesionales.
                    <Icon name="work" size={20} color="#009688" /> Actualmente, soy el dueño de BreakLineStudio, una empresa dedicada al desarrollo web y de software. Como desarrollador, cuento con habilidades que me permiten construir soluciones digitales eficientes y de alta calidad. Me considero un profesional en constante crecimiento y estoy trabajando para convertirme en un desarrollador full stack.
                </Text>
            </View>
        </View>
    </View>
    );
};

export default User;
