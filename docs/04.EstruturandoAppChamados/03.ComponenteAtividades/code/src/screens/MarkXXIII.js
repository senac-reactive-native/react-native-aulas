import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Atividade from '../components/Atividade';

const MarkXXIII = () => {
    return (
        <View style={styles.container}>
            <View style={styles.tituloContainer}>
                <Text style={styles.titulo}>Hoje</Text>
                <Text style={styles.subtitulo}>Data 11/12/2023</Text>
            </View>
            <View style={styles.tasks}>
                <Atividade titulo="Atividade 1"/>
                <Atividade titulo="Atividade 2"/>
                <Atividade titulo="Atividade 3"/>
                <Atividade titulo="Atividade 4"/>
            </View>
        </View>
    );
};

export default MarkXXIII;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    tituloContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },
    subtitulo: {
        fontSize: 18,
        color: '#666'
    },
    tasks: {
        flex: 7
    }
});
