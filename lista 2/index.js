function calcularA(x, y){
    let numerador = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 3))
    let denominador = Math.abs(x+y)
    let z = numerador/denominador
    return z
}

console.log(calcularA(2, 3)) //1.1135528725660042


function calcularB(x){
    let numerador = 1 + Math.sin(x)
    let denominador = 1 + Math.cos(x)
    let z = numerador/denominador
    return z
}

console.log(calcularB(2)) //3.270167135062282


function calcularC(x){
    //df = denominadoe fração, nf numerador fração
    let nf1 = 1
    let df1 = x
    
    let nf2 = 1
    let df2 = Math.pow(x, 2)
    
    let nf3 = 1
    let df3 = Math.pow(x, 3)
    
    let nf4 = 1
    let df4 = Math.pow(x, 4)

    z = 1 + (nf1/df1) + (nf2/df2) + (nf3/df3) + (nf4/df4)
    return z
}

console.log(calcularC(2)) //1.9375


function calcularD(x, y){
    let f1 = x/y

    let df2 = x - Math.pow(x/y, 2)
    let nf2 = x + Math.pow(x/y, 2)
    let f2 = nf2/df2

    let z = f1-f2

    return z
}

console.log(calcularD(2, 2)) //-2


function calcularE(x) {
    let z = Math.sqrt(Math.PI + Math.sqrt(Math.pow(Math.E, 3) + Math.sqrt(4 + Math.sqrt(x))))
    return z
}

console.log(calcularE(2)) //2.5017247810236016


