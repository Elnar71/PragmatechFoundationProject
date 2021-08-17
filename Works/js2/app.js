// Function Declaration
hi()

function hi() {
 console.log('Hi')
}

// Function Assignment or Expression

let hello = function () {
 console.log('Hello')
}
hello()

// Arrow Function
let Fine = () => {
 console.log('Fine')
}
Fine()

// Example 1
let a = 5

function func() {
 let a = 6
 console.log(a)
}

func()
console.log(a)

// Example 2

function fanc() {
 let a = 7
 console.log(a)

 function x() {
  let b = 12
  console.log(b);
 }
 x()
}
fanc()

// Example 3
// Void function

function give() {
 let c = 9
 console.log(c)

}

// Return function (yalnizca bir eded return ve deyeri ola biler ve returndnen sonra yazilan hec bir kod islemir)
// ve Returnu cagirmaq ucun biz funksiyani console.log vasitesile cagirmaliyiq tek yox!!

function back() {
 let c = 9
 console.log(c)
 return 'Something beautiful in my mind'
}
console.log(back())





// Example 4

function getdata() {
 let grade = prompt('Enter your point :')
 Number(grade)
 return grade

}

function check() {
 let netice = getdata()
 if (netice > 50) {
  console.log('Congratulations')
 } else {
  console.log('Unsuccessful')
 }
}
check()

// Example 5
function firstfunc() {
 return 5
}

function multiply5() {
 return (firstfunc()*5)
}

function pluseight(){
 console.log(multiply5() + 5)
}
pluseight()


// Example 6
// Default parametri yalniz funksiyani cagiran zaman bosh qalan yerin evezine teyin edir.
function topla(a=3,b=9){
 console.log(a+b)

}
topla(7,12)

// Example  7
function otherfunc(func){
 func()
}
otherfunc(topla)


Array

names = ['Quba', 'Baki', 'Zaqatala']

complexarray = [true, false, 4, [1, 3, 5, 8]]

