let dia = prompt("Que dia es hoy?");

let tengoQueTrabajar = (dia) => {
  if (dia == "sabado" || dia == "domingo") {
    alert("No trabajas");
  } else if (
    dia == "lunes" ||
    dia == "martes" ||
    dia == "miercoles" ||
    dia == "jueves" ||
    dia == "viernes"
  ) {
    alert("Tenes que trabajar");
  } else {
    alert("Escribiste cualquier cosa");
  }
};

// console.log(tengoQueTrabajar("domingo"));
prompt(tengoQueTrabajar(dia));
