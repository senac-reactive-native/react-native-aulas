import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Atividade = ({ titulo }) => {
    return (
        <View>
            <Text style={styles.taskTexto}>{titulo}</Text>
        </View>
    );
};

export default Atividade;

styles = StyleSheet.create({
    taskTexto: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5
    }
})