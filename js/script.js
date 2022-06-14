const hoverMenuFirst = document.querySelectorAll('[hover-menu-first]')
const hoverMenuSecond = document.querySelectorAll('[hover-menu-second]')
const primeiroHover = document.getElementById('primeiro-hover')
const segundoHover = document.getElementById('segundo-hover')
hoverMenuFirst.forEach(Element =>{
    Element.addEventListener('mouseover' ,firstMouseUp)
    Element.addEventListener('mouseout', firstMouseDown)
})

hoverMenuSecond.forEach(Element =>{
  Element.addEventListener('mouseover', secondMouseUp)
  Element.addEventListener('mouseout', secondMouseDown)
})

function firstMouseUp (){
    primeiroHover.firstChild.nextSibling.innerHTML = `
               Features <img src="../images/icon-arrow-up.svg" alt="Icone de seta para cima">
           `
}
function firstMouseDown(){
    primeiroHover.firstChild.nextSibling.innerHTML = `
            Features <img src="../images/icon-arrow-down.svg" alt="Icone de seta para baixo">
        `
}

function secondMouseUp (){
    segundoHover.firstChild.nextSibling.innerHTML = `
            Company <img src="../images/icon-arrow-up.svg" alt="Icone de seta para cima">
        `
}

function secondMouseDown (){
    segundoHover.firstChild.nextSibling.innerHTML = `
                Company <img src="images/icon-arrow-down.svg" alt="Icone de seta para baixo">
         `
}