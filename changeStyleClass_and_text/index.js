console.log("Let's change the style using className with js")


const maindivelem = document.getElementById('main-id');

const defaultText = maindivelem.querySelectorAll('.defaulttext')
const hiddenText = maindivelem.querySelectorAll('.hide-text')

console.log(defaultText)

console.log(hiddenText)

const buttn = document.querySelector('button')

console.log(maindivelem.className)


let initialClass = false;

buttn.addEventListener('click', () => {
    if(initialClass){
        maindivelem.className = "main-class"


        defaultText.forEach((el) => el.style.display = 'block')
        hiddenText.forEach((hT)=> hT.style.display = 'none')
    }else{
        maindivelem.className = "Secondary-class"

         defaultText.forEach((el) => el.style.display = 'none' )
          hiddenText.forEach((hT)=> hT.style.display = 'block')
    }

    initialClass = !initialClass

})
