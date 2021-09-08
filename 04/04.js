let tengoQueTrabajar = (dia) => {
  if (dia == "sabado" || dia == "domingo") {
    return "no trabajas";
  } else if (
    dia == "lunes" ||
    dia == "martes" ||
    dia == "miercoles" ||
    dia == "jueves" ||
    dia == "viernes"
  ) {
    return "tenes que trabajar";
  } else {
    return "escribiste cualquier cosa";
  }
};

console.log(tengoQueTrabajar("domingo"));
