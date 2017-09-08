
var ganeLaCarrera=false;

if (ganeLaCarrera==true){console.log("Perdiste")} else {console.log("Ganaste")}

var posicionEnLaCarrera=6;

if (posicionEnLaCarrera==1)
	 {console.log("FELICITACIONES, SALISTE 1RO");}
else if(posicionEnLaCarrera==2) 
	{console.log("Te falto poquito para ganar");}
else if (posicionEnLaCarrera==3) 
	{console.log("Sos un orgullo para tu familia");}
else if (posicionEnLaCarrera>3) 
	{console.log("Volvé a tu casa");}
else 
	{console.log("No tires fruta");}


var mensaje;
if (posicionEnLaCarrera==1)
	 {mensaje="FELICITACIONES, SALISTE 1RO";} 

else if (posicionEnLaCarrera==2)
 	{mensaje="Te falto poquito para ganar";}

else if (posicionEnLaCarrera==3) 
	{mensaje="Sos un orgullo para tu familia";}

else if (posicionEnLaCarrera>3) 
	{mensaje="Volvé a tu casa";}
else 
	{mensaje="No tires fruta";}	

console.log(mensaje);
