function cuenta(){
const numero = +document.querySelector('#num').value;    
setTimeout(finalizado, (1000* numero)); //setTimeout sirve para ejecutar una función después de x segundos.
}

function finalizado(){
    let mostrar = document.querySelector('#salida');
    let alarma = document.querySelector('#alarma');
    alarma.play();
    mostrar.textContent = 'ON';
    mostrar.style = 'color; red; font-size: 40px';

    //alert('Tiempo cumplido'); // para cuando acabe el tiempo saque un mensaje.
}

function reiniciar(){
    location.reload();
}


//si necesito refrescar la página se usa location.reload