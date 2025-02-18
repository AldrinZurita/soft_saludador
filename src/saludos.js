const translations = {
    es: {
      greetings: {
        morning: "Buenos días",
        afternoon: "Buenas tardes",
        night: "Buena noche"
      },
      titles: {
        masculine: { senior: "señor", junior: "señorito" },
        feminine: { senior: "señora", junior: "señorita" }
      }
    },
    en: {
      greetings: {
        morning: "Good morning",
        afternoon: "Good afternoon",
        night: "Good evening"
      },
      titles: {
        masculine: { senior: "Mr.", junior: "Mr." },
        feminine: { senior: "Mrs.", junior: "Ms." }
      }
    }
  };


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
        return saludoBase.replace(name, `señorito ${name}`);
    } else if (sexValue === "femenino") {
        return saludoBase.replace(name, `señorita ${name}`);
    } else {
        return saludoBase;
    }
}

function saludo_sr(name, lastName, sexValue, ageValue) {
    const saludoBase = saludo_hora(name, lastName);
    const titulo = ageValue > 30 ? (sexValue === "masculino" ? "señor" : "señora") : (sexValue === "masculino" ? "señorito" : "señorita");
    return saludoBase.replace(name, `${titulo} ${name}`);
}

function greetings(name, lastName, sexValue, ageValue, lang){
    const baseGreeting = saludo_hora(name, lastName, lang);
    const category = ageValue > 30 ? 'senior' : 'junior';
    const genderKey = sexValue.toLowerCase() === 'masculino'
      ? 'masculine'
      : sexValue.toLowerCase() === 'femenino'
        ? 'feminine'
        : null;
  
    if (genderKey) {
      const title = translations[lang].titles[genderKey][category];
      return baseGreeting.replace(name, `${title} ${name}`);
    }
    return baseGreeting;
}


export default greetings;