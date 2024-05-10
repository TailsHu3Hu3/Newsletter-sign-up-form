const emailUsed = localStorage.getItem('emailGuardado')
const paragraphInfo = document.querySelector('#paragraphInfo')


paragraphInfo.innerHTML = `
<p>
    A confirmation email has been sent to <span class="emailClass">${emailUsed}</span>. 
    Please open it and click the button inside to confirm your subscription.
</p>
`
