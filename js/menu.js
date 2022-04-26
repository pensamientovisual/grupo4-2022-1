const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu-navegacion')


hamburger.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburger){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})