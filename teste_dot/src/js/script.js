let arrowDownContainer = document.querySelectorAll('.arrow-down-container')
let dropdowns = document.querySelectorAll('.dropdown')
let buttons = document.querySelectorAll('.button-circle')
let texts = document.querySelectorAll('.text-circle')
let circleBackground = document.querySelector('.center-circle')

arrowDownContainer.forEach((arrow, index) => {
    arrow.addEventListener('click', (event)=> {
        dropdowns[index].classList.toggle('show')
        arrow.classList.toggle('show')
    })
})

buttons.forEach((button, index)=> {
    button.addEventListener('click', ()=> {
        verifyIsOpen(button, index)  
    })
})


const verifyIsOpen = (buttonState, index) => {
    if(buttonState.classList.contains('pressed')){
        buttonPressed(buttonState)   
    }else{
        buttons.forEach(button => buttonPressed(button))
        addText(texts[index])
        addBackground(index)
        buttonState.innerText = "-"
        buttonState.style.background = 'purple'
        buttonState.classList.add('pressed')
    }
}

const addText = (textToAdd)=> {
    texts.forEach(text => {
        text.classList.remove('show')
    })

    textToAdd.classList.add('show')

}

 
const addBackground = (index) => {
    circleBackground.classList.add('show')
    if(index == 0){
        circleBackground.style.background = "#ffcc33"
    }else if(index == 1){
        circleBackground.style.background = "#707070"
    }else{
        circleBackground.style.background = '#ff3737'
    }
}

const buttonPressed = (button)=> {
    button.style.background = "rgb(1, 179, 179)"
    button.innerText = "+"
    button.classList.remove('pressed')
    circleBackground.classList.remove('show')
}