const corpo = document.body
corpo.style.background = 'gray'

//Manipulando pela TAG
const a = document.getElementsByTagName('p')[0];
a.style.color = '#FEE3B8'

//Manipulando pelo NOME
const b = document.getElementsByName('user')[0];
b.style.color = '#BDE4E5'

//Manipulando pelo ID
const c = document.getElementById('here');
c.style.color = '#A5DAE6'

//Manipulando pelo SELETOR
const d = document.querySelector('p#select');
d.style.color = '#BBB1DE'

//Manipulando pela CLASSE
const e = document.getElementsByClassName('classe')[0];
e.style.color = '#EF8FAB'