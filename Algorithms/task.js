                         //   /* Task 1*/
 let str = 'Proqramalaşdırma nə qədər çox şey bildiyinizlə yox, bildiyinizlə ortaya çıxardığınız işlərlə maraqlanır';

 /*1)*/ countofchar = str.length
console.log(countofchar)

/*2)*/ countofletters = str.length - 12
console.log(countofletters)

/*5)*/ erasinglast2words = str.replace(/işlərlə maraqlanır/g, '')
console.log(erasinglast2words)

/*6)*/ twostringsbycomma = str.split("," )
console.log(twostringsbycomma)



                          /*Task 2*/
let nums = [1, 2, 3, 6, 7, 8, 23, 78, 34, 12]
/*1)*/
let sum = 0
for (let i = 0; i < nums.length; i++) {
    sum+=nums[i]
}
console.log(sum)


/*2)*/
nums.sort(function (a, b) {
 return b - a
})
console.log(nums)

/*4)*/
let sqr=[]
let n = [1, 2, 3, 6, 7, 8, 23, 78, 34, 12]
let p=2
for(let i=0; i<n.length; i++){
sqr.push(Math.pow(n[i], p))
}
console.log(sqr)

/*5)*/
let addodd = 0
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 != 0) {
    addodd+= nums[i]
  }

}
console.log(addodd)

/*7)*/
let odds = (nums.filter(n => n % 2))
console.log(odds)

