const filtros = document.querySelectorAll(".filtro")
const personagens = document.querySelectorAll(".personagem")
const imagens = document.querySelectorAll(".imagem img")


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
 