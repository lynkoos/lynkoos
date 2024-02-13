// src/notify/Index.js
import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './Style';

const NotifyScreen = () => {
  const notifications = [
    { id: 1, user: 'Usuario 1', message: 'te ha seguido', time: '10:00 AM' },
    { id: 2, user: 'Usuario 2', message: 'ha compartido tu publicación', time: '11:30 AM' },
    { id: 3, user: 'Usuario 3', message: 'ha reaccionado a tu publicación', time: '1:45 PM' },
    { id: 4, user: 'Usuario 4', message: 'te ha mencionado en un comentario', time: '2:00 PM' },
    { id: 5, user: 'Usuario 5', message: 'ha comenzado a seguirte', time: '3:15 PM' },
    { id: 6, user: 'Usuario 6', message: 'ha marcado tu publicación como favorita', time: '4:30 PM' },
  ];

  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <View style={styles.userInfo}>
        <Image source={{ uri: 'https://media.licdn.com/dms/image/D4E03AQFjifh7ZnDBuw/profile-displayphoto-shrink_800_800/0/1699368520200?e=1712793600&v=beta&t=0lvFeZ1dSrAAJ9zpn7xTZs5iVBTK6nfWrKRSfEIIvcQ' }} style={styles.userImage} />
        <Text style={styles.userName}>{item.user}</Text>
      </View>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <Text style={styles.notificationTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default NotifyScreen;
