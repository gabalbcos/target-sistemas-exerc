/*DOM selection*/
let resposta1 = document.querySelector('.resultado-soma');
let resposta2 = document.querySelector('.resultado-fibo');
let resposta5 = document.querySelector('.resultado-string');


/*1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{
K = K + 1;
SOMA = SOMA + K;
}
imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
*/

function somaTudo(){
    let somaValor = document.querySelector('#soma').value;
    let somaTotal = 0;
    for(let i = 0; i < somaValor; i++){
        somaTotal++
    }
    return resposta1.textContent = somaTotal;
}


/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a 
soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
 escreva um programa na linguagem que desejar onde, informado um número,
  ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

/*Checa se o número pertence à sequência de Fibonacci*/

function checaFibonacci(){
    let num = document.querySelector('#numero-fibo').value;
    let check = calculaFibonacci(num);
       if (parseInt(check) === parseInt(num)){
        console.log(check);
        console.log(num);
        return resposta2.textContent = `${num} pertence à sequência Fibonacci`;
    }

    return resposta2.textContent = `${num} não pertence à sequência Fibonacci`;
}

/*Calcula a sequência até passar ou igual o número escolhido*/

function calculaFibonacci(num){
    let numeroAtual = 1;
    let numeroPassado = 1;
    while (numeroAtual < num || numeroAtual === num){
        let seguraValor = numeroAtual;
        numeroAtual = numeroAtual + numeroPassado;
        numeroPassado = seguraValor;
    }
    return numeroAtual;
}


/*3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___
Lógica = +2
Próximo elemento: 9

b) 2, 4, 8, 16, 32, 64, ____
Lógica = 2**índice
Próximo elemento: 128

c) 0, 1, 4, 9, 16, 25, 36, ____
Lógica: número ** número
Pŕoximo elemento: 49

d) 4, 16, 36, 64, ____
Lógica = 4 * N
Nn-1 = N anterior
Nn = N atual

Nt = Nn-1 + ((Nn * 2) - 1)

Próximo elemento: 100

Nt = 16 + ((5 * 2) - 1)
Nt = 16 + 9 = 25
25 * 4 = 100

e) 1, 1, 2, 3, 5, 8, ____
Lógica: Fibonacci
Próximo elemento: 13

f) 2,10, 12, 16, 17, 18, 19, ____
Lógica: Não consegui encontrar lógica matemática
*/

/*4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. 
O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção 
a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a 
cidade de Ribeirão Preto?

IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado.

Resposta: Se os dois se cruzaram, então ocupam a mesma distância na estrada (reta), 
assim a distância deles até Ribeirão Preto é a mesma para ambos.
Em caso de dúvida, posso testar empiricamente após a contratação.


5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function inverteString(){
    let string = document.querySelector('#string-reverso').value;
    let splitString = string.split("");
    let reversedString = [];
    for (let i = string.length - 1; i > -1; i--){
        reversedString.push(splitString[i]);
    }
    return resposta5.textContent =  reversedString.join("");
}

inverteString("123456abc")


