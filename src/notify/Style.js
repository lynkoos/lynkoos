// src/notify/Style.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  notificationItem: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  readItem: {
    backgroundColor: '#e0e0e0',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  readUserName: {
    color: '#666',
  },
  notificationMessage: {
    color: '#666',
    marginTop: 5,
  },
  readMessage: {
    color: '#999',
  },
  notificationTime: {
    color: '#999',
    fontSize: 12,
    marginTop: 5,
  },
  readTime: {
    color: '#ccc',
  },
  rightAction: {
    backgroundColor: '#43a047',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  leftAction: {
    backgroundColor: '#e53935',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;
