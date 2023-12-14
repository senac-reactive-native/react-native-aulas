import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ItemAtividade from './ItemAtividade';
import styles from '../styles/AtividadesEstilo';
import { ordenarPorData, ordenarPorStatus } from './utilidades';
import { useAtividades } from '../contexts/AtividadesContext';


const Atividade = ({ mostrarFechados, navigation }) => {
    const { atividades, setAtividades } = useAtividades();
    const [tarefasOrdenadas, setTarefasOrdenadas] = useState(atividades);
    const [selecaoOrdenacao, setSelecaoOrdenacao] = useState('data');

    useEffect(() => {
        ordenarTarefas(selecaoOrdenacao);
    }, [selecaoOrdenacao, atividades]);

    const ordenarTarefas = (tipo) => {
        if (tipo === 'data') {
            setTarefasOrdenadas(ordenarPorData(atividades));
        } else if (tipo === 'status') {
            setTarefasOrdenadas(ordenarPorStatus(atividades));
        }
    };

    const abrirEditarAtividade = (ticket) => {
        navigation.navigate('EditarAtividade', { ticket: ticket });
    };

    const renderItem = ({ item }) => {
        if (!mostrarFechados && item.status === 'Fechado') {
            return null;
        }

        return (
            <ItemAtividade item={item} onPress={() => abrirEditarAtividade(item)} />
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selecaoOrdenacao}
                    onValueChange={(itemValue) => {
                        setSelecaoOrdenacao(itemValue);
                        ordenarTarefas(itemValue);
                    }}
                    style={styles.picker}>
                        <Picker.Item label="Ordenar por Data" value="data" />
                        <Picker.Item label="Ordenar por Status" value="status" />
                </Picker>
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
