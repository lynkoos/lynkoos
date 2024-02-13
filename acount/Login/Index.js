import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './Style';

const LoginScreen = ({ navigation }) => {
  const handleRegisterNavigation = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <TextInput style={styles.input} placeholder="Usuario/Correo/Número" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={handleRegisterNavigation}>
        <Text style={styles.link}>¿No tienes cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
