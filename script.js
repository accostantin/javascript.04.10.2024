//soma
const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click" , () =>{
let numero1 = document.getElementById("numero1").value;
let numero2 = document.getElementById("numero2").value;
let soma = parseInt(numero1) + parseInt(numero2);
document.getElementById("resultado").innerHTML = "RESULTADO:" + soma
});

//multiplicacao
const btnMultiplicar = document.getElementById("multiplicar");
btnMultiplicar.addEventListener("click", () => {
let numero1 = document.getElementById("numero1").value;
let numero2 = document.getElementById("numero2").value;
let multiplicacao = parseInt(numero1) * parseInt(numero2);
document.getElementById("resultado").innerHTML = "RESULTADO:" + multiplicacao
});

//divisao
const btnDivisao = document.getElementById("divisao");
btnDivisao.addEventListener("click", () => {
let numero1 = document.getElementById("numero1").value;
let numero2 = document.getElementById("numero2").value;
let divisao= parseInt(numero1) / parseInt(numero2);
document.getElementById("resultado").innerHTML = "RESULTADO:" + divisao
});

//subtracao
const btnSubtracao = document.getElementById("subtracao");
btnSubtracao.addEventListener("click", () => {
let numero1 = document.getElementById("numero1").value;
let numero2 = document.getElementById("numero2").value;
let subtracao= parseInt(numero1) - parseInt(numero2);
document.getElementById("resultado").innerHTML = "RESULTADO:" + subtracao
});
