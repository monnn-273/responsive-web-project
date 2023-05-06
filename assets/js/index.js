let auth = localStorage.getItem('user')
if( auth !== null ) {
    const loginIndex = document.querySelector('#login-index')
    loginIndex.innerHTML = "Logout";
    loginIndex.href = "login.html"

    const btnBergabung = document.querySelector('#btn-bergabung')
    btnBergabung.innerHTML = "Baca Artikel";
    btnBergabung.href = "articles.html";
}
