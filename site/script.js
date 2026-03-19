let conteiner = document.querySelectorAll('.cartoes')
let filtro = document.querySelectorAll('.filtro')
let cartao = [...document.querySelectorAll('.cartao')]

function aplicarfiltro(){

    let cor = filtro[0].value
    let tipo = filtro[1].value

    const listafiltrada = cartao.filter(f => {
        const info = cartao.getAttibute('data-name').ToLowerCase()

        const corsel = cor === '' || info.includes(cor)
        const tiposel = tipo === '' || info.includes(tipo)

        return corsel && tiposel
    })
    conteiner.innerHTML = ""
    listafiltrada.forEach(cadabloco => {
        conteiner.appendChild(cartao)
    })
}

filtro.forEach(c => c.addEventListener('change', aplicarfiltro))






