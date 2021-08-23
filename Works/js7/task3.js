let btn=document.getElementsByTagName('.div')
btn.addEventListener('click', function(){
 document.querySelector('.divcontainer').removeChild(this)
})