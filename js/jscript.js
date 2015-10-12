/*  
Framework Dominicano Part1

-Dany Orlando Santos Morel -
- - 
- -
- -
 */

 

// --- funciones de selectores ----

// seleciona una clase o id
//var _c = function(clase) {		return document.querySelector(''+clase);	}

// seleciona una clase o id
function _c(clase) {	return document.querySelector(''+clase);	}

// seleciona por el <tag> <html>
function _N(clase) {	return document.getElementsByTagName(''+clase);	}

// seleciona por el <tag> <html> y por una clase o id 
function _All(clase) { 	return document.queryAllSelector(''+clase);	}


/*
----- funcion unica para todas las anteriores (Opcional) ---

function _(clase) {
if (document.querySelector('.'+clase)!= null){

return document.querySelector('.'+clase);

	} else if(document.querySelectorAll(''+clase)[0]!=null) {

return document.querySelectorAll(''+clase)[0];

	} else {

return document.querySelectorAll('#'+clase);

	}
}
*/

// funcion para media querys css3

/*
Ejemplo: 

if(m_q({q:"maxw",px:"480px" })) {
 
}else if(m_q({q:"maxw",px:"640px" })) {

}else if(m_q({q:"maxw",px:"768px" })) {

}else if(m_q({types:0,q:"maxw",px:"1024px" })) {
//	alert("1024px");
}

*/



function m_q(options) {
 options = options || {};
var typequery = options.types || ""; 
var query = options.q || null;
var valor = options.px || null;
var result = options.result || null;
var tipos = new Array("all","screen","tv","aural","braille","embossed","handheld","print","projection","speech","tty");

if (!isNaN(typequery) && typequery == ""  ) {
typequery = tipos[typequery];

// alert("true");
}

switch(query) {
	case "minw":
		query = "min-width::";		
		break;
	case "maxw":
		query = "max-width:";		
		break;
	case "maxh":
		query = "max-height:";		
		break;
	case "minh":
		query = "min-height:";		
		break;
	case "mindw":
		query = "min-device-width:";		
		break;
	case "maxr":
		query = "max-resolution:";		
		break;
	default :
		query = query;
		break;
	}
if (typequery == "" || typeof(typequery) == "undefined") {
typequery == "";  
query = "("+query+valor+")";
}else {
query = typequery+" ("+query+" "+valor+")";
}


//alert(typequery+" r: "+ query+" r: "+ valor+" r: "+ result);
	if ( query != null) {
 
 	 	if(window.matchMedia(query).matches){
			if (result == null) {
	return true;	
				}else{
					return false;
			}
		}else{
					return false;	
		}
	}
}

/*
Ejemplos: 

css3.transformar("translate(100%)","cubo"),
css3.transformar("rotate(360deg)","cubo"),
css3.transicion("all 0.5s","cubo");

*/

var css3 = css3 || {	};

var css3 = {

detalles: "",
clase: "",

// Metodo selector del objeto
selectores: function(clase){

if (document.querySelector('.'+clase)!= null){

selector = document.querySelector('.'+clase);

	} else if( document.querySelectorAll(''+clase)[0]!=null ) {

selector = document.querySelectorAll(''+clase)[0];

	} else {

selector = document.querySelectorAll('#'+clase);

	}
},
// Metodo transformacion, para transformar el objeto
transformar:function (detalles,clase){
css3.selectores(clase);
selector.style.webkitTransform = ''+detalles;
selector.style.MozTransform = ''+detalles;
selector.style.msTransform = ''+detalles;
selector.style.OTransform = ''+detalles;
selector.style.transform = ''+detalles;
	},
// Metodo para la transicion
transicion: function (detalles,clase){
css3.selectores(clase);
selector.style.webkitTransition = ''+detalles;
selector.style.MozTransition = ''+detalles;
selector.style.msTransition = ''+detalles;
selector.style.OTransition = ''+detalles;
selector.style.transition = ''+detalles;
	},
tipodetiempo: function (detalles,clase){
css3.selectores(clase);
selector.style.webkitAnimationTimingFunction = ''+detalles;
selector.style.MozAnimationTimingFunction = ''+detalles;
selector.style.msAnimationTimingFunction = ''+detalles;
selector.style.AnimationTimingFunction = ''+detalles;
	}
}
