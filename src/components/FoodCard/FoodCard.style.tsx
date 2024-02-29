import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "red",
    borderRadius: 20,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  textView: {
    width: "100%",
    height: 150,
    position: 'absolute',

  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'flex-end',
    bottom: 0,
    position: 'absolute',
    padding: 10,
  },
});
