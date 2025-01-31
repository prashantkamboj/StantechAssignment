import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        mainContainer: {
         flex:1,
         backgroundColor: 'black',
        },
        subContainer: {
            flex: 0.8,
            paddingTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },
        textInput: {
            height: 50,
            width: '90%',
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 5,
            alignSelf: 'center',
            marginTop: 10,
            color: 'white',
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
        },
        submitButton: {
            height: 50,
            width: '50%',
            borderColor: '#9FAF00',
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: 'coral',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            flexDirection: 'row',
        },
        submitText: {
            color: 'black',
            fontSize: 20,
        },
        welcomeText: {
            fontSize: 20,
            textAlign: 'center',
            color: 'white',
        },
        imageStyle: {
            width: 20,
            height: 20,
        },
    }
);
