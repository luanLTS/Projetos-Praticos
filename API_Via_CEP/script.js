let inputBairro = document.querySelector('#bairro')
let inputLogradouro = document.querySelector('#logradouro')
let inputLocalidade = document.querySelector('#localidade')
let inputUf = document.querySelector('#uf')
let inputCep = document.querySelector('#cep')
let error = document.querySelector('.error')

const fetchCep  = async () => {
    let cep = inputCep.value
    const URL = `https://viacep.com.br/ws/${ cep }/json/`
    const response = await fetch(URL).then( response => response.json() )
    const { bairro, localidade, logradouro, uf } = response
    if ( bairro != undefined ) {
        inputBairro.value = bairro
        inputLocalidade.value = localidade 
        inputLogradouro.value = logradouro 
        inputUf.value = uf
        error.style.display = 'none'
    } else {
        error.style.display = 'inline'
    }
}

const clearCep = () => {
    inputBairro.value = ''
    inputLocalidade.value = ''
    inputLogradouro.value = ''
    inputUf.value = ''
    inputCep.value = ''
    error.style.display = 'none'
}