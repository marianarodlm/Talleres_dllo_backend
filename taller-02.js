/* Punto1: Desarrolle una funcion llamada findMax que reciba una lista de números por parámetro y retorne el mayor valor*/

function findMax(numbers) {
   mayor = numbers[0]
   for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > mayor) {
         mayor = numbers[i]
      }
   }
    return mayor
}

lista = [3, 5, 7, 2, 8, -1]
console.log(findMax(lista))

/*Punto2: Desarrolle una funcion llamada includes que reciba una lista de números y unnumero por parámetro y 
retorne un booleano representando si el numero se encuentra en la lista.*/

function includes(numbers, num) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === num) {
            return true
        }
    }
    return false
    }

lista2 = [3, 5, 7, 2, 8, -1]
console.log(includes(lista2, 5))

/*Punto3: Desarrolle una funcion llamada sum que reciba una lista de números y retorne la suma de los elementos de la lista.*/

function sum(numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    return total
}

lista3 = [3, 5, 7, 2, 8, -1]
console.log(sum(lista3))

/*Punto4: Desarrolle una funcion llamada missingNumbers que reciba una lista de números y retorne una lista de los números
faltantes entre el menor y mayor de la lista.*/

function missingNumbers(nums) {
    if (nums.length === 0) return [];
  
    let min = nums[0];
    let max = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < min) {
        min = nums[i];
      }
      if (nums[i] > max) {
        max = nums[i];
      }
    }
  
    const missing = [];
  
    for (let i = min; i <= max; i++) {
      let found = false;
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] === i) {
          found = true;
          break;
        }
      }
      if (!found) {
        missing.push(i);
      }
    }
  
    return missing;
  }
  
  console.log(missingNumbers([3, 7, 1, 5]));
  
