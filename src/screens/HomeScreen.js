import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen! :D</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
        style={styles.button}
      />
    </View>
  );
};

export default HomeScreen;
