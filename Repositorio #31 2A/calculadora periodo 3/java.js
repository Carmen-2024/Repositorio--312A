function mostrarResultado(resultado){
    document.getElementById('display').value = resultado;
}

function suma(){
    let numero1 = +document.getElementById('num1').value;//el signo + denota un número
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(numero1 + numero2);
}
function resta(){
    let numero1 = +document.getElementById('num1').value;//el signo + denota un número
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(numero1 - numero2);
}
function multiplicación(){
    let numero1 = +document.getElementById('num1').value;//el signo + denota un número
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(numero1 * numero2);
}
function división(){
    let numero1 = +document.getElementById('num1').value;//el signo + denota un número
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado(numero1 / numero2);
}
function potencia(){
    let numero1 = +document.getElementById('num1').value;//el signo + denota un número
    let numero2 = +document.getElementById('num2').value;
    
     mostrarResultado( Math.pow(numero1, numero2));
}
function raiz(){
    let numero1 = +document.getElementById('num1').value;//el signo + denota un número
    let numero2 = +document.getElementById('num2').value;
    mostrarResultado( Math.sqrt(numero2));   
}

function ce(){
    let display = document.getElementById('display').value = " ";
    let num1 = document.getElementById('num1').value = " ";
    let num2 = document.getElementById('num2').value = " ";
}

