const form = document.querySelector('.formulario');

form.addEventListener('submit', function (e) {

    e.preventDefault();
    console.log('evento previnido');

const inputPeso = e.target.querySelector('#peso');
const inputAltura = e.target.querySelector('#altura');

const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);





if(!peso) {

    exibeResultado('Peso inválido', false);
return;

}

if(!altura) {

    exibeResultado('Altura inválida', false);
return;

}

const imc = calculaImc(peso,altura);

const  result = getImc(imc);

exibeResultado(`O seu IMC é: ${imc}, ${result}.`, true);

console.log(imc, result);

});


function getImc (imc) {

const niveis= ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade de primeiro grau'
, 'Obesidade de segundo grau', 'Obesidade de terceiro grau'];



if(imc >=39.9){

    return niveis[5];

} else if (imc >= 34.9){

return niveis[4];

} else if(imc >= 29.9){

return niveis[3];
    
} else if(imc >= 24.9){

return niveis[2]

} else if(imc >= 18.9){

return niveis[1];

} else if(imc <= 18.5){

    return niveis[0];
}



}





function calculaImc(peso, altura) {

const imc = peso / altura ** 2;

return imc.toFixed(2);

}


function criaP(){

    const p = document.createElement('p');
 