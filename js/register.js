const register=document.querySelector('.shortcut .register')
const register2=document.querySelector('.main .register')
const register_form=document.querySelector('.register-form')
const close=register_form.querySelector('.close')
register.addEventListener('click',function(){
    register_form.style.display="block"
})
register2.addEventListener('click',function(){
    register_form.style.display="block"
})
close.addEventListener('click',function(){
    register_form.style.display="none"
})
register_form.addEventListener('mousedown',function(e){
    const x=e.pageX - register_form.offsetLeft
    const y=e.pageY - register_form.offsetTop
    function move(e){
        register_form.style.left=e.pageX - x + 'px'
        register_form.style.top=e.pageY - y +'px'
    }
    register_form.addEventListener('mousemove',move)
    register_form.addEventListener('mouseup',function(e){
        register_form.removeEventListener('mousemove',move)
    })
})