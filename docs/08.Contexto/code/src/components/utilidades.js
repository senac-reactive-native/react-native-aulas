export const prazoExpirado = (prazo, status) => {
    const hoje = new Date();
    const dataPrazo = new Date(prazo);
    return dataPrazo < hoje && status !== 'Fechado';
};

export const ordenarPorData = (tarefas) => {
    return [...tarefas].sort((a, b) => {
        let dataA = new Date(a.dataDeCriacao);
        let dataB = new Date(b.dataDeCriacao);
        return dataA - dataB;
    });
};

export const ordenarPorStatus = (tarefas) => {
    return [...tarefas].sort((a, b) => {
        if (a.status < b.status) {
            return -1;
        }
        if (a.status > b.status) {
            return 1;
        }
        return 0;
    });
};

export const dataBR = data => new Date(data).toLocaleDateString('pt-BR');
