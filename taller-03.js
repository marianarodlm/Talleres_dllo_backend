function desglosarString(str, tipo) {
  const vocales = "aeiouAEIOU"
  if (tipo === "vocales") return [...str].filter(c => vocales.includes(c)).length
  if (tipo === "consonantes") return [...str].filter(c => /[a-zA-Z]/.test(c) && !vocales.includes(c)).length
}

console.log(desglosarString("murcielagos", "vocales"))
console.log(desglosarString("murcielagos", "consonantes"))
console.log(desglosarString("Innovación", "vocales"))
console.log(desglosarString("Innovación", "consonantes"))


function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 4, 2], 6))
console.log(twoSum([1, 5, 3, 7], 8))
console.log(twoSum([10, -2, 4, 6], 4))


function conversionRomana(romano) {
  const valores = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
  let total = 0
  for (let i = 0; i < romano.length; i++) {
    let actual = valores[romano[i]]
    let siguiente = valores[romano[i+1]]
    if (siguiente > actual) total -= actual
    else total += actual
  }
  return total
}

console.log(conversionRomana("III"))
console.log(conversionRomana("XIV"))
console.log(conversionRomana("MMXXIV"))
console.log(conversionRomana("MCMXCVII"))
console.log(conversionRomana("XLII"))


function descomposicion(str) {
  const partes = str.split(",")
  const palabra = partes[0]
  const diccionario = partes.slice(1)
  for (let i = 0; i < diccionario.length; i++) {
    for (let j = 0; j < diccionario.length; j++) {
      if (diccionario[i] + diccionario[j] === palabra) return [diccionario[i], diccionario[j]]
    }
  }
}

console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu"))
console.log(descomposicion("football,foot,ball,foo,tball"))
console.log(descomposicion("teclado,tec,te,clado,do"))
console.log(descomposicion("perro,pe,rr,ro,per,rro"))
