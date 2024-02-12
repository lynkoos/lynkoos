import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './Style';

const RegisterScreen = ({ navigation }) => {
  const handleLoginNavigation = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput style={styles.input} placeholder="Nombre" />
      <TextInput style={styles.input} placeholder="Apellido" />
      <TextInput style={styles.input} placeholder="Correo" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Confirmar Contraseña" secureTextEntry={true} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLoginNavigation}>
        <Text style={styles.link}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
