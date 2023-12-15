import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/ItemAtividade';

const EditarAtividade = ({ route, navigation }) => {
    const { ticket } = route.params;
    const [ticketEditado, setTicketEditado] = useState(ticket);

    useEffect(() => {
        if (ticket) {
            setTicketEditado(ticket);
        }
    }, [ticket]);

    const handleSave = async () => {
        try {
            const atividadesSalvas = await AsyncStorage.getItem('listaDeAtividades');
            let atividades = atividadesSalvas ? JSON.parse(atividadesSalvas) : [];
            const index = atividades.findIndex((item) => item.ticketId === ticketEditado.ticketId);

            if (index !== -1) {
                atividades[index] = ticketEditado;
            } else {
                atividades.push(ticketEditado); // Se o ticket não existir, adicione-o à lista
            }

            await AsyncStorage.setItem('listaDeAtividades', JSON.stringify(atividades));
            Alert.alert("Sucesso", "Atividade atualizada com sucesso!");
            navigation.goBack(); // Volta para a tela anterior após salvar
        } catch (error) {
            console.error("Erro ao salvar atividade:", error);
            Alert.alert("Erro", "Não foi possível salvar a atividade.");
        }
    };

    return (
        <View style={styles.modalContainer}>
            <View style={styles.formContainer}>
                <Text style={styles.ticketId}>Ticket ID: {ticketEditado?.ticketId}</Text>
                <TextInput
                    style={styles.input}
                    value={ticketEditado?.resumo}
                    onChangeText={(text) => setTicketEditado({ ...ticketEditado, resumo: text })}
                    placeholder="Resumo"
                />
                <TouchableOpacity style={styles.closeButton} onPress={handleSave}>
                    <Text style={styles.closeButtonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EditarAtividade;
