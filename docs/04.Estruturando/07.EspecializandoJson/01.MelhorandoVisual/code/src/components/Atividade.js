import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Atividade = ({ dados }) => {

    const dataBR = data => new Date(data).toLocaleDateString('pt-BR');

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.taskTexto}>{item.atividade}</Text>
                <Text style={styles.dataTexto}>{dataBR(item.data)}</Text>
            </View>
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
    itemContainer: {
        flexDirection: 'row',
        borderColor: '#DDD',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#FFF'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    taskTexto: {
        fontSize: 16,
        fontFamily: 'Montserrat',
        color: '#222',
        fontWeight: 'bold',
        marginBottom: 5
    },
    dataTexto: {
        fontSize: 14,
        fontFamily: 'Montserrat',
        color: '#666'
    }
});
