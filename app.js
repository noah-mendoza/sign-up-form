const btn = document.querySelector('.button')
const field = document.querySelector('.inputs')
let notPassword = document.createElement('p')
notPassword.classList.add('pp')
notPassword.innerText = "These passwords do not match"

    
btn.addEventListener('click', () => {
    let ogPassword = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm').value;
    if (confirmPassword !== ogPassword) {
        field.appendChild(notPassword);
    }
});