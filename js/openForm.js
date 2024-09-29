let valorUsername = document.querySelector(".nombre")

let password = document.querySelector(".pass")

let btnLogin = document.getElementById("btn-login")

let username = "ezequielcampos"

let close = document.querySelector(".closeForm")

let contrasena = "123"

let btnOpenForm = document.querySelector(".btn-login")

let closeForm = document.querySelector(".form-login-not-visible")

btnOpenForm.addEventListener("click", () => {
closeForm.className = "formContainer"
})

close.addEventListener("click", () => {
closeForm.className = "form-login-not-visible"
})

btnLogin.addEventListener("click", () => {
    if (valorUsername.value === username && password.value === contrasena) {
    alert("bienvenido denuevo")
    } else {
    alert("usuario o contraseña incorrectos")
    }
})