function desglosarString({ str, tipo }) {
  if (typeof str !== "string") throw new Error("str debe ser un texto");
  if (tipo !== "vocales" && tipo !== "consonantes")
    throw new Error("tipo debe ser 'vocales' o 'consonantes'");

  const vocales = "aeiouAEIOU";

  if (tipo === "vocales") {
    const cantidad = [...str].filter(c => vocales.includes(c)).length;
    return { cantidad };
  }

  if (tipo === "consonantes") {
    const cantidad = [...str].filter(
      c => /[a-zA-Z]/.test(c) && !vocales.includes(c)
    ).length;
    return { cantidad };
  }
}


function twoSum({ nums, target }) {
  if (!Array.isArray(nums)) throw new Error("nums debe ser un arreglo");
  if (typeof target !== "number") throw new Error("target debe ser un número");

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return { indices: [i, j] };
      }
    }
  }

  return { indices: null }; // si no se encuentra pareja
}


function conversionRomana({ romano }) {
  if (typeof romano !== "string" || !romano) throw new Error("romano debe ser un string válido");

  const valores = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;

  for (let i = 0; i < romano.length; i++) {
    const actual = valores[romano[i]];
    const siguiente = valores[romano[i + 1]];

    if (!actual) throw new Error(`Símbolo romano inválido: ${romano[i]}`);

    if (siguiente > actual) total -= actual;
    else total += actual;
  }

  return { total };
}

function descomposicion({ str }) {
  if (typeof str !== "string" || !str.includes(","))
    throw new Error("str debe ser un texto separado por comas");

  const partes = str.split(",");
  const palabra = partes[0];
  const diccionario = partes.slice(1);

  for (let i = 0; i < diccionario.length; i++) {
    for (let j = 0; j < diccionario.length; j++) {
      if (diccionario[i] + diccionario[j] === palabra) {
        return { resultado: [diccionario[i], diccionario[j]] };
      }
    }
  }

  return { resultado: null }; // si no hay combinación válida
}




module.exports = {
  desglosarString,
  twoSum,
  conversionRomana,
  descomposicion
};
