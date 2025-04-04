function polindromo(s) {
    if (s.split('').reverse().join('') == s) {
        return true
    } else {
        return false
    }
}

console.log(polindromo("pedro"))

// Com retorno explícito
const quadrdo = (n) => {
    return n * n;
};

// Com retorno implícito
const quadrado = n => n * n