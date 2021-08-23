
// BUILT- IN Class
 // Class
class human{
 // qurucu funksiya(obyekt istehsal edir)
 constructor(_name){
  // property
this.name=_name
 }
 // method(behavior)
 showName(){
  console.log(this.name)
 }
}
obj= new human()


// Constructorun returni hemise obyektdir.
// prompt methodu yalniz string ve ya null return eleye biler
 
// METHODS

prompt().length
console.clear()
Math.random()
Math.floor(Math.random()*100)


// (...items) her hansi bir key qarwisina 3 noqte qoyan zaman bu hemin keyin valuelerini array olaraq qebul edir

function foo(...arrow){
 console.log(arrow)
}
foo(1,2,3,4,5)


// DOM

// Create

// Ne yaratmaq istirsen? --h1

let heading=document.createElement('h1')
heading.innerHTML='It is Heading'
document.body.appendChild(heading)


// HTML-de Var olan elementin datasini cagirmaq

document.querySelector('h1')


// Elementin silinmesi

document.body.removeChild(document.querySelector('h2'))

// window.innerWidth 
// window.location

