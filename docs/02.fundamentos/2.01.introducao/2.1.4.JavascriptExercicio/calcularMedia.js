function calcularMedia(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    let media = soma / numeros.length;
    return media;
}

// Testando a função
let numerosTeste = [10, 20, 30, 40, 50];
let resultado = calcularMedia(numerosTeste);
console.log("A média é:", resultado);
