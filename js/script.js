const formEmail = document.forms['formEmail']
let inputEmail = document.forms['formEmail']['emailInput']
const emailPattern = /*/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/*/ /[äáàâãöôóòõüûúùéèêíìîa-zA-Z0-9!#\$%*/?\|\^\{\}`~&'+\-=_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
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
        console.log(allClean)
    } else {
        allClean = false
        inputEmail.classList.add('errorInput')
        errorMessage.classList.add('errorMessage')
        errorMessage.classList.remove('hidden')
        console.log(allClean)
    }

    localStorage.setItem('emailGuardado', `${inputEmail.value}`)  
    
    if (allClean == true) {
        formEmail.submit()
    }
    
    console.log(isValid)
    console.log(allClean)
} 
    


formEmail.addEventListener('submit', testEmail)
console.log(formEmail)
console.log(inputEmail)