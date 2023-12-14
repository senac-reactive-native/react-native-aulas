import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Atividade from '../components/Atividade';
import homeImage from '../../assets/images/background_with_river_1.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/MarkXIIIEstilo';
import { useAtividades } from '../contexts/AtividadesContext';


import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

const MarkXXIII = ({ navigation }) => {
    const hoje = dayjs().format('ddd, D [de] MMMM');

    const [mostrarFechados, setMostrarFechados] = useState(true);
    const { atividades } = useAtividades();

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
                <Atividade mostrarFechados={mostrarFechados} navigation={navigation} />
            </View>
        </View>
    );
};

export default MarkXXIII;