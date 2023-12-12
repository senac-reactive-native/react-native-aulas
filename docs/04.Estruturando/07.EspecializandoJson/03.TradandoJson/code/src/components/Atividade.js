import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Atividade = ({ dados }) => {

    const dataBR = data => new Date(data).toLocaleDateString('pt-BR');

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.ticketId}>Ticket ID: {item.ticketId}</Text>
            <Text style={styles.resumo}>{item.resumo}</Text>
            <Text style={styles.data}>Criado em: {dataBR(item.dataDeCriacao)}</Text>
            <Text style={styles.prazo}>Prazo: {dataBR(item.prazo)}</Text>
            <Text style={styles.status}>Status: {item.status}</Text>
        </View>
    );

    return (
        <FlatList
            data={dados}
            renderItem={renderItem}
            keyExtractor={item => item.ticketId.toString()}
        />
    );
};

export default Atividade;

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 10
    },
    ticketId: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    resumo: {
        fontSize: 14,
        color: '#666',
        marginTop: 5
    },
    data: {
        fontSize: 12,
        color: '#888',
        marginTop: 5
    },
    prazo: {
        fontSize: 12,
        color: '#888',
        marginTop: 5
    },
    status: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#007bff',
        marginTop: 5
    }
});
