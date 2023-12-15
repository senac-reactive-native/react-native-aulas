import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/EditarEstilo';
import Geolocation from '@react-native-community/geolocation';

const EditarAtividade = ({ route, navigation }) => {
    const { ticket } = route.params;
    const [ticketEditado, setTicketEditado] = useState(ticket);
    const [dataConclusao, setDataConclusao] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [localizacao, setLocalizacao] = useState(null);
    const [imagens, setImagens] = useState([]);

    useEffect(() => {
        const obterLocalizacaoAtual = () => {
            Geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocalizacao({ latitude, longitude });
                },
                (error) => {
                    console.error(error);
                    Alert.alert("Erro", "Não foi possível obter a localização.");
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        };

        if (ticket) {
            setTicketEditado(ticket);
            if (ticket.dataConclusao) {
                setDataConclusao(new Date(ticket.dataConclusao));
            }
            // Carregar imagens salvas
            if (ticket.imagens) {
                setImagens(ticket.imagens.map(uri => ({ uri })));
            }
        }

        obterLocalizacaoAtual();
    }, [ticket]);

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || dataConclusao;
        setShowDatePicker(false);
        setDataConclusao(currentDate);
        setTicketEditado({ ...ticketEditado, dataConclusao: currentDate.toISOString() });
    };

    const handleSave = async () => {
        try {
            const atividadesSalvas = await AsyncStorage.getItem('listaDeAtividades2');
            let atividades = atividadesSalvas ? JSON.parse(atividadesSalvas) : [];
            const index = atividades.findIndex((item) => item.ticketId === ticketEditado.ticketId);

            // Atualizar o ticketEditado com as URIs das imagens
            const ticketAtualizado = {
                ...ticketEditado,
                imagens: imagens.map(img => img.uri),
                localizacao: localizacao // Adicionando a localização ao ticket
            };

            if (index !== -1) {
                atividades[index] = ticketAtualizado;
            } else {
                atividades.push(ticketAtualizado); // Se o ticket não existir, adicione-o à lista
            }

            await AsyncStorage.setItem('listaDeAtividades2', JSON.stringify(atividades));
            Alert.alert("Sucesso", "Atividade atualizada com sucesso!");
            navigation.goBack(); // Volta para a tela anterior após salvar
        } catch (error) {
            console.error("Erro ao salvar atividade:", error);
            Alert.alert("Erro", "Não foi possível salvar a atividade.");
        }
    };

    const escolherImagem = () => {
        const options = {
            noData: true,
            mediaType: 'photo',
            allowsEditing: true,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },

        };

        const buttons = [
            { text: 'Tirar Foto', onPress: () => launchCamera(options, onImageSelect) },
            { text: 'Escolher da Galeria', onPress: () => launchImageLibrary(options, onImageSelect) },
            { text: 'Cancelar', style: 'cancel' },
        ];

        Alert.alert('Adicionar Imagem', 'Escolha uma opção', buttons);
    };

    const onImageSelect = (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('Usuário cancelou a seleção de imagem');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else {
            const source = { uri: response.assets[0].uri };
            setImagens([...imagens, source]);
        }
    };

    const excluirImagem = (index) => {
        setImagens(imagens.filter((_, i) => i !== index));
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.header}>Editar Atividade</Text>

                <View style={styles.row}>
                    <Text style={styles.label}>Ticket ID:</Text>
                    <Text style={styles.value}>{ticketEditado?.ticketId}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Resumo:</Text>
                    <Text style={styles.value}>{ticketEditado?.resumo}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Descrição:</Text>
                    <Text style={styles.value}>{ticketEditado?.descricao}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Localização Atual:</Text>
                    {localizacao ? (
                        <Text style={styles.value}>
                            Latitude: {localizacao.latitude.toFixed(6)}, Longitude: {localizacao.longitude.toFixed(6)}
                        </Text>
                    ) : (
                        <Text style={styles.value}>Carregando localização...</Text>
                    )}
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Data de Conclusão:</Text>
                    <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
                        <Text style={styles.dateButtonText}>{dataConclusao.toLocaleDateString()}</Text>
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={dataConclusao}
                            mode="date"
                            display="default"
                            onChange={onDateChange}
                            style={styles.datePicker}
                        />
                    )}
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Status:</Text>
                    <Picker
                        selectedValue={ticketEditado.status}
                        onValueChange={(itemValue) => setTicketEditado({ ...ticketEditado, status: itemValue })}
                        style={styles.picker}>
                        <Picker.Item label="Aberto" value="Aberto" />
                        <Picker.Item label="Em Andamento" value="Fechado" />
                        <Picker.Item label="Concluído" value="Concluído" />
                    </Picker>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Comentário:</Text>
                    <TextInput
                        style={styles.input}
                        value={ticketEditado?.comentario}
                        onChangeText={(text) => setTicketEditado({ ...ticketEditado, comentario: text })}
                        placeholder="Adicione um comentário"
                    />
                </View>

                <TouchableOpacity style={styles.imagePickerButton} onPress={escolherImagem}>
                        <Text style={styles.imagePickerButtonText}>Adicionar Imagem</Text>
                    </TouchableOpacity>

                <View style={styles.imageContainer}>
                   {imagens.map((img, index) => (
                        <View key={index} style={styles.imageWrapper}>
                            <Image source={{ uri: img.uri }} style={styles.image} />
                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={() => excluirImagem(index)}>
                                <Text style={styles.deleteButtonText}>X</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    );
};

export default EditarAtividade;
