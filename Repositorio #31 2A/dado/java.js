function aleatorio (){
    let numMax = +document.getElementById('numMax').value;
    let numMin = +document.getElementById('numMin').value;

    let operacion = (Math.round (Math.random() * (numMax - numMin) +numMin)); //Math.round --- redondea el número al entero más cercano
    let resultado = document.getElementById('resultado');
    resultado.textContent = operacion; 
    
    //console.log(operacion);

}
    
