let background = document.getElementById('background')
let moon = document.getElementById('moon')
let rocks = document.getElementById('rocks')
let text = document.getElementById('text')
let btn = document.getElementById('btn')

window.addEventListener('scroll',function(){
let value = window.scrollY;
let valueBtn = 
moon.style.transform = 'translateX(-'+value*0.4+'px)'
text.style.transform = 'translateX('+value*0.5+'px)'
btn.style.transform = 'translateY('+value*0.2+'px)'
rocks.style.transform = 'scale(1.0'+value*0.2+')'

console.log(value)

})


