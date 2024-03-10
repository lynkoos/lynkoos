import React, { useCallback } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Swipeable } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import styles from './Style';

const NotifyScreen = () => {
  const notifications = [
    { id: 1, user: 'Usuario 1', message: 'te ha seguido', time: '10:00 AM', read: false },
    { id: 2, user: 'Usuario 2', message: 'ha compartido tu publicación', time: '11:30 AM', read: false },
    { id: 3, user: 'Usuario 3', message: 'ha reaccionado a tu publicación', time: '1:45 PM', read: false },
    { id: 4, user: 'Usuario 4', message: 'te ha mencionado en un comentario', time: '2:00 PM', read: false },
    { id: 5, user: 'Usuario 5', message: 'ha comenzado a seguirte', time: '3:15 PM', read: false },
    { id: 6, user: 'Usuario 6', message: 'ha marcado tu publicación como favorita', time: '4:30 PM', read: false },
  ];

  const handleSwipeLeft = useCallback((id) => {
    console.log('Eliminar notificación con id:', id);
  }, []);

  const handleSwipeRight = useCallback((id) => {
    console.log('Marcar notificación como leída con id:', id);
  }, []);

  const renderNotificationItem = useCallback(({ item }) => (
    <Swipeable
      renderRightActions={() => (
        <View style={styles.rightAction}>
          <Icon name="done" size={30} color="green" />
        </View>
      )}
      renderLeftActions={() => (
        <View style={styles.leftAction}>
          <Icon name="delete" size={30} color="black" />
        </View>
      )}
      onSwipeableLeftOpen={() => handleSwipeLeft(item.id)}
      onSwipeableRightOpen={() => handleSwipeRight(item.id)}
    >
      <View style={[styles.notificationItem, item.read && styles.readItem]}>
        <View style={styles.notificationItemContent}>
          <View style={styles.userInfo}>
            <Image source={{ uri: 'https://media.licdn.com/dms/image/D4E03AQFjifh7ZnDBuw/profile-displayphoto-shrink_800_800/0/1699368520200?e=1712793600&v=beta&t=0lvFeZ1dSrAAJ9zpn7xTZs5iVBTK6nfWrKRSfEIIvcQ' }} style={styles.userImage} />
            <Text style={[styles.userName, item.read && styles.readUserName]}>{item.user}</Text>
          </View>
          <Text style={[styles.notificationMessage, item.read && styles.readMessage]}>{item.message}</Text>
          <Text style={[styles.notificationTime, item.read && styles.readTime]}>{item.time}</Text>
        </View>
      </View>
    </Swipeable>
  ), [handleSwipeLeft, handleSwipeRight]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
      <View>
          <Text style={styles.title}>Notificaciones</Text>
        </View>
        <FlatList
          data={notifications}
          renderItem={renderNotificationItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false} 
        />
      </View>
    </View>
  );
};

export default NotifyScreen;
