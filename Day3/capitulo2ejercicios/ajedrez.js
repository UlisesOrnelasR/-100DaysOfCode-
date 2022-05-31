function ajedrez() {
    let textPar = "";
    let textImpar = "";
    while (textPar.length < 8) {
        if (textPar.length % 2 == 0) {
            textPar += '#'
            textImpar += ' '
        }
        if (textPar.length % 2 == 1) {
            textPar += ' '
            textImpar += '#'
        }
    }
    for (let i = 0; i < 8; i++){
        if(i % 2 === 0) console.log(textPar + "\n");
        if(i % 2 === 1) console.log(textImpar + "\n");
    }
}

ajedrez();
