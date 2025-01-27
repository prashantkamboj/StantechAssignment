import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    formContainer: {
        marginTop: 10,
    },
    textInput: {
        height: 50,
        width: '90%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 10,
        color: 'black',
    },
    submitButton: {
        height: 50,
        width: '50%',
        borderColor: '#9FAF00',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'yellow',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    submitText: {
        color: 'black',
        fontSize: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginLeft: 20,
    },
});
