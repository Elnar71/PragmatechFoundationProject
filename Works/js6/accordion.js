let item=document.querySelector('.alert')
let lampstatus=true
item.addEventListener('click', function(){
if(lampstatus){
document.querySelector('.item p').style.display='block'
document.querySelector('.item .alert i').className = 'fas fa-arrow-circle-up'
lampstatus=false
}
else{
 document.querySelector('.item p').style.display = 'none'
 document.querySelector('.item .alert i').className = 'fas fa-arrow-circle-down'
 lampstatus=true
}
})