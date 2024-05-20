(function() {
    // Establecer la URL de destino
    const zoomUrl = "https://us06web.zoom.us/j/87813278236?pwd=aoMVUXAtPNjbvpXc9fC5LvX6VDufeb.1";

    // Obtener la hora actual
    const now = new Date();
    
    // Configurar la hora de redirección (6:50 PM) en la zona horaria de Argentina
    const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 50);

    // Calcular la diferencia de tiempo en milisegundos
    const timeDifference = targetTime - now;

    // Si la hora de redirección ya pasó para hoy, ajustar para el día siguiente
    if (timeDifference < 0) {
        targetTime.setDate(targetTime.getDate() + 1);
    }

    // Calcular el nuevo tiempo de diferencia
    const updatedTimeDifference = targetTime - now;

    // Redirigir cuando se alcance el tiempo especificado
    setTimeout(() => {
        window.location.href = zoomUrl;
    }, updatedTimeDifference);

    console.log(`Serás redirigido a las 6:50pm (Argentina). Tiempo restante: ${updatedTimeDifference} ms`);
})();
