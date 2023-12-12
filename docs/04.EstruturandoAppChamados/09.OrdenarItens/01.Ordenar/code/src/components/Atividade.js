import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const Atividade = ({ dados, mostrarFechados }) => {

    const dataBR = data => new Date(data).toLocaleDateString('pt-BR');

    const [tarefasOrdenadas, setTarefasOrdenadas] = useState(dados);

    const ordenarPorData = (tarefas) => {
        return [...tarefas].sort((a, b) => {
            let dataA = new Date(a.dataDeCriacao);
            let dataB = new Date(b.dataDeCriacao);
            return dataA - dataB;
        });
    };

    const ordenarPorStatus = (tarefas) => {
        return [...tarefas].sort((a, b) => {
            if (a.status < b.status) {
                return -1;
            }
            if (a.status > b.status) {
                return 1;
            }
            return 0;
        });
    };

    const ordenarTarefas = (tipo) => {
        if (tipo === 'data') {
            setTarefasOrdenadas(ordenarPorData(dados));
        } else if (tipo === 'status') {
            setTarefasOrdenadas(ordenarPorStatus(dados));
        }
    };

    const prazoExpirado = (prazo, status) => {
        const hoje = new Date();
        const dataPrazo = new Date(prazo);
        return dataPrazo < hoje && status !== 'Fechado';
    };

    const renderItem = ({ item }) => {
        if (!mostrarFechados && item.status === 'Fechado') {
            return null;
        }

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
        )
    };

    return (
        <View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => ordenarTarefas('data')}>
                    <Text style={styles.buttonText}>Ordenar por Data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => ordenarTarefas('status')}>
                    <Text style={styles.buttonText}>Ordenar por Status</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={tarefasOrdenadas}
                renderItem={renderItem}
                keyExtractor={item => item.ticketId.toString()}
            />
        </View>
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
    prazoExpirado: {
        color: 'red'
    },
    status: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#007bff',
        marginTop: 5
    },
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: '#f8f8f8'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end', // Alinha os botões à direita
        marginBottom: 10
    },
    button: {
        backgroundColor: '#e7e7e7',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginLeft: 5 // Espaçamento entre os botões
    },
    buttonText: {
        color: '#555',
        fontSize: 14
    },
});
