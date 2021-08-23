
let div=document.createElement('div')
div.style.width='300px'
div.style.height = '200px'
div.style.background='green'
div.style.position='absolute'
div.style.top = '50%'
div.style.left = '50%'
div.style.transform = "translate(-50%, -50%)"
div.style.textAlign='center'
document.body.appendChild(div)
let heading = document.createElement('h3')
let text=document.createTextNode('Welcome To My World')
heading.appendChild(text)
heading.style.lineHeight = '200px'
document.querySelector('div').appendChild(heading)



