const tool=document.querySelector('.tool')
const goods=document.querySelector('.goods')
const search_bar=document.querySelector('.fixed-search-bar')
let lock=true
document.addEventListener('scroll',function(){
    if(window.pageYOffset > 490){
        tool.style.position='fixed'
        tool.style.top=54+'px'
    }else{
        tool.style.position='absolute'
        tool.style.top=490+'px'
    }
    let a=document.createElement('a')
        a.href="javascript:;"
        a.id="backTop"
        a.innerText="返回"
    if(goods.offsetTop - window.pageYOffset<54){
        if(lock){
            tool.insertBefore(a,tool.children[2])
            backTop.addEventListener('click',function(){
                window.scroll(0,0)
            })
            lock=false
        }
    }else{
        if(tool.children.length==5){
            tool.removeChild(tool.children[2])
            lock=true
        }
    }
   
    if(window.scrollY>114){
        search_bar.style.display="block"
    }else{
        search_bar.style.display="none"
    }
})
