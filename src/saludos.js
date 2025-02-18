function saludo_nom(name, lastName){
    return "Hola " + name + " " + lastName
}

function saludo_hora(name, lastName){
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    let saludo;

    if(horaActual >= 5 && horaActual < 12){
        saludo = `Buenos dias ${name} ${lastName}`;
    }
    else if(horaActual >= 12 && horaActual < 18){
        saludo = `Buenas tardes ${name} ${lastName}`;
    }
    else {
        saludo = `Buena noche ${name} ${lastName}`;
    }

    return saludo
}

export default saludo_hora;