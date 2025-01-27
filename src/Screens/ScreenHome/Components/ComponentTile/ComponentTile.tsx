import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './StyleTile';
import { Student } from '../../../../Utils/databaseTypes';
import { deleteSudents } from '../../../../Utils/UtilityMethods';

function ComponentTile({data}: {data: Student}) {
    const deleteStudent = () => {
        deleteSudents(data.id as number);
    };
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle} >Name: {data.name}</Text>
            <Text style={styles.textStyle}>Age: {data.age}</Text>
            <Text style={styles.textStyle}>Marks: {data.marks}</Text>
            <Text style={styles.textStyle}>City: {data.city}</Text>
            <TouchableOpacity onPress={deleteStudent}>
                <Text style={styles.deleteText}>Delete Student</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ComponentTile;
