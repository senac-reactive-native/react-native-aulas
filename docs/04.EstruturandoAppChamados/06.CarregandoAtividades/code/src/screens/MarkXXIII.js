import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Atividade from '../components/Atividade';
import homeImage from '../../assets/images/background_with_river_1.jpg';
import dadosAtividades from '../data/dadosAtividades.json';


import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

const MarkXXIII = () => {
    const hoje = dayjs().format('ddd, D [de] MMMM');

    return (
        <View style={styles.container}>
            <ImageBackground source={homeImage} style={styles.background}>
                <View style={styles.tituloContainer}>
                    <Text style={styles.titulo}>Hoje</Text>
                    <Text style={styles.subTitulo}>{hoje}</Text>
                </View>
            </ImageBackground>
            <View style={styles.tasks}>
                <Atividade dados={dadosAtividades}/>
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
        flex: 7
    },
    background: {
        flex: 3
    },
});
