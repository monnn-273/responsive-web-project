let auth = localStorage.getItem('user')
if( auth !== null ) {
    
    const loginIndex = document.querySelector('#login-index')
    loginIndex.innerHTML = "Logout";
    loginIndex.href = "login.html"
    loginIndex.classList.add('btn-logout');
    loginIndex.addEventListener('click', function() {
        loginIndex.classList.remove('btn-logout');
        localStorage.removeItem('user');
        window.location.href= "login.html"
    })

    const btnBergabung = document.querySelector('#btn-bergabung')
    btnBergabung.innerHTML = "Baca Artikel";
    btnBergabung.href = "articles.html";
} else {
    loginIndex.innerHTML = 'Login';
    loginIndex.href = 'login.html';
}
