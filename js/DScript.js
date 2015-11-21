/************************** ----------- ******************************  
			Framework -Dany Orlando Santos Morel -
 ************************** ----------- ******************************/ 

// --- funciones de selectores individuales ----

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
if(m_q({q:"maxw",px:"480px" })) {
 
}else if(m_q({q:"maxw",px:"640px" })) {

}else if(m_q({q:"maxw",px:"768px" })) {

}else if(m_q({types:0,q:"maxw",px:"1024px" })) {
//	alert("1024px");
}

*/




// efecto Media Querys , Beta, Eje: if(m_q({types:0,q:"maxw",px:"1024px" })) { // si es mayor de 1024px  }
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

 

var _cc = function (clase,contexto)  {  return new _cc.inic(clase,contexto); 	 }
/*var _c = function(clase) {	return document.querySelector('.'+clase);};*/
var version = "0.1.0";
 
inic  =  _cc.inic = function (clase,contexto,indic) {
// Metodo selector del objeto
this.clase = clase,
this.contexto = contexto,
this.indic = indic,

selectores = function(clase){ 

selector = document.querySelector(clase);

},
 
constructor = function(select,contexto){
selectores(select);
 },
constructor(this.clase,this.contexto);
}


// Metodo transformacion, para transformar el objeto
inic.prototype.transformar = function (detalles,clase){
//selectores(clase);
(typeof(selector.style.webkitTransform) != "undefined") ? selector.style.webkitTransform = ''+detalles : selector.style["webkit-transform"] = [''+detalles];
(typeof(selector.style.MozTransform) != "undefined") ? selector.style.MozTransform = ''+detalles : selector.style["moz-Transform"] = [''+detalles];
(typeof(selector.style.msTransform) != "undefined") ? selector.style.msTransform = ''+detalles : selector.style["ms-transform"] = [''+detalles];
(typeof(selector.style.OTransform) != "undefined") ? selector.style.OTransform = ''+detalles : selector.style["o-transform"] = [''+detalles];
(typeof(selector.style.transform) != "undefined") ? selector.style.transform = ''+detalles : selector.style["transform"] = [''+detalles];
	}

// Metodo para la transicion
inic.prototype.transicion = function (detalles,clase){
//selectores(clase);
(typeof(selector.style.webkitTransition) != "undefined" ) ? selector.style.webkitTransition = ''+detalles : selector.style["webkit-transition"] = [''+detalles];
(typeof(selector.style.MozTransition) != "undefined" ) ? selector.style.MozTransition = ''+detalles : selector.style["noz-transition"] = [''+detalles];
(typeof(selector.style.msTransition) != "undefined" ) ? selector.style.msTransition = ''+detalles : selector.style["ms-transition"] = [''+detalles];
(typeof(selector.style.OTransition) != "undefined" ) ? selector.style.OTransition = ''+detalles : selector.style["o-transition"] = [''+detalles];
(typeof(selector.style.transition) != "undefined" ) ? selector.style.transition = ''+detalles : selector.style["transition"] = [''+detalles];
	}

inic.prototype.tipodetiempo = function (detalles,clase){
//selectores(clase);
(typeof(selector.style.webkitAnimationTimingFunction) != "undefined") ?  selector.style.webkitAnimationTimingFunction = ''+detalles : selector.style["webkitAnimationTimingFunction"] = [''+detalles];
(typeof(selector.style.MozAnimationTimingFunction) != "undefined") ?  selector.style.MozAnimationTimingFunction = ''+detalles : selector.style["MozAnimationTimingFunction"] = [''+detalles];
(typeof(selector.style.msAnimationTimingFunction) != "undefined") ?  selector.style.msAnimationTimingFunction = ''+detalles : selector.style["msAnimationTimingFunction"] = [''+detalles];
(typeof(selector.style.AnimationTimingFunction) != "undefined") ?  selector.style.AnimationTimingFunction = ''+detalles : selector.style["AnimationTimingFunction"] = [''+detalles];
	}

