var numConvertido = 0
const VALORES = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
}

function converteRomano() {
    numConvertido = 0
    let numRomano = document.querySelector('#valorRomano').value.toUpperCase()
    for ( let i = 0; i <= numRomano.length; i++ ) {
        switch (numRomano[i]) {
            case 'I':
                if ( numRomano[i+1] == 'V') {
                    numConvertido += VALORES.V - VALORES.I
                    i++
                    break;
                } else if ( numRomano[i+1] == 'X' ) {
                    numConvertido += VALORES.X - VALORES.I
                    i++
                    break;
                } else {
                    numConvertido += VALORES.I
                    break;
                }
            case 'V':
                numConvertido += VALORES.V
                break;
            case 'X':
                if ( numRomano[i+1] == 'L') {
                    numConvertido += VALORES.L - VALORES.X
                    i++
                    break;
                } else if ( numRomano[i+1] == 'C' ) {
                    numConvertido += VALORES.C - VALORES.X
                    i++
                    break;
                } else {
                    numConvertido += VALORES.X
                    break;    
                }
            case 'L':
                numConvertido += VALORES.L
                break;
            case 'C':
                if ( numRomano[i+1] == 'D' ) {
                    numConvertido += VALORES.D - VALORES.C
                    i++
                    break;
                } else if ( numRomano[i+1] == 'M' ) {
                    numConvertido += VALORES.M - VALORES.C
                    i++
                    break;
                } else {
                    numConvertido += VALORES.C
                    break;
                }
            case 'D':
                numConvertido += VALORES.D
                break;
            case 'M':
                numConvertido += VALORES.M
                break;
        }
    }
    document.querySelector('#resultadoInteiro').innerHTML = numConvertido
}