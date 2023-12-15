import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dadosAtividades from '../data/dadosAtividades2.json';


const AtividadesContext = createContext();

export const useAtividades = () => useContext(AtividadesContext);

export const AtividadesProvider = ({ children }) => {
    const [atividades, setAtividades] = useState([]);

    // Carregar atividades do AsyncStorage
    const carregarDados = async () => {
        try {
            const atividadesSalvas = await AsyncStorage.getItem('listaDeAtividades');
            if (atividadesSalvas !== null) {
                setAtividades(JSON.parse(atividadesSalvas));
            }
        } catch (e) {
            setAtividades(dadosAtividades)
            console.error("Erro ao carregar atividades:", e);
        }
    };

    // Carregar dados quando o provider é montado
    useEffect(() => {
        carregarDados();
    }, [atividades]);

    return (
        <AtividadesContext.Provider value={{
            atividades,
            setAtividades

        }}>
            {children}
        </AtividadesContext.Provider>
    );
};
