
/*web w3 https://www.w3schools.com/jsref/prop_html_innerhtml.asp*/

let c=prompt("hola");// pedir un dato
localStorage.setItem("msg",c); //cargar al local

//document.getElementById("aqui").innerHTML="<h1>"+c+"</h1>";
//document.getElementById("aqui").innerHTML="<h1>"+"hola"+"</h1>";

/****************carga elmentos en div***************/
let carga="";
for (var i = 0; i < 20; i++) {
carga=carga+"<h1>"+i+"</h1>";
}
document.getElementById("aqui").innerHTML=carga;
/***************************************************/

let mostrar=localStorage.getItem("msg"); //traer del local

localStorage.removeItem("msg"); //eliminar del local
alert(mostrar);                 //mostrar mensaje

/*fetch

var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));


fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => {



});


fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));


*/
