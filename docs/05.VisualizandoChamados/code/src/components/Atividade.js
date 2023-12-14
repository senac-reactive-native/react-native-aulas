import React, {useState} from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import VisualizarAtividade from '../screens/VisualizarAtividade';

import { ordenarPorData, ordenarPorStatus } from './utilidades';
import ItemAtividade from './ItemAtividade';
import styles from './Estilos';

const Atividade = ({ dados, mostrarFechados }) => {

    const [tarefasOrdenadas, setTarefasOrdenadas] = useState(dados);
    const [selecaoOrdenacao, setSelecaoOrdenacao] = useState('data');
    const [ticketSelecionado, setTicketSelecionado] = useState(null);
    const [mostrarAtividade, setMostrarAtividade] = useState(false);

    const ordenarTarefas = (tipo) => {
        if (tipo === 'data') {
            setTarefasOrdenadas(ordenarPorData(dados));
        } else if (tipo === 'status') {
            setTarefasOrdenadas(ordenarPorStatus(dados));
        }
    };

    const renderItem = ({ item }) => {
        if (!mostrarFechados && item.status === 'Fechado') {
            return null;
        }

        return (
            <TouchableOpacity
                onPress={() => {
                    setTicketSelecionado(item);
                    setMostrarAtividade(true);}}>
                <ItemAtividade item={item} />
            </TouchableOpacity>

        )
    };

    return (
        <View style={styles.container}>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selecaoOrdenacao}
                    onValueChange={(itemValue, itemIndex) => {
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
            <VisualizarAtividade modalVisible={mostrarAtividade} setModalVisible={() => setMostrarAtividade(false)} atividade={ticketSelecionado}/>
        </View>
    );
};

export default Atividade;
