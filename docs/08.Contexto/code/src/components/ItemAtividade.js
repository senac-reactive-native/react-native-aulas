import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { dataBR, prazoExpirado } from './utilidades';
import styles from '../styles/AtividadesEstilo';

const ItemAtividade = ({ item, onPress }) => {
    const prazoExpirou = prazoExpirado(item.prazo, item.status);

    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(item)}>
            <Text style={styles.ticketId}>Ticket ID: {item.ticketId}</Text>
            <Text style={styles.resumo}>{item.resumo}</Text>
            <Text style={styles.data}>Criado em: {dataBR(item.dataDeCriacao)}</Text>
            <Text style={[styles.prazo, prazoExpirou ? styles.prazoExpirado : null]}>
                Prazo: {dataBR(item.prazo)}
            </Text>
            <Text style={styles.status}>Status: {item.status}</Text>
        </TouchableOpacity>
    );
};

export default ItemAtividade;
