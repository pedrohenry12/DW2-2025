function tipoTriangulo(x, y, z) {
    if ((x + y) > z && (x + z) > y && (z + y) > x) {
        if (x == y && y == z) { 
            console.log("triângulo equilátero") 
        } 
        else if (x == y || y == z || x == z) { 
            console.log("triângulo isósceles") 
        } 
        else { 
            console.log("triângulo escaleno") 
        }

        let a = x, b = y, c = z
        if (y > a) {
            a = y, b = x, c = z
        }
        if (z > a) {
            a = z, b = x, c = y
        }

        if (a**2 > b**2 + c**2) {
            console.log("triângulo obtusângulo") 
        } 
        else if (a**2 == b**2 + c**2) {
            console.log("triângulo retângulo") 
        } 
        else {
            console.log("triângulo acutângulo") 
        }
    } 
    else {
        console.log("Não forma triângulo") 
    }
}

tipoTriangulo(5, 4, 3)
