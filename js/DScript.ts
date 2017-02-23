// Libreria en Typescript


class _cc {
    select: any;
    clase:any;
    constructor(clase?) {
    	this.clase = clase;
       this.select = this.selector(clase);    
}
    selector(clase?) {
    return  document.querySelector('' + clase);    
	 }       

  Css(css: string, valor: any) {
    if(valor == ""){
var tr = css.split(";");
for (var i =0; i < tr.length; i++) { var t = tr[i].split(":");  this.select.style[t[0]] = [t[1]]; } 
}else{
this.select.style[css] = [valor] ;
}

  }

// Metodo transformar 
transformar (detalles:any){
(typeof(this.select.style.webkitTransform) != "undefined") ? this.select.style.webkitTransform = ''+detalles : this.select.style["webkit-transform"] = [''+detalles];
(typeof(this.select.style.MozTransform) != "undefined") ? this.select.style.MozTransform = ''+detalles : this.select.style["moz-Transform"] = [''+detalles];
(typeof(this.select.style.msTransform) != "undefined") ? this.select.style.msTransform = ''+detalles : this.select.style["ms-transform"] = [''+detalles];
(typeof(this.select.style.OTransform) != "undefined") ? this.select.style.OTransform = ''+detalles : this.select.style["o-transform"] = [''+detalles];
(typeof(this.select.style.transform) != "undefined") ? this.select.style.transform = ''+detalles : this.select.style["transform"] = [''+detalles];
	}

// Metodo para la transicion
transicion (detalles:any){
(typeof(this.select.style.webkitTransition) != "undefined" ) ? this.select.style.webkitTransition = ''+detalles : this.select.style["webkit-transition"] = [''+detalles];
(typeof(this.select.style.MozTransition) != "undefined" ) ? this.select.style.MozTransition = ''+detalles : this.select.style["noz-transition"] = [''+detalles];
(typeof(this.select.style.msTransition) != "undefined" ) ? this.select.style.msTransition = ''+detalles : this.select.style["ms-transition"] = [''+detalles];
(typeof(this.select.style.OTransition) != "undefined" ) ? this.select.style.OTransition = ''+detalles : this.select.style["o-transition"] = [''+detalles];
(typeof(this.select.style.transition) != "undefined" ) ? this.select.style.transition = ''+detalles : this.select.style["transition"] = [''+detalles];
	}
  
// Metodo para el tipo de tiempo de la transicion
tipodetiempo = function (detalles:any){
(typeof(this.select.style.webkitAnimationTimingFunction) != "undefined") ?  this.select.style.webkitAnimationTimingFunction = ''+detalles : this.select.style["webkitAnimationTimingFunction"] = [''+detalles];
(typeof(this.select.style.MozAnimationTimingFunction) != "undefined") ?  this.select.style.MozAnimationTimingFunction = ''+detalles : this.select.style["MozAnimationTimingFunction"] = [''+detalles];
(typeof(this.select.style.msAnimationTimingFunction) != "undefined") ?  this.select.style.msAnimationTimingFunction = ''+detalles : this.select.style["msAnimationTimingFunction"] = [''+detalles];
(typeof(this.select.style.AnimationTimingFunction) != "undefined") ?  this.select.style.AnimationTimingFunction = ''+detalles : this.select.style["AnimationTimingFunction"] = [''+detalles];
	}

}


function _c(c) {
let _c = new _cc(c);      
    return _c;
}


// Local Storage

interface Lcst {
    key_:any;
    datos: any;
}

class Lcst implements Lcst {
    constructor(key_:any,datos:any) {
        this.key_ = key_;
        this.datos = datos;
}

	// Guardar Datos en el Localstorage
guardar (key_,dato){
 	localStorage.setItem(key_,dato);

}
// ver Dato del Localstorage
verdatos (key_){

	return localStorage.getItem(key_);

}

// Eliminar Dato del Localstorage
eliminar (key_){

	localStorage.removeItem(key_);

	}
}




window.onload = function () {

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {

 _c('.cuadrado').Css('left','50%'); 

};

document.body.appendChild(button);
}



  



  
