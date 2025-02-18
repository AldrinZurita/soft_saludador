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

function saludo_sexxx(name, lastName, sexValue) {
    let saludoBase = saludo_hora(name, lastName);

    if (sexValue === "masculino") {
        return saludoBase.replace(name, `señor ${name}`);
    } else if (sexValue === "femenino") {
        return saludoBase.replace(name, `señora ${name}`);
    } else {
        return saludoBase;
    }
}

export default saludo_sexxx;