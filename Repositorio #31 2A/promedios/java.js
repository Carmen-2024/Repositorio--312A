function promediar() {
    const nota1 = +document.querySelector('#nota1').value;
    const nota2 = +document.querySelector('#nota2').value;
    const nota3 = +document.querySelector('#nota3').value;
    const salida = document.querySelector('#salida');
    const promedio = (nota1*0.35) + (nota2 * 0.35) + (nota3 * 0.3);


//usamos if/ else para poner las condiciones 
    if(promedio >=9 && promedio <=10){
        salida.textContent = promedio.toFixed(2) + '- Excelente desempeño, ¡Felicitaciones!';
    } 
    if(promedio >=7 && promedio <=8){ //&& --- ambas condiciones se tienen que cumplir.
        salida.textContent = promedio.toFixed(2) + '- Muy buen desempeño, tiene la capacidad de mejorar';

    }
    if(promedio >=6 && promedio <=7){
        salida.textContent = promedio.toFixed(2) + '- Tiene la capacidad de mejorar ';
    }
    
    if(promedio >=5 && promedio <6){
        salida.textContent = promedio.toFixed(2) + '- Está reprobado, le invito a esforzarse más ';
    }

    }

       
    



    
    
    



