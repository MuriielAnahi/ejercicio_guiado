
function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];


	title.innerHTML="Por favor inicia sesión";
	email.placeholder="Correo Electronico";
	password.placeholder="Contraseña";
	remember.innerHTML="Recordar datos";
	button.innerHTML="Inciar sesión";
}
function imprimirResult(){
	var titulo=document.getElementById("titulo");
	titulo.innerHTML = "Datos formulario:" +"</br>";
	var correo=document.getElementById("inputEmail").value;
	var co = document.getElementById("correoOk");
	co.innerHTML = "El coreo ingresado es :" +"</br>"+ correo;
	var clave=document.getElementById("inputPassword").value;
	var cla = document.getElementById("claveOk");
	cla.innerHTML = "La contraseña ingresada es: </br>" + clave;


}

translate();