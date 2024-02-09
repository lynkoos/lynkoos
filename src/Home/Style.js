// src/Home/Style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  storyItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  storyUser: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  postItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  postInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  postTime: {
    color: '#666',
  },
  postDate: {
    color: '#666',
  },
  reactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  reaction: {
    marginLeft: 5,
  },
  eventItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default styles;
