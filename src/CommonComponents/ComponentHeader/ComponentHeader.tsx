import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './StyleHeader';

type Props = {
  title: string;
};

function ComponentHeader({title} :Props) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyles}>{title}</Text>
    </View>
  );
}

export default ComponentHeader;
