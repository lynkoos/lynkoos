import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,  
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#333',
  },
  bubble: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
