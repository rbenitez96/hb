// Define la fecha del cumpleaños (YYYY-MM-DD)
const birthday = '2023-05-31';

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
    if (days <= 10) {
        document.getElementById('pista1').disabled = false;
    }
    if (days <= 5) {
        document.getElementById('pista2').disabled = false;
    }
    if (days <= 1) {
        document.getElementById('pista3').disabled = false;
    }
}

// Actualiza el cronómetro cada segundo
setInterval(countdown, 1000);
