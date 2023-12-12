import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Atividade from '../components/Atividade';
import homeImage from '../../assets/images/background_with_river_1.jpg';
import dadosAtividades from '../data/dadosAtividades2.json';
import Icon from 'react-native-vector-icons/FontAwesome'

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

const MarkXXIII = () => {
    const hoje = dayjs().format('ddd, D [de] MMMM');

    const [mostrarFechados, setMostrarFechados] = useState(true);

    const toggleMostrarFechados = () => {
        setMostrarFechados(!mostrarFechados);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={homeImage} style={styles.background}>
                <View style={styles.iconBar}>
                    <TouchableOpacity onPress={toggleMostrarFechados}>
                        <Icon name={mostrarFechados ? 'eye' : 'eye-slash'}
                            size={20} color={'#FFF'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.tituloContainer}>
                    <Text style={styles.titulo}>Hoje</Text>
                    <Text style={styles.subTitulo}>{hoje}</Text>
                </View>
            </ImageBackground>
            <View style={styles.tasks}>
                <Atividade dados={dadosAtividades} mostrarFechados={mostrarFechados} />
            </View>
        </View>
    );
};

export default MarkXXIII;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tituloContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    titulo: {
        fontFamily: 'Montserrat',
        color: '#FFF',
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subTitulo: {
        fontFamily: 'Montserrat',
        color: '#FFF',
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    tasks: {
        flex: 7,
        padding: 10
    },
    background: {
        flex: 3
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end'
    }
});
