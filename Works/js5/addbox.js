// Qutular elave etmek her click etdikce

let btn = document.querySelector('.btn')
let initialwidth = 200;
let initialmargin = 10;
let count = 1

btn.addEventListener('click', function () {
 let box = document.createElement('div')
 box.className = 'box'
 // box.setAttribute('class', 'box')

 box.style.width = `${initialwidth}px`
 box.style.marginRight = `${initialmargin}px`
 initialwidth += 20
 initialmargin += 10
 // box.setAttribute('style', `width:${initialwidth}px`)

 // Artan reqemler elave olunur

 box.innerHTML = count
 count++

 // Uzerine klikledikde qutularin silinmesi
 box.addEventListener('click', function () {
  document.querySelector('.boxContainer').removeChild(this)
  // this.style.display='none'
 })

 document.querySelector('.boxContainer').appendChild(box)
})