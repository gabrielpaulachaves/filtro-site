const filtros = document.querySelectorAll(".filtro")
const personagens = document.querySelectorAll(".personagem")

function cor(personagem){
if(personagem.dataset.filter.includes("cinco")){
    personagem.classList.add("cinco-estrelas")
}else{
    personagem.classList.add("quatro-estrelas")
}
}
personagens.forEach(cor)


const complementos = document.querySelectorAll(".complemento")

personagens.forEach(personagem => {
    const img = personagem.querySelector(".imagem img")
    const alt = img.getAttribute("alt")
    const nome = alt[0].toUpperCase()
    const nomerest = alt.slice(1)
    const nomecompleto = nome + nomerest
    const p = document.createElement("p")
    p.classList.add("texto")
    p.textContent = nomecompleto
    personagem.querySelector(".complemento").append(p)
})

personagens.forEach(personagem => {
    const elemento = document.createElement("img")
    elemento.style.width = "32px"
    elemento.style.height = "32px"
    if(personagem.dataset.filter.includes("pyro")){
        elemento.src = "imagens-filtros/pyro.png"
    }else if(personagem.dataset.filter.includes("cryo")){
        elemento.src = "imagens-filtros/cryo.png"
    }else if(personagem.dataset.filter.includes("electro")){
        elemento.src = "imagens-filtros/electro.png"
    }else if(personagem.dataset.filter.includes("anemo")){
        elemento.src = "imagens-filtros/anemo.png"
    }else if(personagem.dataset.filter.includes("hydro")){
        elemento.src = "imagens-filtros/hydro.png"
    }else if(personagem.dataset.filter.includes("geo")){
        elemento.src = "imagens-filtros/geo.png"
    }else{
        elemento.src = "imagens-filtros/dendro.png"
    }
    personagem.querySelector(".complemento").append(elemento)
})

personagens.forEach(personagem => {
    const arma = document.createElement("img")
    arma.style.width = "32px"
    arma.style.height = "32px"
    if(personagem.dataset.filter.includes("espada")){
        arma.src = "imagens-filtros/espada.png"
    }else if(personagem.dataset.filter.includes("arco")){
        arma.src = "imagens-filtros/arco.png"
    }else if(personagem.dataset.filter.includes("claymore")){
        arma.src = "imagens-filtros/claymore.png"
    }else if(personagem.dataset.filter.includes("catalisador")){
        arma.src = "imagens-filtros/catalisador.png"
    }else{
        arma.src = "imagens-filtros/Lanca.png"
    }
    personagem.querySelector(".complemento").append(arma)
})

personagens.forEach(personagem => {
    const regiao = document.createElement("img")
    regiao.style.width = "32px"
    regiao.style.height = "32px"
    if(personagem.dataset.filter.includes("mondstadt")){
        regiao.src = "imagens-filtros/mondstadt.png"
    }else if(personagem.dataset.filter.includes("liyue")){
        regiao.src = "imagens-filtros/liyue.png"
    }else if(personagem.dataset.filter.includes("inazuma")){
        regiao.src = "imagens-filtros/inazuma.png"
    }else if(personagem.dataset.filter.includes("sumeru")){
        regiao.src = "imagens-filtros/sumeru.png"
    }else if(personagem.dataset.filter.includes("fontaine")){
        regiao.src = "imagens-filtros/fontaine.png"
    }else if(personagem.dataset.filter.includes("natlan")){
        regiao.src = "imagens-filtros/natlan.png"
    }else if(personagem.dataset.filter.includes("nodkrai")){
        regiao.src = "imagens-filtros/nodkrai.png"
    }else{
        regiao.src = "imagens-filtros/snezhnaya.png"
    }
    personagem.querySelector(".complemento").append(regiao)
})


filtros.forEach(filtro => filtro.addEventListener("change", (f)=>{
    const filtrovalor = [filtro.value]
        f.target.style.color = f.target.selectedOptions[0].style.color
        personagens.forEach(personagem => {
            const valores = personagem.dataset.filter 
            if(f.target.value == "todos"){
                personagem.style.display = "block"
            }else{
                if(valores.includes(filtrovalor)){
              personagem.style.display = "block"
            }else
               personagem.style.display = "none" 
            }
        })
}))
 