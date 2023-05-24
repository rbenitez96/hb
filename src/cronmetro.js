// Define la fecha del cumpleaños (YYYY-MM-DD)
const birthday = '2023-05-31';
const video = document.querySelector('#cuadro1 video');
const video2 = document.querySelector('#cuadro3 video');

// Calcula el tiempo restante para el cumpleaños
function countdown() {
    const now = new Date().getTime();
    const distance = new Date(birthday).getTime() - now;

    // Calcula los días, horas, minutos y segundos restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualiza el elemento HTML del cronómetro
    document.getElementById('countdown').innerHTML = days + ' días, ' + hours + ' horas, ' + minutes + ' minutos, y ' + seconds + ' segundos';

    // Actualiza el estado de los botones de pista
    if (days <= 15) {
        document.getElementById('pista1').disabled = false;
    }
    if (days <= 10) {
        document.getElementById('pista2').disabled = false;
    }
    if (days <= 1) {
        document.getElementById('pista3').disabled = false;
    }
}

function ocultarCuadroPistas(){
    document.getElementById('cuadro-pistas').style.display = 'none';
}

function mostrarCuadroPistas(){
    document.getElementById('cuadro-pistas').style.display = 'flex';
}


function ocultarVideo() {
    // Ocultar el contenedor del video
    document.getElementById('cuadro1').style.display = 'none';
    video.stop;
}

function ocultarcuadro1(){
    ocultarVideo();
    ocultarCuadroPistas();
}

function ocultarLibro(){
    document.getElementById('cuadro2').style.display = 'none';
}

// Función para desbloquear el cuadro de video
function desbloquearVideo() {
    ocultarLibro();
    ocultarVideo3();
    mostrarCuadroPistas();
    document.getElementById('cuadro1').style.display = 'block';
    document.getElementById('pista1').disabled = true;
    video.play();
    video.addEventListener('ended', ocultarcuadro1);
}

function desbloquearLibro() {
    ocultarVideo();
    ocultarVideo3();
    mostrarCuadroPistas();
    document.getElementById('cuadro2').style.display = 'block';
    document.getElementById('pista2').disabled = true;
}

function ocultarVideo3() {
    // Ocultar el contenedor del video
    document.getElementById('cuadro3').style.display = 'none';
    video2.stop;
}

function ocultarcuadro3(){
    ocultarVideo3();
    ocultarCuadroPistas();
}

function desbloquearVideoPista3() {
    ocultarVideo();
    ocultarLibro();
    mostrarCuadroPistas();
    document.getElementById('cuadro3').style.display = 'block';
    document.getElementById('pista3').disabled = true;
    video2.play();
    video2.addEventListener('ended', ocultarcuadro3);
}


document.getElementById('pista1').addEventListener('click', desbloquearVideo);
document.getElementById('pista2').addEventListener('click', desbloquearLibro);
document.getElementById('pista3').addEventListener('click', desbloquearVideoPista3);

// Actualiza el cronómetro cada segundo
setInterval(countdown, 1000);
