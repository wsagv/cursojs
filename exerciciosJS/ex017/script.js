function tabuada() {
    let num = window.document.getElementById('numero')
    let tab = window.document.getElementById('tabela')

    if (num.value.length == 0){
        window.alert('[ERRO] Digite um número para mostrarmos a tabuada!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        let op = window.document.getElementsByName('tabuada')

        for (var c = 1; c <= 10; c++) {
            let item = window.document.createElement('option')

            if (op[0].checked) {
                item.text = `${n} + ${c} = ${n + c}`;
                tab.appendChild(item)
            }    
            else if (op[1].checked) {
                item.text = `${n} - ${c} = ${n - c}`;
                tab.appendChild(item)
            }  
            else if (op[2].checked) {
                item.text = `${n} x ${c} = ${n * c}`;
                tab.appendChild(item)    
            }
            else if (op[3].checked) {
                item.text = `${n} / ${c} = ${n / c}`;
                tab.appendChild(item)    
            }
        }

    }
       
}

function multiplicar() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var res = document.getElementById('result')
    var r = num1 * num2
    res.innerHTML = `${num1} * ${num2} = ${r}` 

}

function dividir() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var res = document.getElementById('result')
    var r = num1 / num2
    res.innerHTML = `${num1} / ${num2} = ${r}` 

}