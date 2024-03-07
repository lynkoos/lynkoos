import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa FontAwesome o cualquier otro conjunto de iconos que desees utilizar
import Navbar from '../Nav/Index';
import styles from './Style';

const SettingScreen = () => {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showEmail, setShowEmail] = useState(true);
  const [showPhone, setShowPhone] = useState(true);
  const [showAddress, setShowAddress] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);
  const [showInterests, setShowInterests] = useState(true);
  const [showBio, setShowBio] = useState(false);

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const handleFontSizeChange = () => {
    const newSize = fontSize === 'small' ? 'medium' : 'small';
    setFontSize(newSize);
    // Lógica adicional para cambiar el tamaño de fuente
  };

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
    // Lógica adicional para activar/desactivar notificaciones
  };

  const handleToggleOption = (option) => {
    switch (option) {
      case 'email':
        setShowEmail(!showEmail);
        break;
      case 'phone':
        setShowPhone(!showPhone);
        break;
      case 'address':
        setShowAddress(!showAddress);
        break;
      case 'birthday':
        setShowBirthday(!showBirthday);
        break;
      case 'interests':
        setShowInterests(!showInterests);
        break;
      case 'bio':
        setShowBio(!showBio);
        break;
      default:
        break;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Configuración</Text>

        <TouchableOpacity style={styles.option} onPress={handleThemeChange}>
          <Icon name="paint-brush" size={20} />
          <Text>Cambiar Tema: {theme}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleFontSizeChange}>
          <Icon name="font" size={20} />
          <Text>Cambiar Tamaño de Fuente: {fontSize}</Text>
        </TouchableOpacity>

        <View style={styles.option}>
          <Text>Activar/Desactivar Notificaciones</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={handleNotificationsToggle}
          />
        </View>

        <TouchableOpacity
          style={styles.toggleOption}
          onPress={() => handleToggleOption('email')}>
          <Text>Mostrar Correo Electrónico: {showEmail ? 'Sí' : 'No'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.toggleOption}
          onPress={() => handleToggleOption('phone')}>
          <Text>Mostrar Teléfono: {showPhone ? 'Sí' : 'No'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.toggleOption}
          onPress={() => handleToggleOption('address')}>
          <Text>Mostrar Dirección: {showAddress ? 'Sí' : 'No'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.toggleOption}
          onPress={() => handleToggleOption('birthday')}>
          <Text>Mostrar Fecha de Nacimiento: {showBirthday ? 'Sí' : 'No'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.toggleOption}
          onPress={() => handleToggleOption('interests')}>
          <Text>Mostrar Intereses: {showInterests ? 'Sí' : 'No'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.toggleOption}
          onPress={() => handleToggleOption('bio')}>
          <Text>Mostrar Biografía: {showBio ? 'Sí' : 'No'}</Text>
        </TouchableOpacity>
      </View>
      <Navbar />
    </View>
  );
};

export default SettingScreen;