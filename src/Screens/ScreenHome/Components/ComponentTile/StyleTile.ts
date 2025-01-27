import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  textStyle: {
    color: 'black',
    fontSize: 15,
  },
  deleteText: {
    textDecorationLine: 'underline',
    color: 'red',
    fontSize: 18,
    fontWeight: '700',
  },
});
