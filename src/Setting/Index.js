import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Switch, ScrollView, Alert, Animated, Easing, Modal, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'react-native';
import DataJsonIconsApp from '../icons/App.json'
import styles from './Style';

const SettingScreen = () => {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [options, setOptions] = useState({
    email: true,
    phone: true,
    address: false,
    birthday: false,
    interests: true,
    bio: false,
    language: 'English',
    clearCache: false,
    appVersion: '1.0.0',
  });

  const [devToolsEnabled, setDevToolsEnabled] = useState(false);
  const [devToolsCountdown, setDevToolsCountdown] = useState(6);
  const [devToolsButtonText, setDevToolsButtonText] = useState('Activar modo desarrollador');

  const [confettiAnimation] = useState(new Animated.Value(0));
  const [iconModalVisible, setIconModalVisible] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleThemeChange = useCallback(() => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }, []);

  const handleFontSizeChange = useCallback(() => {
    setFontSize(prevFontSize => prevFontSize === 'small' ? 'medium' : 'small');
  }, []);

  const handleNotificationsToggle = useCallback(() => {
    setNotificationsEnabled(prevState => !prevState);
  }, []);

  const handleToggleOption = useCallback((option) => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  }, []);

  const showDevModeNotification = () => {
    Alert.alert(
      'Felicidades',
      'Activaste el modo desarrollador',
      [{ text: 'OK' }]
    );
  };

  const handleDevToolsClick = useCallback(() => {
    if (devToolsEnabled) {
      setDevToolsEnabled(false);
      Animated.timing(confettiAnimation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(confettiAnimation, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }).start();
      });
    } else {
      if (devToolsCountdown === 1) {
        setDevToolsEnabled(true);
        setDevToolsButtonText('Modo desarrollador activado');
        Alert.alert(
          'Modo desarrollador activado',
          'Ahora tienes acceso a las opciones de desarrollador.',
          [{ text: 'OK', onPress: () => showDevModeNotification() }]
        );
      } else {
        setDevToolsCountdown(prevCount => prevCount - 1);
        Alert.alert(
          'Modo desarrollador',
          `Estás a ${devToolsCountdown - 1} pasos de activar el modo desarrollador.`,
          [{ text: 'OK' }]
        );
      }
    }
  }, [devToolsCountdown, devToolsEnabled, confettiAnimation]);

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    setIconModalVisible(false);
    // Aquí puedes realizar cualquier acción adicional después de seleccionar un icono
  };

  const renderIcons = () => {
    return DataJsonIconsApp[0].icons.map(icon => (
      <TouchableOpacity key={icon.id} onPress={() => handleIconSelect(icon)}>
        <Image source={{ uri: icon.url }} style={{ width: 50, height: 50 }} />
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Text style={styles.title}>Configuración</Text>

        <TouchableOpacity style={styles.option} onPress={handleThemeChange}>
          <Icon name="paint-brush" size={20} style={styles.icon} />
          <Text style={styles.optionText}>Cambiar Tema: {theme}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleFontSizeChange}>
          <Icon name="font" size={20} style={styles.icon} />
          <Text style={styles.optionText}>Cambiar Tamaño de Fuente: {fontSize}</Text>
        </TouchableOpacity>

        <View style={styles.option}>
          <Text style={styles.optionText}>Activar/Desactivar Notificaciones</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={handleNotificationsToggle}
            style={styles.switch}
          />
        </View>

        {Object.entries(options).map(([key, value]) => (
          <TouchableOpacity
            key={key}
            style={styles.toggleOption}
            onPress={() => handleToggleOption(key)}>
            <Icon name={value ? 'check-square-o' : 'square-o'} size={20} style={styles.icon} />
            <Text style={styles.toggleOptionText}>Mostrar {key.charAt(0).toUpperCase() + key.slice(1)}: {value ? 'Sí' : 'No'}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.devToolsOption} onPress={handleDevToolsClick} disabled={devToolsEnabled}>
          <Text style={styles.devToolsText}>
            {devToolsButtonText}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => setIconModalVisible(true)}>
          <Icon name="image" size={20} style={styles.icon} />
          <Text style={styles.optionText}>Seleccionar Icono de la Aplicación</Text>
        </TouchableOpacity>

        {/* Modal para seleccionar icono */}
        <Modal
          visible={iconModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIconModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Seleccionar Icono de la Aplicación</Text>
              <ScrollView>{renderIcons()}</ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default SettingScreen;
