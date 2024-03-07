import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

const Conection = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      setShowModal(!state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleReloadApp = () => {
    Alert.alert('Recargar App', 'Implementa la lógica para recargar la aplicación');
  };

  return (
    <Modal
      visible={showModal}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setShowModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>Lo sentimos, no tienes conexión a internet</Text>
          <TouchableOpacity onPress={handleReloadApp} style={styles.reloadButton}>
            <Text style={styles.reloadButtonText}>Recargar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  alertText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  reloadButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  reloadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Conection;
