const nama = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

let users = JSON.parse(localStorage.getItem('user'));
const api = 'https://645330aec18adbbdfe97128e.mockapi.io';

const btnRegister = document.querySelector('#btn-register');
btnRegister.addEventListener('click', function(e) {
    e.preventDefault();
  
    if (nama.value === '' || email.value === '' || password.value === '') {
        const warningg = document.querySelector('.warning-rgs');
        warningg.innerHTML = 'Harap isi semua data !';
        warningg.style.color = "Red";
        warningg.style.fontStyle = "Italic";
    } else {
      let allUsers = {
        nama: nama.value,
        email: email.value,
        password: password.value,
      };
  
      const register = async (api) => {
        await fetch(`${api}/Users`, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(allUsers),
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            alert('Register Anda Berhasil');
            location.replace('./login.html');
          })
          .catch((e) => console.error(e));
      };
  
      register(api);
    }
    
});
