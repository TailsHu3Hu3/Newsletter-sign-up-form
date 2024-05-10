const formEmail = document.forms['formEmail']
let inputEmail = document.forms['formEmail']['emailInput']
const emailPattern = /[äáàâãöôóòõüûúùéèêíìîa-zA-Z0-9!#\$%*/?\|\^\{\}`~&'+\-=_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const errorMessage = document.querySelector('#errorMessageS')


function testEmail(evento) {
    evento.preventDefault()
    let allClean = false
    let isValid = emailPattern.test(inputEmail.value)
    
    if (isValid == true) {
        allClean = true
        inputEmail.classList.remove('errorInput')
        errorMessage.classList.remove('errorMessage')
        errorMessage.classList.add('hidden')
    } else {
        allClean = false
        inputEmail.classList.add('errorInput')
        errorMessage.classList.add('errorMessage')
        errorMessage.classList.remove('hidden')
    }

    localStorage.setItem('emailGuardado', `${inputEmail.value}`)  
    
    if (allClean == true) {
        formEmail.submit()
    }
} 
    
formEmail.addEventListener('submit', testEmail)