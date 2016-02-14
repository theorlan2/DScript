# Libreria Basica DScript
<p>Repositorio sobre Framework Dominicano</p>
<p>La libreria esta dirigida a funciones y estilos de FROND - END.</p>

<h4> Para selecionar un Nodo del DOM:</h4>

<code>
_c('.clase');   _c('#id');
</code>


<p><b>Para selecionar por el "<tag> <html>" </b></p>
<code> _N('clase')[indice]; </code>

<br>
<b>Para selecionar por el "<tag> <html>" y por una clase o id (Utilizando el indice [])</b>
<code>
 _All('clase')[indice];
</code>
<br>
<code>
 _All('.clase > h1')[indice]; // seleciona un nodo hijo
</code>

<br>

<p>Selector Especial para aplicar funciones al Nodo</p>
<code>
_cc('');
</code>

<br>
<p><b>Media - querys </b></p>

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








