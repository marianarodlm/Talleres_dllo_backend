function convertidor_temp({ temp_c }) {
    const fahrenheit = temp_c * (9/5) + 32;
    return { fahrenheit }; 
}

function resolvedor({ a, b, c, pos_neg }) {
  const discriminante = Math.sqrt(b*b - 4*a*c);

  if (pos_neg === 1) {
    const x1 = (-b + discriminante) / (2*a);
    return { x1 };
  } else {
    const x2 = (-b - discriminante) / (2*a);
    return { x2 };
  }
}

function mejor_paridad({ num }) {
  if (typeof num !== "number") throw new Error("Debe ser un entero");
  const resultado = (num % 2 === 0) ? "Es par" : "Es impar";
  return { resultado };
}


function peor_paridad() {
  let resultados = "";

  switch (1) {
    case 1:
      if (1 % 2 === 0) {
        resultados += "El número 1 es par. ";
      } else {
        resultados += "El número 1 es impar. ";
      }
    case 2:
      if (2 % 2 === 0) {
        resultados += "El número 2 es par. ";
      } else {
        resultados += "El número 2 es impar. ";
      }
    case 3:
      if (3 % 2 === 0) {
        resultados += "El número 3 es par. ";
      } else {
        resultados += "El número 3 es impar. ";
      }
    case 4:
      if (4 % 2 === 0) {
        resultados += "El número 4 es par. ";
      } else {
        resultados += "El número 4 es impar. ";
      }
    case 5:
      if (5 % 2 === 0) {
        resultados += "El número 5 es par. ";
      } else {
        resultados += "El número 5 es impar. ";
      }
    case 6:
      if (6 % 2 === 0) {
        resultados += "El número 6 es par. ";
      } else {
        resultados += "El número 6 es impar. ";
      }
    case 7:
      if (7 % 2 === 0) {
        resultados += "El número 7 es par. ";
      } else {
        resultados += "El número 7 es impar. ";
      }
    case 8:
      if (8 % 2 === 0) {
        resultados += "El número 8 es par. ";
      } else {
        resultados += "El número 8 es impar. ";
      }
    case 9:
      if (9 % 2 === 0) {
        resultados += "El número 9 es par. ";
      } else {
        resultados += "El número 9 es impar. ";
      }
    case 10:
      if (10 % 2 === 0) {
        resultados += "El número 10 es par. ";
      } else {
        resultados += "El número 10 es impar. ";
      }
  }

  return { resultados };
}

module.exports = {
  convertidor_temp,
  resolvedor,
  mejor_paridad,
  peor_paridad
};
