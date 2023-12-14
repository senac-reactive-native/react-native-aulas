import { StyleSheet } from 'react-native';

const EditarEstilo = StyleSheet.create({
    scrollView: {
        // Estilos para o ScrollView em si
        flex: 1,
    },
    container: {
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '90%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    row: {
        marginBottom: 15,
    },
    label: {
        fontWeight: 'bold',
    },
    value: {
        marginTop: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
    },
    dateButton: {
        marginTop: 5,
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    dateButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    datePicker: {
        flex: 1,
    },
    picker: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    saveButton: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    saveButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    imagePickerButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    imagePickerButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-around',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
});

export default EditarEstilo;
