"use strict";

const edad = 50;
const nombre = "samuel";

if (edad > 0 && edad < 12) {
  console.log("a " + nombre + " le corresponde el descuento infantil");
} else if (edad >= 12 && edad < 30) {
  console.log(`a ${nombre} le corresponde el descuento juvenil`);
} else if (edad >= 60) {
  console.log(`a ${nombre} le corresponde el descuento de jubilados`);
} else {
  console.log("a " + nombre + " no le corresponde ningun descuento.");
}
