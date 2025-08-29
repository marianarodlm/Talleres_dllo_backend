function convertidor_temp(temp_c) {
    return temp_c * (9/5) + 32
}

console.log(convertidor_temp(30))


function resolvedor(a, b, c, pos_neg ){
    const discriminante = Math.sqrt(b*b - 4*a*c);

    if (pos_neg === 1){
        const x1 = (-b + discriminante) / (2*a);
    return x1
    } else{
        const x2 = (-b - discriminante) / (2*a);
    return x2
    }
    
}

const a = 1
const b = 5
const c = 4
const pos_neg = 2

console.log(resolvedor(a, b, c, pos_neg))

function mejor_paridad(num){
    if (num % 2 == 0){
        return console.log("Es par")
    }else{
        return console.log("Es impar")
    }
}


function peor_paridad(){
    let allResults = ""
    for (let i = 1; i <= 10; i++) {
        let resultado = "";
        resultado += "El número ";
        resultado += i;
        resultado += " es ";
        
        if (i % 2 == 0) {
            resultado += "par";
        } else {
            resultado += "impar";
        }
          allResults += resultado
    }
    return allResults
}

console.log(peor_paridad())