let nombres = ["Facu", "Juan", "Carlos", "Agustin", "Federico", "Pedro"];
let nombresOrdenados = nombres.sort((a, b) => {
  if (a == b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
  return 1;
});

console.log(nombresOrdenados);
