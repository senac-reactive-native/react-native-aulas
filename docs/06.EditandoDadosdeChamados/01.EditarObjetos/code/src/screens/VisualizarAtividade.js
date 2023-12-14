import React from 'react';
import { Modal, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { dataBR } from '../components/utilidades';
import styles from '../components/estilos/ModalEstilos'


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
                            <Text style={styles.ticketId}>Ticket ID: {atividade.ticketId}</Text>
                            <Text style={styles.resumo}>{atividade.resumo}</Text>
                            <Text style={styles.descricao}>Descrição: {atividade.descricao}</Text>
                            <Text style={styles.data}>Criado em: {dataBR(atividade.dataDeCriacao)}</Text>
                            <Text style={styles.dataInicio}>Início: {dataBR(atividade.dataDeInicio)}</Text>
                            <Text style={styles.prazo}>
                                Prazo: {dataBR(atividade.prazo)}
                            </Text>
                            <Text style={styles.status}>Status: {atividade.status}</Text>
                            <View style={styles.enderecoContainer}>
                                <Text style={styles.enderecoTitulo}>Endereço de Atendimento:</Text>
                                <Text style={styles.endereco}>Rua: {atividade.enderecoDeAtendimento.rua}, {atividade.enderecoDeAtendimento.numero}</Text>
                                <Text style={styles.endereco}>Cidade: {atividade.enderecoDeAtendimento.cidade}</Text>
                                <Text style={styles.endereco}>Estado: {atividade.enderecoDeAtendimento.estado}</Text>
                                <Text style={styles.endereco}>CEP: {atividade.enderecoDeAtendimento.cep}</Text>
                            </View>
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
