var agoraH = new Date()
var hora = agoraH.getHours()
var agoraM = new Date()
var minutos = agoraM.getMinutes()

console.log(`Agora são exatamente ${hora} Horas`)

if (hora < 12) {
    console.log(`tenha um bom dia!`)
 } else if (hora < 18 ){ 
     console.log(`e ${minutos} minutos. Tenha uma ótima tarde!`)
 } else if (hora < 24) {
     console.log(`e ${minutos} minutos. Tenha uma boa noite!`)
 } else {
     console.log('Atenção, esta não é uma hora válida!')
 }