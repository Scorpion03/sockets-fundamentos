var socket = io();

// on son para escuchar sucesos
socket.on('connect', function(){
    console.log('conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
});

// Escuchar informacion del servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});

//emit para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Eberth',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log(resp);
});