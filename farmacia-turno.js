// Lista de farmacias, usando su nombre, dirección y teléfono
const farmacias = [
    { nombre: 'La Botica', direccion: 'Colon 411', telefono: '03455-499552' },
    { nombre: 'Caffaratti', direccion: 'Leopoldo Herrera & Tucuman', telefono: '03455-422274' },
    { nombre: 'Del Pueblo', direccion: 'Colon 560', telefono: '03455-499084' },
    { nombre: 'Farma Plus', direccion: 'Moreno & 25 de mayo', telefono: '03455-499084' },
    { nombre: 'Bidegorry', direccion: 'Leopoldo Herrera & Frias', telefono: '03455 42-2205' },
    { nombre: 'Augustus', direccion: 'Balcarce 301', telefono: '03455-422216' },
    { nombre: 'Francia', direccion: 'Balcarce 960', telefono: '03455-15533711' },
    { nombre: 'La Entrerriana', direccion: 'Moreno & 9 de Julio', telefono: '03455-423943' },
    { nombre: 'San Martin', direccion: 'San Martin & Michelena', telefono: '03455-424290' },
    { nombre: 'Villaguay', direccion: 'San Martin 425', telefono: '03455-421040' },
    { nombre: 'Del Sol', direccion: 'Leolpoldo Herrera & Caseros', telefono: '03455-423782' },
    { nombre: 'Luis Tres', direccion: '25 de mayo 454', telefono: '03455-422959' },
    { nombre: 'Nueva Urquiza', direccion: 'Urquiza & Moreno', telefono: '03455-424422' }
];

// Obtener la fecha y hora actual
const fechaHoy = new Date();
const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const diaHoy = diasSemana[fechaHoy.getDay()];

// Calcular el índice de la farmacia de turno basado en el día de la semana
// Si es antes de las 8 AM, mostrar la farmacia del día anterior
const farmaciaTurnoIndex = (fechaHoy.getDate() - 1 + (fechaHoy.getHours() >= 8 ? 0 : -1)) % farmacias.length;
const farmaciaTurno = farmacias[farmaciaTurnoIndex];

// Mostrar los detalles de la farmacia de turno
document.getElementById("nombreFarmacia").textContent = farmaciaTurno.nombre;
document.getElementById("telefonoFarmacia").textContent = farmaciaTurno.telefono;
document.getElementById("direccionFarmacia").textContent = farmaciaTurno.direccion;

// Cambiar el fondo y color de la farmacia de turno
document.getElementById("nombreFarmaciaDiv").classList.add('resaltado');
document.getElementById("telefonoFarmaciaDiv").classList.add('resaltado');
document.getElementById("direccionFarmaciaDiv").classList.add('resaltado');

// Mostrar la fecha de actualización
document.getElementById("fechaActual").textContent = `${diaHoy}, ${fechaHoy.getDate()} de ${fechaHoy.toLocaleString('default', { month: 'long' })} de ${fechaHoy.getFullYear()}`;

// Resaltar la farmacia de turno en la lista con animación
const farmaciaItems = document.querySelectorAll('.farmacia-item');
farmaciaItems.forEach((item, index) => {
    if (index === farmaciaTurnoIndex) {
        item.classList.add('resaltado');
        item.style.transition = 'background-color 0.5s ease, transform 0.3s ease'; // Efecto de transición
        item.style.transform = 'scale(1.05)'; // Aumentar el tamaño cuando está seleccionado
    }
});

// Función para actualizar la hora cada segundo con animación
function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    const relojElement = document.getElementById("reloj");

    relojElement.textContent = `Hora actual: ${horas}:${minutos}:${segundos}`;
    // Animación de desvanecimiento del reloj
    relojElement.style.transition = 'opacity 0.5s ease';
    relojElement.style.opacity = '0';
    setTimeout(() => {
        relojElement.style.opacity = '1';
    }, 500);
}

// Actualizar la hora cada segundo
setInterval(actualizarReloj, 1000);

// Animación para los elementos de la lista de farmacias cuando pasas el cursor
farmaciaItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.03)';
        item.style.transition = 'transform 0.3s ease-in-out';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
        item.style.transition = 'transform 0.3s ease-in-out';
    });
});
