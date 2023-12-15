import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import PushNotification from 'react-native-push-notification';

const AtividadesContext = createContext();

export const useAtividades = () => useContext(AtividadesContext);

export const AtividadesProvider = ({ children }) => {
    const [atividades, setAtividades] = useState([]);
    const atividadesRef = useRef(atividades);

    useEffect(() => {
        atividadesRef.current = atividades;
    }, [atividades]);

    const fetchAtividadesFromAPI = async () => {
        try {
            const response = await axios.get('http://10.0.2.2:3000/atividades');
            const atividadesAPI = response.data;

            const atividadesSalvas = await AsyncStorage.getItem('listaDeAtividades2');
            let atividades = atividadesSalvas ? JSON.parse(atividadesSalvas) : [];

            // Filtrar e adicionar apenas novas atividades que não existem na lista atual
            const novasAtividades = atividadesAPI.filter(atividadeAPI =>
                !atividades.some(ativ => ativ.ticketId === atividadeAPI.ticketId));

            if (novasAtividades.length > 0) {
                const atividadesAtualizadas = [...atividades, ...novasAtividades];
                setAtividades(atividadesAtualizadas);
                await AsyncStorage.setItem('listaDeAtividades2', JSON.stringify(atividadesAtualizadas));

                PushNotification.localNotification({
                    title: "Novas Atividades",
                    message: "Você tem novas atividades!",
                    // outros parâmetros conforme necessário
                });
            }
        } catch (error) {
            console.error("Erro ao carregar atividades da API:", error);
        }
    };


    const carregarDados = async () => {
        try {
            const atividadesSalvas = await AsyncStorage.getItem('listaDeAtividades2');
            if (atividadesSalvas !== null) {
                setAtividades(JSON.parse(atividadesSalvas));
            } else {
                await fetchAtividadesFromAPI();
            }
        } catch (e) {
            console.error("Erro ao carregar atividades:", e);
            await fetchAtividadesFromAPI();
        }
    };

    useEffect(() => {
        carregarDados();
        const interval = setInterval(fetchAtividadesFromAPI, 10000);

        return () => clearInterval(interval);
    }, [atividadesRef]); // Removido atividades das dependências

    return (
        <AtividadesContext.Provider value={{ atividades, setAtividades }}>
            {children}
        </AtividadesContext.Provider>
    );
};

export default AtividadesProvider;