// aplicar estilos css al elemento, Eje: _cc('elemento').css('background-color','#eee');
inic.prototype.css = function(css,valor) {
if(valor == ""){
var tr = css.split(";");
for (var i =0; i < tr.length; i++) { var t = tr[i].split(":");  selector.style[t[0]] = [t[1]]; } 
}else{
selector.style[css] = [valor] ;
}
};
// escribir en el elmento o InnerHTML eje: _cc('elemento_a_escribir').escribir('ejemplo');
inic.prototype.escribir = function(valor) {

selector.innerHTML = valor;

}

// iniciar el api de Google Maps, eje: _cc('contenedor_del_mapa').G_Maps();
inic.prototype.G_Maps = function(opcion) {
var lat = opcion.lat || 18.4643133
,lng = opcion.lng || -69.8771667
,z = opcion.z || 8
,scroll = opcion.scroll || true
,estilos = opcion.estilos || null
,tipo_mapa = opcion.tipo || "road"
,direcciones = opcion.direcciones || false
,dir1 = opcion.dir1 || null
,dir2 = opcion.dir2 || null
,rotar = opcion.rotar || 0;
 G_Maps({
div:this.clase,
lat:lat,
lng: lng,
z: z,
scroll: scroll,
estilos: estilos,
tipo: tipo_mapa,
direcciones: direcciones,
dir1: dir1,
dir2: dir2,
rotar: rotar,
 })
}
// ajax retornado en el elemento selecionado eje: _cc('mostrar_resultado')._ajax();
inic.prototype._ajaxs = function(opciones) {
var url = opciones.url || null;
var file = opciones.file || null;
var fin = opciones.fin || null;
var resq = opciones.resq || null;
_ajaxs({
	url:url,
	file:file,
	classn:this.clase,
	resq:resq,
	fin:fin

});
// agregar eventos al elemento _cc('agregar_evento').evento();
inic.prototype.evento = function(opciones) {
var elemento =  opciones.elemt || null
,	evento   = opciones.eventos || null
,	funcion  = opciones.funcion || null;

evento({
elemento:elemt,
eventos:evento,
funcion:funcion 
});

}

}
/* Funciones Localstorage  */
var lcst = {

// Guardar Datos en el Localstorage
guardar : function(key,dato){
 
	localStorage.setItem(key,dato);

},
// ver Dato del Localstorage
verdatos : function (key){

	return localStorage.getItem(key);

},

// Eliminar Dato del Localstorage
eliminar: function (key){

	localStorage.removeItem(key);

	}
}
//  Objeto ajax 
function  _ajaxs(opciones) {
this.url = opciones.url || "";
this.file = opciones.file || null;
selec = opciones.classn || null;
this.response = opciones.response || null;
succes = opciones.fin || null;
var resq = opciones.resq || null;
this.respuesta = "";

(this.url[0] != "?" && resq == "GET"   ) ? this.url =  "?"+this.url : this.url;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function (fin) {
 
	if (xhttp.readyState == 4 && xhttp.status == 200 ) {
	this.respuesta = xhttp.responseText;

if ( selec != null && selec != ""  ) {  
	_cc(""+selec).escribir(this.respuesta);
}

if (succes && typeof(succes) === "function") {
        succes(xhttp.responseText);
 
    }
	}
}

	if (resq == "POST" ) {
  xhttp.open("POST",this.file,true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(this.url);
	}else {
  xhttp.open("GET",this.file+this.url,true);
  xhttp.send();
	}
}


// Google Maps Api  
function G_Maps(opcion){ 
var select = opcion.div || null
,lat = opcion.lat || 18.4643133
,lng = opcion.lng || -69.8771667
,z = opcion.z || 8
,scroll = opcion.scroll || true
,estilos = opcion.estilos || null
,tipo_mapa = opcion.tipo || "road"
,direcciones = opcion.direcciones || false
,dir1 = opcion.dir1 || null
,dir2 = opcion.dir2 || null
,rotar = opcion.rotar || 0;
rotacion = false;
switch(tipo_mapa) {
	case "road":
 tipo_mapa = google.maps.MapTypeId.ROADMAP;
		break;
	case "satelite":
 tipo_mapa = google.maps.MapTypeId.SATELLITE;
		break;
	case "hibrido":
 tipo_mapa = google.maps.MapTypeId.HYBRID;
rotacion = true;
		break;
	case "terreno":
 tipo_mapa = google.maps.MapTypeId.TERRAIN;
rotacion = true;
		break;
}

if (direcciones != true ) {
 var map;
  map = new google.maps.Map(_c(select), {
    center: {lat: lat, lng: lng},
    zoom: z,
    scrollwheel:scroll,
    styles: estilos,
    mapTypeId: tipo_mapa
  });
}
if(rotacion){
map.setTilt(rotar);
}

if (direcciones == true ) {
 
 var map;
  map = new google.maps.Map(_c(select), {
    center: dir1,
    zoom: z,
    scrollwheel:scroll,
    styles: estilos,
    mapTypeId: tipo_mapa
  });
 
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });

  var request = {
    destination: dir2,
    origin: dir1,
    travelMode: google.maps.TravelMode.DRIVING
  };
  // Set destination, origin and travel mode.

  // Pass the directions request to the directions service.
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // Display the route on the map.
      directionsDisplay.setDirections(response);
    }
  }); 

}
 
