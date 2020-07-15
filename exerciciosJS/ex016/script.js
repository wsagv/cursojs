function contar() {

let inicio = window.document.getElementById('inicio')
let fim = window.document.getElementById('fim')
let passo = window.document.getElementById('passo')
let resultado = window.document.getElementById('cont')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Nenhum campo abaixo pode ficar em branco! Preenche-os e tente novamente.')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert ('Passo informado é inválido. Será considerado PASSO 1.')
            p = 1 
        }
        if (i < f) {
            // contagem crescente
           for (let c = i; c <= f; c += p){
                resultado.innerHTML += `${c } \u{1F449}`;
            }  
        } else {
            // contagem regressiva
            for (let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c } \u{1F449}`;
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}
