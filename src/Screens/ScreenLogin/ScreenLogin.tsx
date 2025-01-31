import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import ComponentHeader from '../../CommonComponents/ComponentHeader/ComponentHeader';
import {styles} from './StyleLogin';
import {LoginFormTypes} from './types';
import {loginFormDefaultValues} from './constants';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackNames, RootStackParamlist } from '../../Navigator/Constants/RootStackParamLists';

function ScreenLogin({navigation}: NativeStackScreenProps<RootStackParamlist>) {
  const {control, handleSubmit} = useForm<LoginFormTypes>({
    defaultValues: loginFormDefaultValues,
  });
  const postData = async (data: LoginFormTypes) => {
    const body = JSON.stringify( {
      ...data,
      token: 'fbBGlcNFgA4L2UJGaEmiCd:APA91bGrIMR5zYPXrmyI6cqRlz0llbjZyhidWuWSphVRnr6z9jXln-aUxwaCSQ2cTYT-rshF8cjHZBzFeT_BVMav_cE9Pc_ShKB5P-32A-IofPjxKluOUuM',
    });
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: body,
    };
    fetch("https://bodspheretest.bodsphere.com:4001/userRegistration", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
     navigation.navigate(RootStackNames.screenHome);
    })
    .catch((error) => console.error(error));
  };
  const onSubmit = (data: LoginFormTypes) => {
    console.log(data);
    postData(data);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ComponentHeader title="Login" />
      <View style={styles.subContainer}>
        <Text style={styles.welcomeText}> Welcome Back</Text>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange}}) => (
            <TextInput style={styles.textInput} placeholder="Email" onChangeText={onChange} placeholderTextColor={'white'}/>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({field: {onChange}}) => (
            <TextInput style={styles.textInput} placeholder="Password" onChangeText={onChange} placeholderTextColor={'white'} />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({field: {onChange}}) => (
            <TextInput style={styles.textInput} placeholder="ConfirmPassword" onChangeText={onChange} placeholderTextColor={'white'}  />
          )}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)} >
            <Text style={styles.submitText}>Submit</Text>
            <Image source={require('./arrow.png')} height={30} width={30} style={styles.imageStyle} resizeMode={'contain'}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ScreenLogin;
