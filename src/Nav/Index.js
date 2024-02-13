import React from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Navbar = () => {
  const navigation = useNavigation();
  const animatedValue = new Animated.Value(0);

  const handlePress = (routeName, index) => {
    navigation.navigate(routeName);
    Animated.spring(animatedValue, {
      toValue: index,
      useNativeDriver: true
    }).start();
  };

  const getBubbleStyle = (index) => {
    return {
      transform: [
        {
          translateY: animatedValue.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, -10, 0],
            extrapolate: 'clamp'
          })
        }
      ]
    };
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={() => handlePress('Home', 1)}>
        <Animated.View style={[styles.bubble, getBubbleStyle(1)]}>
          <Icon name="home" size={28} style={styles.icon} />
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handlePress('Profile', 2)}>
        <Animated.View style={[styles.bubble, getBubbleStyle(2)]}>
          <Icon name="person" size={28} style={styles.icon} />
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handlePress('Notifications', 3)}>
        <Animated.View style={[styles.bubble, getBubbleStyle(3)]}>
          <Icon name="notifications" size={28} style={styles.icon} />
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handlePress('Settings', 4)}>
        <Animated.View style={[styles.bubble, getBubbleStyle(4)]}>
          <Icon name="settings" size={28} style={styles.icon} />
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handlePress('About', 5)}>
        <Animated.View style={[styles.bubble, getBubbleStyle(5)]}>
          <Icon name="add" size={28} style={styles.icon} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