G_Maps.set = function(opciones) {
 var center = opciones.centro || null 
	if (center != null) {
	 map.setCenter({lat: -34, lng: 151});
		}
	}
}

//Leer Json 
var _json = {
leer : function(data) {
return JSON.parse(data); 
}

}

// agregar eventos a un elemento 
function _evento(opciones){
var elemento =  opciones.elemt || null
,	evnt   = opciones.evento || null
,	funcion  = opciones.funcion || null;
	if (element.addEventListener) {	

		element.addEventListener(evnt,funcion,false);

		}else{
		
		element.attachEvent("on"+evento,funcion,false);
	}
} 

// funcion que inicia al cargar el Dom
function onDOMComplete(w, f) {
	var d = w.document, done = false;
	wait();

	if ((/WebKit|KHTML|MSIE/i).test(navigator.userAgent)) {
		poll();
	}

	function load(e) {
		if (!done) {
			done = true; stop(); f(e);
		}
	}

	function has(p) { return typeof d[p] != 'undefined'; }

	function poll() {
		if (d.body !== null && d.getElementsByTagName) {
			// please see http://javascript.nwbox.com/IEContentLoaded/ for the IE improvement part of DOMComplete
			if (has('fileSize')) { try { d.documentElement.doScroll('left'); load('documentready'); } catch (e) { } }
			if (has('readyState') && (/loaded|complete/).test(d.readyState)) { load('readyState'); }
		}
		if (!done) { setTimeout(poll, 10); }
	}

	function stop() {
		if (typeof d.removeEventListener == 'function') {
			d.removeEventListener('DOMContentLoaded', load, false);
		}
	}

	function wait() {
		if (typeof d.addEventListener == 'function') {
			d.addEventListener('DOMContentLoaded', load, false);
		}
		var oldonload = w.onload;
		w.onload = function (e) {
			if (typeof oldonload == 'function') {
				oldonload();
			}
			load(e || this.event);
		};
	}
}

// poner elemento  o el body en full Screen
function iniciarFullScreen(element) {
	if(element.requestFullScreen) {
		element.requestFullScreen();
	} else if(element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if(element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen();
	}
}

// Obtener el ancho y alto del navegador 
function w_h_size(){

var winW = 630, winH = 460;

if (document.body && document.body.offsetWidth) {
 winW = document.body.offsetWidth;
 winH = document.body.offsetHeight;
}

if (document.compatMode=='CSS1Compat' &&
    document.documentElement &&
    document.documentElement.offsetWidth ) {
 winW = document.documentElement.offsetWidth;
 winH = document.documentElement.offsetHeight;
}

if (window.innerWidth && window.innerHeight) {
 winW = window.innerWidth;
 winH = window.innerHeight;
}

	this.width = function(){	
	return winW;	
	}

	this.height = function(){
	return winH;	
	}
return winW,winH;
	
}

// Obtener la posicion X absoluta del objeto
  function findPosX(obj)
  {
    var curleft = 0;
    if(obj.offsetParent)
        while(1) 
        {
          curleft += obj.offsetLeft;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.x)
        curleft += obj.x;
    return curleft;
  }
  
// Obtener la posicion Y absoluta del objeto
  function findPosY(obj)
  {
    var curtop = 0;
    if(obj.offsetParent)
        while(1)
        {
          curtop += obj.offsetTop;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.y)
        curtop += obj.y;
    alert(curtop);
    return curtop;
  }

