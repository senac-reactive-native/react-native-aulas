import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Atividade = ({ titulo, data }) => {

    const dataBR = data => data.toLocaleDateString('pt-BR');

    return (
        <View style={styles.container}>
            <Text style={styles.taskTexto}>{titulo}</Text>
            <Text style={styles.dataTexto}>{dataBR(data)}</Text>
        </View>
    );
};

export default Atividade;

styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#FFF'
    },
    taskTexto: {
        fontSize: 16,
        color: '#333',
        flex: 1
    },
    dataTexto: {
        fontSize: 14,
        color: '#666'
    }
})