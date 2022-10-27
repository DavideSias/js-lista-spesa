/*
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

Creo un array con la lista della spesa
creo una variabile let i = 0
While la variabile i è minore alla lunghezza dell'array 
    stampare gli elementi in pagina
    i++;
*/

const arrItemList = [
	'verdura',
    'carne',
    'pasta',
    'pane',
    'yogurt',
    'latte',
];

const eleList = document.querySelector('.items-list');

let i = 0;
while (i < arrItemList.length){
    eleList.innerHTML += `<li>${arrItemList[i]}</li>`;
    i++;
}