// Función para verificar si la fecha ingresada es correcta
function verificarFecha() {
    try{
        let aniversario = new Date('10/08/2020');
        let fecha = '';
        for (let i = 1; i <= 8; i++) {
            console.log(document.getElementById(`cuadro${i}`).value)
            fecha += document.getElementById(`cuadro${i}`).value;
        }
        let fechaIngresada = new Date(`${fecha.slice(0,2)}/${fecha.slice(2,4)}/${fecha.slice(4,8)}`);
        if (fechaIngresada.getTime() === aniversario.getTime()) {
            return true;
        } else {
            return false;
        }
    }
    catch (e) {
        return false;
    }
}

// Función para desbloquear el regalo
function desbloquearRegalo(e) {
    e.preventDefault();
    if (verificarFecha()) {
        alert('¡Felicidades, has desbloqueado el regalo de cumpleaños!');
        window.location.href = 'page_hb.html';
    } else {
        let intentosRestantes = document.getElementById('intentos').innerText;
        if (intentosRestantes > 1) {
            document.getElementById('intentos').innerText = intentosRestantes - 1;
            alert(`Fecha incorrecta. Te quedan ${intentosRestantes-1} intentos.`);
        } else {
            alert('¡Lo siento, has agotado tus intentos! No habrá regalo de cumpleaños.');
            window.location.href = 'main.html';
        }
    }
}


document.getElementById('intentos').innerText = 3;
document.getElementById('unlock-form').addEventListener('submit', desbloquearRegalo);
