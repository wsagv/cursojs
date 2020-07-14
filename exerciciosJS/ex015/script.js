function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menino1.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem1.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem1.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso1.png' )
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'menina1.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem2.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher1.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa1.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}