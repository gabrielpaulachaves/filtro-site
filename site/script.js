let filtro = document.querySelectorAll('.filtro')
let cartao = [...document.querySelectorAll('.cartao')]

filtro.forEach(filtros => filtros.addEventListener('change', aplicarfiltro))

function aplicarfiltro(){

    let cor = filtro[0].value.toLowerCase()
    let tipo = filtro[1].value.toLowerCase()

    let filtrados = cartao.filter(cartoes => {
        let nome = cartoes.dataset.name;
        return nome.includes(cor) && nome.includes(tipo)
    });

    tela(filtrados)
}
function tela(lista){
    cartao.forEach(cartoes =>{
        cartoes.style.display = 'none'
    })
    lista.forEach(cartoes =>{
        cartoes.style.display = 'flex'
    })
}
