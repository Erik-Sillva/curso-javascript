var corpo = document.body
corpo.style.background = '#000';

//Manipulando pelo name:
var titlepag = document.getElementsByName('title')[0];
titlepag.style.color = 'purple'

//Manipulando pela tag
var p1 = document.getElementsByTagName('p')[0];
p1.style.color = 'gray';

//Manipulando pelo ID
var d = document.getElementById('msg');
d.style.background = 'green'

//Manipulando pela class
var toque = document.getElementsByClassName('clicar')[0];
toque.style.color = 'pink'

//Manipulando pelo seletor
var cont = document.querySelector('div#container');
cont.style.background = 'blue'