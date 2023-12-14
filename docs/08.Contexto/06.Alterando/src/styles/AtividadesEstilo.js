import { StyleSheet } from 'react-native';

const AtividadesEstilo = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 10
    },
    ticketId: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    resumo: {
        fontSize: 14,
        color: '#666',
        marginTop: 5
    },
    data: {
        fontSize: 12,
        color: '#888',
        marginTop: 5
    },
    prazo: {
        fontSize: 12,
        color: '#888',
        marginTop: 5
    },
    prazoExpirado: {
        color: 'red'
    },
    status: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#007bff',
        marginTop: 5
    },
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: '#f8f8f8'
    },
    picker: {
        width: 150
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 10,
    },
});

export default AtividadesEstilo;