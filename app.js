let validEmail = "user@cbtis258.edu.mx"
let validPass = "admin1234";

const login = (event) =>{
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("Mensaje");

    if(email === validEmail && password === validPass){
        mensaje.textContent = "inicio de sesion exitoso";
        mensaje.style.color = "green";

        setTimeout(() => {
            window.location.href = "Home.html";
        }, 1000 );
    }
    else{
        mensaje.textContent = "Correo o contraseña incorrecta";
        mensaje.style.color = "red";
    }
}
