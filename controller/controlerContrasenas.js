import { contrasenas } from "../model/modelContrasenas.js";
console.log(contrasenas)
let btnIniciar = document.getElementById('btnIniciar')
btnIniciar.addEventListener('click', function () {
    console.log('iniciando sesion')
    let usuario = document.getElementById('usuario').value
    let correo = document.getElementById('correo').value
    let password = document.getElementById('password').value
    // let nombre=document.getElementById('nombre').value
    // let password2=document.getElementById('password2').value
    // let telefono=document.getElementById('telefono').value

    if (usuario == 'wilmar123') {
        if (password == '1234') {
            if (correo == 'wilmar@gmail.com') {
                console.log('Inicio de sesion correta')
                console.log(usuario, password, correo)
                document.getElementById('animacion').style.display = 'block'
                setTimeout(() => {
                    document.getElementById('animacion').style.display = 'none'
                    document.getElementById('contenido-principal').style.display = 'flex'
                }, 2000)
            }
            else {
                console.log('Datos Incorretos')
            }
        }
        else {
            console.log('Datos Incorretos\nsiga asi')
        }
    }
    else {
        console.log('Datos Incorretos1')
    }

    btnIniciar.addEventListener('click', function () {

    })
}
)