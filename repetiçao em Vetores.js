let notas = [5, 4.5, 5.4, 3.5, 5.5, 6, 5];
let acumula = 0;

for(i = 0; i < notas.length; i++){
    acumula += notas[i];
}

let media = acumula/notas.length;
console.log(`A média é ${media.toFixed(1)}`);

//Usando a estrutura FOR OF:

let soma = 0;

for(let elemento of notas){
    soma += elemento;
}

let media2 = soma/notas.length;
console.log(`A média é ${media2.toFixed(1)}.`);

//Observe que no loop FOR OF a variável criada para percorrer o vetor assumirá os PRÓPRIOS VALORES dentro do vetor, ao invés de assumir seus índices.

notas.forEach((elemento, index) => {
    console.log(elemento, index);
})
