//haceque nuestro menu desaparesca
//todo el codigo se va a ejecutar cundo el codigo se haya cargado

//esta funcion te dice que cuando el documento este listo ejecute la funcion main

$(document).ready(main);


var contador = 1;

function main (){
	//manejador de eventos:cuando el usuario de un clic
	//class del elemento para dar clic

	$('.menu_bar').click(function(){
		//despues del clic el nav aparesca y desaparesca
		// $('nav').toggle();

//si la variable es ==1 el menu esta oculto
		if(contador==1){
			$('nav').animate({
				left:'0'
			});
			contador=0;
		}
		else{
			contador=1;
			$('nav').animate({
				left:'-100%'
			});
		}

	});
}