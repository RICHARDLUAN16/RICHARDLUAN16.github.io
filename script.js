document.getElementById("reverseButton").addEventListener("click", function() {
    // Criando uma array de números de 1 a 10
    let numeros = [];
    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
    }

    // Chamando a função para inverter o array
    let arrayInvertido = inverterArray(numeros);

    // Exibindo o array invertido
    document.getElementById("output").innerText = "Array Invertido: " + arrayInvertido.join(", ");

    // Exibindo o array original
    document.getElementById("originalArray").innerText = "Array Original: " + numeros.join(", ");
});

function inverterArray(array) {
    return array.slice().reverse();
}