import React from 'react';
import { Modal, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const VisualizarAtividade = ({ modalVisible, setModalVisible, atividade }) => {
    return (
        <Modal
            visible={modalVisible}
            onRequestClose={setModalVisible}
            animationType="slide"
            transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    { atividade && (
                        <View>
                            <Text style={styles.modalTitle}>Detalhes do Ticket</Text>
                            <Text style={styles.modalText}>Ticket ID: {atividade.ticketId}</Text>
                            <Text style={styles.modalText}>Descrição: {atividade.resumo}</Text>
                            {/* ... outros detalhes do ticket */}
                            <TouchableOpacity style={styles.closeButton} onPress={setModalVisible}>
                                <Text style={styles.closeButtonText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </Modal>
    );
};

export default VisualizarAtividade;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    modalText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    closeButton: {
        backgroundColor: 'blue',
        padding: 10,
        marginTop: 15,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});
