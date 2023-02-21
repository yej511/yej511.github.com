

document.getElementById('boton').addEventListener('click', function() {  
    console.log("Hola! Soy yo");
    document.getElementById("demo").innerHTML = "<strong>SOBRE MI:</strong><BR>&nbsp Soy Gestora de contabilidad a tiempo completo con 10 años de experiencia en administración de sueldos, contabilidad empresarial, análisis de riesgo, presupuesto y recursos humanos. <br>&nbsp Tengo 34 años, soy argentina, soltera, me considero una persona proactiva y dedicada a mi profesión.";
});

document.getElementById('boton2').addEventListener('click', function() {  
    console.log("Estos son mis estudios");
    document.getElementById("demo").innerHTML = "<strong>FORMACIÓN ACADÉMICA:</strong><li>Licenciatura en economía y finanzas.</li><li>Máster en Contabilidad.</li><li>Seminarios en economía Crypto.</li>";
});




document.getElementById('boton6').onclick = function () { 
    console.log("Estos son otros conocimientos");
    document.getElementById('demo').innerHTML = "<strong>OTROS CONOCIMIENTOS:</strong><li>Cursos online de finanzas.</li><li>Inglés nivel intermedio.</li><li>Jornadas de capacitación con entes recaudadores.</li>"  ; 
}

document.getElementById('boton3').onclick = function () { 
    console.log("Esta es mi experiencia laboral");
    document.getElementById('demo').innerHTML = "<strong>EXPERIENCIA LABORAL:</strong><li>Pasantía en la Municipalidad.</li><li>Hice trámites para una empresa.</li><li>Gestión de facturas para una empresa.</li><li>Asesora contable para un estudio de profesionales.</li><li>Auditorías para el Estado.</li>"; // por el id demo reemplaza el texto de <p>
}


document.getElementById('boton4').onclick = function () { 
    console.log("Esta son mis habilidades");
    document.getElementById('demo').innerHTML = "<strong>HABILIDADES:</strong><BR>&nbsp Organización, responsabilidad, productividad, comunicacion asertiva. <br>&nbsp Interesada en capacitacion continua para estar al dia con los cambios."; 
}

document.getElementById('boton5').onclick = function () { 
    console.log("Estos son mis datos de contacto");
    document.getElementById('demo').innerHTML = "<strong>CONTACTO:</strong><li>Dirección: San Martín 2580</li>  <li>Email: bethfoster@mail.com</li> <li>Tel: (609)287-4061</li>"; 
}




document.getElementById('boton_color').addEventListener('click', function() {      
    document.body.style.backgroundColor = 'black';
});

document.getElementById('boton_default').addEventListener('click', function() {      
    document.body.style.backgroundColor = 'white ';
    
});





