function quadrante(x, y){
    if(x>0 && y>0){
        return "primeiro quadrante"
    }
    else if(x<0 && y>0){
        return "segundo quadrante"
    }
    else if(x<00 && y<0){
        return "terceiro quadrante"
    }
    else if(x>0 && y<0){
        return "quarto quadrante"
    }
    else if(x == 0){
        return "eixo x"
    }
    else if(y == 0){
        return "eixo y"
    }
    else{
        return "origem"
    }
}

console.log(quadrante(1, 1))