function _c(clase) {	return document.querySelector(''+clase);	}

// seleciona por el <tag> <html>
function _N(clase) {	return document.getElementsByTagName(''+clase);	}

// seleciona por el <tag> <html> y por una clase o id 
function _All(clase) { 	return document.queryAllSelector(''+clase);	}


var _cc = function (clase,contexto)  {  return new _cc.inic(clase,contexto); 	 }
/*var _c = function(clase) {	return document.querySelector('.'+clase);};*/
var version = "0.1.0";
 
inic  =  _cc.inic = function (clase,contexto,indic) {
// Metodo selector del objeto
this.clase = clase,
this.contexto = contexto,
this.indic = indic,

selectores = function(clase){

if (document.querySelector(clase)!= null){

selector = document.querySelector(clase);

	} else {
 
selector = document.querySelectorAll(clase)[indic];
 
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

inic.prototype.css = function(css,valor) {

selector.style[css] = [valor] ;

};
            
                  
window.onload = function(){

_cc(".cubo").css("backgroundColor","#444");


  _cc(".cubo").transicion("all 0.5s");
  _cc(".cubo").css("left","0%");          
setTimeout(function(){
  _cc(".cubo").css("left", "50%");          
  _cc(".cubo").transfomar("rotate(360deg)");

},500);
setTimeout(function(){
  _cc(".cubo").css("left", "100%");          
  _cc(".cubo").transfomar("rotate(0deg)");
},1000);

setTimeout(function(){
  _cc(".cubo").css("left", "50%");          
  _cc(".cubo").transfomar("rotate(360deg)");
},1500);


}	
