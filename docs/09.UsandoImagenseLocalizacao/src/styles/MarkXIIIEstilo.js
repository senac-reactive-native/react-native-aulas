import { StyleSheet } from "react-native";

const MarkEstilo = StyleSheet.create({
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
        flex: 7,
        padding: 10
    },
    background: {
        flex: 3
    },
    iconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end'
    }
});

export default MarkEstilo;