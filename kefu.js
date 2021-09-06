const KEFU=document.querySelector('.kefu')

KEFU.addEventListener('mousedown',function(e){
    const x=e.pageX - KEFU.offsetLeft
    const y=e.pageY - KEFU.offsetTop
    console.log(x)
    function move(e){
        KEFU.style.left=e.pageX - x + 'px'
        KEFU.style.top=e.pageY - y +'px'
    }
    KEFU.addEventListener('mousemove',move)
    KEFU.addEventListener('mouseup',function(e){
        KEFU.removeEventListener('mousemove',move)
    })
})