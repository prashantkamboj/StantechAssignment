import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './StyleTile';
import { deleteStudents } from '../../../../Utils/UtilityMethods';
import { User } from '../../Utils/typesHome';

function ComponentTile({data}: {data: User}) {
    const deleteStudent = () => {
        deleteStudents(data.id as number);
    };
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle} >Name: {data.name}</Text>
            <Text style={styles.textStyle}>Email: {data.email}</Text>
            <Text style={styles.textStyle}>ID: {data.id}</Text>
            <Text style={styles.textStyle}>Phone: {data.phone}</Text>
            <TouchableOpacity onPress={deleteStudent}>
                <Text style={styles.deleteText}>Delete Student</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ComponentTile;
