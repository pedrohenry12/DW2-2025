function salario(s){
    if(s <= 400){
        console.log("novo salario: ", s + (s*0.15))
        console.log("reajuste ganho: ", s*0.15)
        console.log("em percentual 15%")
    } 
    else if(s > 400 && s <= 800){
        console.log("novo salario: ", s + (s*0.12))
        console.log("reajuste ganho: ", s*0.12)
        console.log("em percentual 12%")
    } 
    else if(s > 800 && s <= 1200){
        console.log("novo salario: ", s + (s*0.10))
        console.log("reajuste ganho: ", s*0.10)
        console.log("em percentual 10%")
    } 
    else if(s > 1200 && s <= 2000){
        console.log("novo salario: ", s + (s*0.07))
        console.log("reajuste ganho: ", s*0.07)
        console.log("em percentual 7%")
    } 
    else if(s > 2000){
        console.log("novo salario: ", s + (s*0.04))
        console.log("reajuste ganho: ", s*0.04)
        console.log("em percentual 4%")
    }
    else { 
        return "digite um salário valido"
    } 
}

console.log(salario(3000))