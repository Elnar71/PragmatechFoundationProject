// let myname='Elnar'
// myname=8
// alert(myname)

// let a;
// console.log(a)
// let b=2;
// a=7
// console.log(a)

// let a=3
// let b=2
// let c="I am a"
// a+=6
// b+=7
// c+=" String"

// let sum= 10 + 12  (-, /, * working with same rule)
// console.log(sum)

// let d=2;
// d++

// let hasil= 2.1 * 3.4 (/)
// console.log(hasil)

// let qaliq=11%3
// console.log(qaliq)

// let e=12;
// e+=3; /*('means e=e+3') (*,/,-)*/

// let fullname='Elnar "Mammadov" ' (/*double string */)

// let education='Bakalavr bitdi. ' + 'Sira magistrdadir.'

// let cumle='1ci cumle.'
// cumle+=' 2ci cumle'

// let age=21
// let info='My age is ' + age + ' what about you?'

// let a='gozeldir'
// let b='Yasamaq '
// console.log(b+=a)

// let name
// let sozler='random bir sey'
// name=sozler.length


// let ad=''
// let soyad='Mammad'
// ad+=soyad[2]

// let bir
// let iki='qandax'
// bir=iki[3]

// let a
// let b='adasd'
// a=b[b.length-1]  /*sonuncu herfi gosterir*/

// function words(isim,sifet,fel){
//  let result=''
//  result+='paltar ' + isim + 'a ' + sifet + fel;
//  return result;
// }
// console.log(words('heyvan', 'boyuk ', 'geldi'))

// let myarray=['Elnar', 21];

// let elem=[['Mammad', 32] ['Agdam, 02']]

// let reqem=[10,20,30]
// ad=reqem[2]

// let oldarray=[20,21,22]
// oldarray[1]=25

// let arraymix=[[2,3,4], 5,6, [7,8]] 
// array=arraymix[0][1]

// let siblings=['anar', 'elnar','aynur']
// siblings.push('no one else')

// let array=['a','b','c']
// let remove=array.pop()  /* (arrayin son elementini cixarir ve gosterir burda bize 'c' ni gosterecek) */

// let ne=[1,2,3]
// sil=ne.shift()      /* bu ise birinci elementi cixarir ve gosterir burda bize '1' gosterecey */

// let letter=['d', 'e', 'f']
// a=letter.shift()
// letter.unshift('c')  /* unshiftun pushdan ferqi odurki bu arrayin evveline nese elave elemek ucundur*/

// function myfunc(){
//  console.log('first func')
// }
// myfunc()

// function data(d,e){
//  console.log(d*e)
// }
// data(3,4)

// let global=23
// function myfunc(){
//  output=''
//  if(typeof global != 'undefined'){
// output+=global+ 22
//  }
//  console.log(output)
// }
// myfunc()

// function sth(){
//  let a=5
//  console.log(a)
// }
// sth()

// let wear='hat'
// function myfunc(){
//  let wear = 'shirt'
//  return wear
// }
// console.log(myfunc) /* result will give us 'shirt' */
// console.log(wear)  /* result will give us 'hat' */

// function minus(num){
//  return num+2
// }
// console.log(minus(5))

// let sum=3
// function any(){
//  sum+=5              
// }                    /*bu funksiyani cagirsaq bize 'undefined' verecek   cunki 'return' istifade elemmisik */

// let process=0
// function sth(num){
//  return (num+2)/5
// }
// process=sth(18)

/*1:08:41 den onceki hisse qaranliq qaldi */

// function truorfalse(isittrue){
//  if(isittrue){
//   return 'yea'
//  }
//  return 'no'
// }
// console.log(truorfalse(false))

// function test(val){
//  if(val==12){
//   return 'equal'
//  }
//  return 'non-equal'
// }
// console.log(test(10))

// function ededler(a,b){
//   if(a==b){    /* eger birda === ifade 'true' beraber olmayacaq  */

//   return true
//  }
//  return false
// }
// console.log(ededler(10,'10'))

// function a(b){
//  if(b!==2){
//   return 'beraber deil'         /* !== menasi strict inequalitydir */
//  }
//  return 'beraberdir'
// }
// console.log(a('2'))

// function myfucn(eded){
//  if(eded <= 12 && eded == 3){
//   return 'hulala'
//  }
//  return 'nolala'
// }
// console.log(myfucn(3))

// function testelse(qal){
//  result=''
//  if(qal<15){
//   result='kicik'
//  }
//  else{
//   result= 'boyuk'
//  }
//  return result
// }
// console.log(testelse(20))

// let array = ['Baki', 'Qax', 'Zaqatala', 'Quba']
// function func(a, b) {
//  if (b == 4) {
//   return array[0]
//  } else if (a > b) {
//   return array[1]
//  } else if (a == 3) {
//   return array[3]
//  }
// }
// console.log(func(3, 6))

// function myfunc(val) {
//  let answer = ''
//  switch (val) {
//   case 1:
//    answer = 'alfa'
//    break;
//   case 2:
//    answer = 'betta'
//    break
//  }
//  return answer
// }
// console.log(myfunc(1))

// function swtichof(key) {
//  let cavab = ''
//  switch (key) {
//   case 'a':
// cavab= 'vov'
//    break;
//   case 'b':
//    cavab='how'
//    break;
//    default:
//     cavab='stuff'
//     break;
//  }
//  return cavab
// }
// console.log(swtichof(2))

// function adas(q) {
//  let ans = ''
//  switch (q) {
//   case 1:
//   case 2:
//   case 3:
//    ans = 'yes'
//    break
//  }
//  return ans
// }
// console.log(adas(1))

// function isless(a,b)
// {
//  return a<b
// }
// console.log(isless(19,29))

// let count = 0
// function sth(ss){
//  switch (ss) {
//   case 1:
//    case 2:
//     case 3:
// count++
//    break;
//  case 'a':
//   case 'b':
//   case 'c':
  
//    break;
//  }
//  let bet=''
//  if(count>0){
//   bet='damn'
//  }
//  return count + ' ' +  bet
// }
// sth(3),  sth(1)
// console.log(sth(2))

                      /*OBJECTS*/

let mydog={
 'name': 'pit',
 'leg': 4,
 'ears': 2,
 'friends': []
}
let dog = mydog.name  /* her iki formada yazila biler*/
// let dog=mydog['ears'] /* her iki formada yazila biler bu usuldan adeten property adinda bosluq olanda istifade olunur*/
console.log(dog)