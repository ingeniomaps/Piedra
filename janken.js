var opciones1 = ["Piedra", "Papel", "Tijeras"];
var opciones = document.getElementsByTagName("figure");

function aleatorio(min, max){
	num = Math.floor( Math.random() * (max-min+1) - min );
	return num;
}

function jugar(jugada){

	jugadaUsuario = jugada;
	mitad = (opciones.length-1)/2;

	img1 = document.getElementById("jugadaUsuario");
	img2 = document.getElementById("jugadaPC");
	res = document.getElementById("resultado");

	alt = aleatorio(0, opciones.length-1);
	jugadaPC = opciones[alt];
	num = numJugada(jugadaUsuario) - alt;

	img1.src = jugadaUsuario.children[0].src;
	img2.src = jugadaPC.children[0].src;

	if(jugadaUsuario == jugadaPC){
		res.src = "./img/again.png";
	}else{
		if(num < 0){
			if(num < (-1*mitad) ){
				res.src = "./img/loser.png";
			}else{
				res.src = "./img/win.png";
				label.innerText = "ganaste";
			}
		}else{
			if(num > mitad){
				res.src = "./img/win.png";
			}else{
				res.src = "./img/loser.png";
			}
		}
	}

}

function numJugada(jugada){
	num = -1;
	for(i = 0; i < opciones.length; i++){
		if(jugada == opciones[i]){
			num = i;
			break;
		}
	}
	return num;
}