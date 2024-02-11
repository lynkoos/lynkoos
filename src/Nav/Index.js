// Nav/Index.js
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={28} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Profile')}>
        <Icon name="person" size={28} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Notifications')}>
        <Icon name="notifications" size={28} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Settings')}>
        <Icon name="settings" size={28} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('About')}>
        <Icon name="add" size={28} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
