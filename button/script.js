const container = document.getElementById('ctn')
const btn = document.getElementById('submit')

let isBlue = false

btn.addEventListener('click', () =>{
    if(isBlue){
            
        container.style.backgroundColor = '#ca1818ff'
    }else{
            
        container.style.backgroundColor = 'blue'

    }
    isBlue = !isBlue
})