const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	cedula: /^P$|^(?:PE|E|N|[23456789]|[23456789](?:A|P)?|1[0123]?|1[0123]?(?:A|P)?)$|^(?:PE|E|N|[23456789]|[23456789](?:AV|PI)?|1[0123]?|1[0123]?(?:AV|PI)?)-?$|^(?:PE|E|N|[23456789](?:AV|PI)?|1[0123]?(?:AV|PI)?)-(?:\d{1,4})-?$|^(PE|E|N|[23456789](?:AV|PI)?|1[0123]?(?:AV|PI)?)-(\d{1,4})-(\d{1,6})$/i,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\(?(\d{4})\)?[-]?(\d{4})$/,
    positivos:/^[0-9]{1,100}$/,
    // direccion:/^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡\-_]){1})\S{8,16}$/
}

const inputs = document.querySelectorAll('#formulario input')
const formulario = document.getElementById('formulario');

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, e.target.name);
        break;
        case "cedula":
            validarCampo(expresiones.cedula, e.target, e.target.name);
        break;
        case "genero":
            validarCampo(expresiones.nombre, e.target, e.target.name);
        break;
        case "nacionalidad":
            validarCampo(expresiones.nombre, e.target, e.target.name);
        break;
        case "salario":
            validarCampo(expresiones.positivos, e.target, e.target.name);
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, e.target.name);
        break;
        case "email":
            validarCampo(expresiones.correo, e.target, e.target.name);
        break;
        // case "direccion":
        //     validarCampo(expresiones.direccion, e.target, e.target.name);
        // break;
    }
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo${campo}`).classList.remove('formulario-error');
        document.getElementById(`grupo${campo}`).classList.add('formulario-correcto');
        document.querySelector(`#grupo${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo${campo} .inputerror`).classList.remove('inputerror-encontrado');
    }
    else{
        document.getElementById(`grupo${campo}`).classList.remove('formulario-correcto');
        document.getElementById(`grupo${campo}`).classList.add('formulario-error');
        document.querySelector(`#grupo${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo${campo} .inputerror`).classList.add('inputerror-encontrado');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('error').classList.add('error-encontrado');
    setTimeout(()=> {
        document.getElementById('error').classList.remove('error-encontrado');; } ,3000);
})