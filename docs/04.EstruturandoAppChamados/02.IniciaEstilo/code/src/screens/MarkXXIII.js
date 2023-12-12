import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MarkXXIII = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.subtitulo}>Hoje</Text>
                <Text style={styles.dataTexto}>Data 11/12/2023</Text>
            </View>
            <View style={styles.tasks}>
                <Text style={styles.taskTexto}>Atividade 1</Text>
                <Text style={styles.taskTexto}>Atividade 2</Text>
                <Text style={styles.taskTexto}>Atividade 3</Text>
                <Text style={styles.taskTexto}>Atividade 4</Text>
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
    titulo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    subtitulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },
    dataTexto: {
        fontSize: 18,
        color: '#666'
    },
    tasks: {
        flex: 7
    },
    taskTexto: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5
    }
});
