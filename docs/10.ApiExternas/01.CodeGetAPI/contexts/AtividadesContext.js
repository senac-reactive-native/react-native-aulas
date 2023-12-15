import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'; // Importando axios para fazer chamadas à API

const AtividadesContext = createContext();

export const useAtividades = () => useContext(AtividadesContext);

export const AtividadesProvider = ({ children }) => {
    const [atividades, setAtividades] = useState([]);

    // Função para carregar atividades da API
    const fetchAtividadesFromAPI = async () => {
        try {
            const response = await axios.get('URL_DA_SUA_API'); // Substitua com a URL da sua API
            setAtividades(response.data);
            await AsyncStorage.setItem('listaDeAtividades', JSON.stringify(response.data));
        } catch (error) {
            console.error("Erro ao carregar atividades da API:", error);
        }
    };

    // Carregar atividades do AsyncStorage ou da API
    const carregarDados = async () => {
        try {
            const atividadesSalvas = await AsyncStorage.getItem('listaDeAtividades2');
            if (atividadesSalvas !== null) {
                setAtividades(JSON.parse(atividadesSalvas));
            } else {
                // Se não houver dados locais, carregar da API
                await fetchAtividadesFromAPI();
            }
        } catch (e) {
            console.error("Erro ao carregar atividades:", e);
            await fetchAtividadesFromAPI(); // Tentar carregar da API em caso de erro
        }
    };

    // Carregar dados quando o provider é montado
    useEffect(() => {
        carregarDados();
    }, [atividades]);

    return (
        <AtividadesContext.Provider value={{ atividades, setAtividades }}>
            {children}
        </AtividadesContext.Provider>
    );
};

export default AtividadesProvider;
