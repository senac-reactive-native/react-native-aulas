import React from 'react';
import { View, Text } from 'react-native';
import { dataBR, prazoExpirado } from './utilidades';
import styles from './Estilos';

const ItemAtividade = ({ item }) => {
    const prazoExpirou = prazoExpirado(item.prazo, item.status);

    return (
        <View style={styles.itemContainer}>
            <Text style={styles.ticketId}>Ticket ID: {item.ticketId}</Text>
            <Text style={styles.resumo}>{item.resumo}</Text>
            <Text style={styles.data}>Criado em: {dataBR(item.dataDeCriacao)}</Text>
            <Text style={[styles.prazo, prazoExpirou ? styles.prazoExpirado : null]}>
                Prazo: {dataBR(item.prazo)}
            </Text>
            <Text style={styles.status}>Status: {item.status}</Text>
        </View>
    );
};

export default ItemAtividade;