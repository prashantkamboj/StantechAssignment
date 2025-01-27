import React from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './StyleAddNewItem';
import ComponentHeader from '../../CommonComponents/ComponentHeader/ComponentHeader';
import { Controller, useForm } from 'react-hook-form';
import { StudentForm } from './Utils/types';
import { studentFormInitialValues, studentFormNames } from './Utils/constants';
import validationSchema from './Utils/formSchema';
import {yupResolver} from '@hookform/resolvers/yup';
import { insertStudents } from '../../Utils/UtilityMethods';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamlist } from '../../Navigator/Constants/RootStackParamLists';

function ScreenAddNewItem({navigation}: NativeStackScreenProps<RootStackParamlist>) {
  const { control, handleSubmit, formState: { errors } } = useForm<StudentForm>({defaultValues: studentFormInitialValues, resolver: yupResolver(validationSchema)});
  const onSubmit = (data: StudentForm) => {
    insertStudents(data);
    console.log(data);
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ComponentHeader title="Add New Item" />
      <View style={styles.formContainer}>
        <Controller
          name={studentFormNames.name}
          control={control}
          render={({field: {onChange}}) => (
            <TextInput
              placeholder="Name"
              onChangeText={onChange}
              style={styles.textInput}
              placeholderTextColor={'black'}
            />
          )}
        />
       {errors?.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
        <Controller
          name={studentFormNames.age}
          control={control}
          render={({field: {onChange}}) => (
            <TextInput
              placeholder="Age"
              onChangeText={onChange}
              style={styles.textInput}
              placeholderTextColor={'black'}
            />
          )}
        />
        {errors?.age && <Text style={styles.errorText}>{errors.age.message}</Text>}
        <Controller
          name={studentFormNames.marks}
          control={control}
          render={({field: {onChange}}) => (
            <TextInput
              placeholder="Marks"
              onChangeText={onChange}
              style={styles.textInput}
              placeholderTextColor={'black'}
            />
          )}
        />
        {errors?.marks && <Text style={styles.errorText}>{errors.marks.message}</Text>}
        <Controller
          name={studentFormNames.city}
          control={control}
          render={({field: {onChange}}) => (
            <TextInput
              placeholder="City"
              onChangeText={onChange}
              style={styles.textInput}
              placeholderTextColor={'black'}
            />
          )}
        />
        {errors?.city && <Text style={styles.errorText}>{errors.city.message}</Text>}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitText}>
          Submit
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default ScreenAddNewItem;
