$('.comida').on('click', comida);

function comida(){
    let mensajeError = $('<div class="col-lg-12"><a id="comida" class="btn-solid-reg page-scroll" href="#callMe">LAS TRES COSAS</a><h2>¡Le erraste flaca!</h2><p class="p-heading">Tendrías que haber apretrado el boton que dice las tres...¡Empezamos mal!</p></div>')
    let fcomida = $('#f-comida')
    fcomida.after(mensajeError);
}

$('.color').on('click', color);

function color(){
    let mensajeError = $('<div class="col-lg-12"><a id="color" class="btn-solid-reg page-scroll" href="#callMe">Negro y celeste</a><h2>¡Otra vez le erraste!</h2><p class="p-heading">Tendrías que haber apretrado el boton que dice negro y celeste...¡2 de 3 juegos perdiste! Espero que aunque sea el último lo hagas bien</p></div>')
    let fcolor = $('#f-color')
    fcolor.after(mensajeError);
}

$('#cancion').on('click', cancion);

function cancion(){
    let nombreCancion = $('#lname').val();
    if (nombreCancion == 'cant take my eyes off you'){
        location.href='https://www.youtube.com/watch?v=pb28lMAm5UM'     
    }else if(nombreCancion == 'Cant take my eyes off you'){
        location.href='https://www.youtube.com/watch?v=pb28lMAm5UM'     
    }else{
        $('#mesgerror').remove()
        let mensajeError = $('<div id="mesgerror" class="form-message"><div class="h3 text-center hidden">Esa no es la canción, ¡Sigue intentado!</div></div>')
        $('#contactForm').append(mensajeError)
    }
}