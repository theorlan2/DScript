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
transformar (detalles:any,clase:string){
//selectores(clase);
(typeof(this.select.style.webkitTransform) != "undefined") ? this.select.style.webkitTransform = ''+detalles : this.select.style["webkit-transform"] = [''+detalles];
(typeof(this.select.style.MozTransform) != "undefined") ? this.select.style.MozTransform = ''+detalles : this.select.style["moz-Transform"] = [''+detalles];
(typeof(this.select.style.msTransform) != "undefined") ? this.select.style.msTransform = ''+detalles : this.select.style["ms-transform"] = [''+detalles];
(typeof(this.select.style.OTransform) != "undefined") ? this.select.style.OTransform = ''+detalles : this.select.style["o-transform"] = [''+detalles];
(typeof(this.select.style.transform) != "undefined") ? this.select.style.transform = ''+detalles : this.select.style["transform"] = [''+detalles];
	}
  

}

function _c(c) {
let _c = new _cc(c);      
    return _c;
}

window.onload = function () {

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {

 _c('.cuadrado').Css('left','50%'); 

};

document.body.appendChild(button);
}



  
