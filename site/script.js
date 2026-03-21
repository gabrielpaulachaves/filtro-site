let filtro = document.querySelectorAll('.filtro')
let cartao = [...document.querySelectorAll('.cartao')]

let cor = filtro[0].value.toLowerCase()
let tipo = filtro[1].value.toLowerCase()

filtro.forEach(filtros => filtros.addEventListener('change', aplicarfiltro))
   
function aplicarfiltro(){

        let cor = filtro[0].value.toLowerCase()
        let tipo = filtro[1].value.toLowerCase()
    let filtrados = cartao.filter(cartoes => {
       
        let nome = cartoes.dataset.name;
        let rescor = true
        let restipo = true
            if(cor === 'todos'){
             rescor = true
            }else{
             rescor = nome.includes(cor)
            }if(tipo === 'todos'){
             restipo = true
            }else{
             restipo = nome.includes(tipo)
            }
           return rescor && restipo
        
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
