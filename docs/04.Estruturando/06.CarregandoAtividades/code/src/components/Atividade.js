import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Atividade = ({ dados }) => {

    const dataBR = data => new Date(data).toLocaleDateString('pt-BR');

    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <Text style={styles.taskTexto}>{item.atividade}</Text>
            <Text style={styles.dataTexto}>{dataBR(item.data)}</Text>
        </View>
    );

    return (
        <FlatList
            data={dados}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
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
        fontFamily: 'Montserrat',
        color: '#333',
        flex: 1
    },
    dataTexto: {
        fontSize: 14,
        fontFamily: 'Montserrat',
        color: '#666'
    }
})