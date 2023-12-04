import React, {useState} from "react";
import {Text, TouchableOpacity, TextInput, View, StyleSheet} from "react-native";
import NumeroDisplay from './NumeroDisplay';


const Loteria = ({ quantidadeInicialDeNumeros = 6 }) => {
    const [quantidadeNumeros, setQuantidadeNumeros] = useState(quantidadeInicialDeNumeros);
    const [numeros, setNumeros] = useState([]);

    const gerarNumeros = () => {
        const novosNumeros = Array(quantidadeNumeros)
            .fill()
            .reduce(n => [...n, gerarNumeroUnico(n)], [])
            .sort((a, b) => a - b);
        setNumeros(novosNumeros);
    };

    const gerarNumeroUnico = listaDeNumeros => {
        const novo = parseInt(Math.random() * 60) + 1;
        return listaDeNumeros.includes(novo) ? gerarNumeroUnico(listaDeNumeros) : novo;
    };

    const alterarQuantidadeDeNumero = (quantidade) => {
        setQuantidadeNumeros(+quantidade || 0 );
    };

    const exibirNumeros = () => {
        return numeros.map((num, index) => (
            <NumeroDisplay key={`${num}-${index}`} num={num} />
        ));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Gerador de Loteria
            </Text>
            <TextInput
                  keyboardType='numeric'
                  style={[styles.input, styles.titulo]}
                  placeholder="Quantidade de Números"
                  value={String(quantidadeNumeros)}
                  onChangeText={alterarQuantidadeDeNumero}
              />
            <TouchableOpacity style={styles.button} onPress={gerarNumeros}>
                <Text style={styles.buttonText}>Gerar</Text>
            </TouchableOpacity>
            <View style={styles.numberContainer}>
                {exibirNumeros()}
            </View>
        </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 32,
        textAlign: "center",
    },
    input: {
        borderBottomWidth: 1,
    },
    button: {
        backgroundColor: '#4e9af1',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    numberContainer: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
});

export default Loteria;