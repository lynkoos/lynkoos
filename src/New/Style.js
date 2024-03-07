import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerNewPost: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputNewPost: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  imageButtonNewPost: {
    flexDirection: 'row', // Alinea los elementos horizontalmente
    alignItems: 'center', // Alinea los elementos verticalmente
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  imageButtonTextNewPost: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 10,
  },
  imagePreviewNewPost: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default styles;
