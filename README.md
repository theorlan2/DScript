# Dominican-Frameworks
Repositorio sobre Framework Dominicano

La libreria esta dirigida a funciones y estilos de FROND - END.

Para selecionar un Nodo del DOM:

_c('.clase');   _c('#id');


Para selecionar por el <tag> <html>
 _N('clase')[indice]; 

Para selecionar por el <tag> <html> y por una clase o id (Utilizando el indice [])
 _All('clase')[indice];

 _All('.clase > h1')[indice]; // seleciona un nodo hijo


Selector Especial para aplicar funciones al Nodo

_cc('');


Media - querys 

ejemplo 

Css:
@media screen and (max-width:1024px)  {  // si es mayor de 1024px  }

Js (DScript):
if(m_q({types:0,q:"maxw",px:"1024px" })) { // si es mayor de 1024px  }

La funcion se ejecuta 1 vez.
Si quieres ejecuatar cuando el navegador cambia de taman;o, coloca dentro de una funcion que se ejecute durante el evento Resize. 

Ajax 
La funcion _ajaxs({opciones}); 
_ajaxs({
url ;
file;
classn;
response;
fin;
resq;
});








