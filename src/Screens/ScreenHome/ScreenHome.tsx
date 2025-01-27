import React, { useCallback } from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import { styles } from './StyleHome';
import ComponentHeader from '../../CommonComponents/ComponentHeader/ComponentHeader';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackNames, RootStackParamlist } from '../../Navigator/Constants/RootStackParamLists';
import { getSudents } from '../../Utils/UtilityMethods';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/roorReducer';
import ComponentTile from './Components/ComponentTile/ComponentTile';

function ScreenHome({ navigation }: NativeStackScreenProps<RootStackParamlist>) {
  const { studetns } = useSelector((state: RootState) => state.reducerHome);
  const navigateToAddNewItem = () => {
    navigation.navigate(RootStackNames.screenAddNewItem);
  };
  const dataFromDataBase = () => {
    getSudents();
  };

  useFocusEffect(useCallback(() => {
    dataFromDataBase();
  }, []));

  return (
    <SafeAreaView style={styles.mainContainer}>
        <ComponentHeader title="Home" />
          <TouchableOpacity style={styles.buttonContainer} onPress={navigateToAddNewItem}>
            <Text style={styles.butonText}>Add Student</Text>
          </TouchableOpacity>
          <View>
            <FlatList
              data={studetns}
              renderItem={({item}) => <ComponentTile data={item} /> }
            />
          </View>
    </SafeAreaView>
  );
}

export default ScreenHome;
