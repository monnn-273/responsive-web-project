// API = https://645330aec18adbbdfe97128e.mockapi.io/Users
const email = document.querySelector('.inputEmail');
const password = document.querySelector('.inputPassword');

const btnLogin = document.querySelector('.button-login');
btnLogin.addEventListener('click', function(e) {
    e.preventDefault();
    fetch('https://645330aec18adbbdfe97128e.mockapi.io/Users')
    .then(response => response.json())
    .then(result => {
        // console.log(result)
        let userLogin = null;
        for(let i = 0; i<result.length; i++) {
            if(email.value === result[i].email && password.value === result[i].password) {
                userLogin = result[i];
            } 
        }
        if (userLogin !== null) {
            localStorage.setItem('user', JSON.stringify(userLogin))
            window.location.href = "index.html";
        } else {
            const warning = document.querySelector('.warning');
            warning.innerHTML = "Gagal, periksa email dan password anda";
            warning.style.color = "Red";
            warning.style.fontStyle = "Italic";
        }
        
    })
})
