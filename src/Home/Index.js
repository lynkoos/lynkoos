import React, { useRef } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar from '../Nav/Index';
import styles from './Style';

const HomeScreen = () => {
  const navigation = useNavigation();
  const buttonRef = useRef(null);

  const posts = [
    { id: 1, title: 'Publicación 1', content: 'Contenido de la publicación 1', time: '10:00 AM', date: '2024-02-09', reactions: ['😊', '👍', '❤️'] },
    { id: 2, title: 'Publicación 2', content: 'Contenido de la publicación 2', time: '11:30 AM', date: '2024-02-10', reactions: ['😄', '👏', '🎉'] },
    { id: 3, title: 'Publicación 3', content: 'Contenido de la publicación 3', time: '1:45 PM', date: '2024-02-11', reactions: ['😍', '🙌', '💖'] },
  ];

  const events = [
    { id: 1, title: 'Evento 1', description: 'Descripción del evento 1', date: '10 de febrero de 2024' },
    { id: 2, title: 'Evento 2', description: 'Descripción del evento 2', date: '15 de febrero de 2024' },
    { id: 3, title: 'Evento 3', description: 'Descripción del evento 3', date: '20 de febrero de 2024' },
  ];

  const renderPostItem = ({ item }) => (
    <View style={styles.postItem}>
      <View style={styles.userInfo}>
        <Image source={{ uri: 'https://media.licdn.com/dms/image/D4E03AQFjifh7ZnDBuw/profile-displayphoto-shrink_800_800/0/1699368520200?e=1712793600&v=beta&t=0lvFeZ1dSrAAJ9zpn7xTZs5iVBTK6nfWrKRSfEIIvcQ' }} style={styles.userImage} />
        <Text style={styles.userName}>Nombre del Usuario</Text>
      </View>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text>{item.content}</Text>
      <View style={styles.postInfo}>
        <Text style={styles.postTime}>{item.time}</Text>
        <Text style={styles.postDate}>{item.date}</Text>
      </View>
      <View style={styles.reactionsContainer}>
        {item.reactions.map((reaction, index) => (
          <Text key={index} style={styles.reaction}>{reaction}</Text>
        ))}
      </View>
    </View>
  );

  const renderEventItem = ({ item }) => (
    <View style={styles.eventItem}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.date}</Text>
    </View>
  );

  const handleNewPost = () => {
    navigation.navigate('New');
  };

  const handlePressIn = () => {
    if (buttonRef.current) {
      buttonRef.current.setNativeProps({ style: styles.newPostButtonPressed });
    }
  };

  const handlePressOut = () => {
    if (buttonRef.current) {
      buttonRef.current.setNativeProps({ style: styles.newPostButton });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={[{ section: 'Publicaciones', data: posts }, { section: 'Eventos', data: events }]}
          renderItem={({ item }) => (
            <>
              <Text style={styles.sectionTitle}>{item.section}</Text>
              <FlatList
                data={item.data}
                renderItem={item.section === 'Publicaciones' ? renderPostItem : renderEventItem}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
              />
            </>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.newPostButtonContainer}>
          <TouchableOpacity
            ref={buttonRef}
            style={styles.newPostButton}
            onPress={handleNewPost}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Icon name="add-circle-outline" size={24} color="black" />
            <Text style={styles.newPostButtonText}>Crear nueva publicación</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NavBar />
    </View>
  );
};

export default HomeScreen;
