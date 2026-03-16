let fcor = document.getElementById('filtrocor')
let ftipo = document.getElementById('filtrotipo')
let tenis = document.querySelectorAll('.tenis')

let tenisarray = Array.from(tenis)

fcor.addEventListener('change', ()=>{
let teniscor = tenisarray.filter((item) => {
    return item.classList.contains(fcor.value)
}) 
tenisarray.forEach((item) =>{
    item.style.display = 'none'
})
teniscor.forEach((item) =>{
    item.style.display = 'block'
})
})

