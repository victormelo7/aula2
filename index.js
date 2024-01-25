let nome = prompt("Digite o seu nome:");
console.log("Olá, " + nome + "!");

let numero1 = parseFloat(prompt("Digite um número:"));

if (isNaN(numero1)) {
  console.error("Por favor, insira um valor numérico.");
} else {
  let outroNumero = 10;
  let resultadoSoma = numero1 + outroNumero;
  console.log("A soma é: " + resultadoSoma);
}

let texto1 = prompt("Digite um texto:");
let texto2 = prompt("Digite outro texto:");

let resultadoConcatenacao = texto1 + " " + texto2;
alert("O resultado da concatenação é: " + resultadoConcatenacao);
