const fpreto = document.getElementById('fpreto')
const fbranco = document.getElementById('fbranco')
const fcorrida = document.getElementById('fcorrida') 
const fcasual = document.getElementById('fcasual')

const preto = document.getElementsByClassName('preto')
const branco = document.getElementsByClassName('branco')
const corrida = document.getElementsByClassName('corrida')
const casual = document.getElementsByClassName('casual')

let tenis = [
    {nome:'corrida branco' ,cor:branco ,tipo:corrida},
    {nome:'corrida preto' ,cor:preto ,tipo:corrida},
    {nome:'casual branco' ,cor:branco ,tipo:casual},
    {nome:'casual preto' ,cor:preto ,tipo:casual}
]

fpreto.addEventListener('click', ()=>{
    let ftenis = tenis.filter((p)=>{
        return p.cor == preto
    } )
})




