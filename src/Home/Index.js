// src/Home/Index.js
import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './Style';

const HomeScreen = () => {
  const stories = [
    { id: 1, user: 'Usuario 1', image: 'https://via.placeholder.com/150' },
    { id: 2, user: 'Usuario 2', image: 'https://via.placeholder.com/150' },
    { id: 3, user: 'Usuario 3', image: 'https://via.placeholder.com/150' },
    { id: 4, user: 'Usuario 4', image: 'https://via.placeholder.com/150' },
    { id: 5, user: 'Usuario 5', image: 'https://via.placeholder.com/150' },
    { id: 6, user: 'Usuario 6', image: 'https://via.placeholder.com/150' },
  ];

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

  const renderStoryItem = ({ item }) => (
    <View style={styles.storyItem}>
      <Image source={{ uri: item.image }} style={styles.storyImage} />
      <Text style={styles.storyUser}>{item.user}</Text>
    </View>
  );

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

  return (
    <View style={styles.container}>
      <FlatList
        data={[{ section: 'Historias', data: stories }, { section: 'Publicaciones', data: posts }, { section: 'Eventos', data: events }]}
        renderItem={({ item }) => (
          <>
            <Text style={styles.sectionTitle}>{item.section}</Text>
            <FlatList
              data={item.data}
              renderItem={item.section === 'Historias' ? renderStoryItem : item.section === 'Publicaciones' ? renderPostItem : renderEventItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal={item.section === 'Historias'}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default HomeScreen;
