import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Atividade = ({ titulo, data }) => {

    const dataBR = data => data.toLocaleDateString('pt-BR');

    return (
        <View>
            <Text style={styles.taskTexto}>{titulo}</Text>
            <Text style={styles.taskTexto}>{dataBR(data)}</Text>
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