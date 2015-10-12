

var _c = function (clase,contexto)  {  return new _c.inic(clase,contexto); 	 }
var _c = function(clase) {	return document.querySelector('.'+clase);};
var version = "0.1.0";
 
inic  =  _c.inic = function (clase,contexto) {
// Metodo selector del objeto
this.clase = clase,
this.contexto = contexto,

selectores = function(clase){

if (document.querySelector('.'+clase)!= null){

selector = document.querySelector('.'+clase);

	} else if( document.querySelectorAll(''+clase)[0]!=null ) {
 
selector = document.querySelectorAll(''+clase)[0];

	} else {

selector = document.querySelectorAll('#'+clase);

	}
},
 
constructor = function(clase,contexto){
selectores(clase);

},
constructor(this.clase,this.contexto);

}


 
// Metodo transformacion, para transformar el objeto
inic.prototype.transfomar = function (detalles,clase){
//selectores(clase);
selector.style.webkitTransform = ''+detalles;
selector.style.MozTransform = ''+detalles;
selector.style.msTransform = ''+detalles;
selector.style.OTransform = ''+detalles;
selector.style.transform = ''+detalles;
	}

// Metodo para la transicion
inic.prototype.transicion = function (detalles,clase){
//selectores(clase);
selector.style.webkitTransition = ''+detalles;
selector.style.MozTransition = ''+detalles;
selector.style.msTransition = ''+detalles;
selector.style.OTransition = ''+detalles;
selector.style.transition = ''+detalles;
	}

inic.prototype.tipodetiempo = function (detalles,clase){
//selectores(clase);
selector.style.webkitAnimationTimingFunction = ''+detalles;
selector.style.MozAnimationTimingFunction = ''+detalles;
selector.style.msAnimationTimingFunction = ''+detalles;
selector.style.AnimationTimingFunction = ''+detalles;
	}

                   
window.onload = function(){
 
  _c("cubo").backgroundColor = "#444";          
  _c("cubo").backgroundColor = "#444";          
/*  _c("cubo").transicion("all 0.5s");
  _c("cubo").transfomar("rotate(360deg)");          */
//  _c("body").transfomar("ee","aa");          


}	

