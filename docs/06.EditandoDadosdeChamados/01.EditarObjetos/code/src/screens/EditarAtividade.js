// EditarAtividade.js
import React, { useState, useEffect } from 'react';
import { Modal, View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../components/estilos/ModalEstilos'

const EditarAtividade = ({ modalVisible, setModalVisible, atividade, onSave }) => {
    const [ticketEditado, setTicketEditado] = useState(atividade);

    useEffect(() => {
        setTicketEditado(atividade);
    }, [atividade]);

    const handleSave = () => {
        onSave(ticketEditado);
        setModalVisible(false);
    };

    return (
        <Modal
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
            animationType="slide"
            transparent={true}>
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
        </Modal>
    );
};

export default EditarAtividade;