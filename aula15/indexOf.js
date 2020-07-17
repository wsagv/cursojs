let num = [8,4,2,1,9]
num.push(3)
num.sort()
console.log(num)

let pos = num.indexOf(8)

if (pos == -1){
    console.log('Valor não encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}!`)
}