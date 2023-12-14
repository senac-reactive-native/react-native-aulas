import { StyleSheet } from "react-native";

const ItemAtividade = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    modalText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    closeButton: {
        backgroundColor: 'blue',
        padding: 10,
        marginTop: 15,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    itemContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        marginBottom: 10,
    },
    ticketId: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    resumo: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
    descricao: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    data: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    dataInicio: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    prazo: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    prazoExpirado: {
        color: 'red',
    },
    status: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    enderecoContainer: {
        marginTop: 5,
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
    },
    enderecoTitulo: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    endereco: {
        fontSize: 14,
        color: '#333',
    },
    formContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%', // Largura do formulário
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 4,
        fontSize: 16,
        marginBottom: 10,
    },
});

export default ItemAtividade;