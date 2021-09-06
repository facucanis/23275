let pregunta = prompt("Sos de Latinoamérica?").toUpperCase();
if (pregunta != "NO") {
  let respuesta = prompt("De que País").toUpperCase();
  switch (respuesta) {
    case "BRASIL":
      alert("Decime que se siente!!!");
      break;
    case respuesta:
      alert("Aguante " + respuesta + " :)");
      break;
    default:
      break;
  }
} else {
  alert("Disculpa, es solo para latinos!");
}
