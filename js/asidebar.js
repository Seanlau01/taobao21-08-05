const asidebar=document.querySelector('.asidebar')
const goods=document.querySelector('.goods')
const search_bar=document.querySelector('.fixed-search-bar')
let lock=true
document.addEventListener('scroll',function(){
    if(window.pageYOffset > 490){
        asidebar.style.position='fixed'
        asidebar.style.top=54+'px'
    }else{
        asidebar.style.position='absolute'
        asidebar.style.top=490+'px'
    }
    let a=document.createElement('a')
        a.href="javascript:;"
        a.id="backTop"
        a.innerText="返回"
    if(goods.offsetTop - window.pageYOffset<54){
        if(lock){
            asidebar.insertBefore(a,asidebar.children[2])
            backTop.addEventListener('click',function(){
                window.scroll(0,0)
            })
//节流锁
            lock=false
        }
    }else{
        if(asidebar.children.length==5){
            asidebar.removeChild(asidebar.children[2])
            lock=true
        }
    }
   
    if(window.scrollY>114){
        search_bar.style.display="block"
    }else{
        search_bar.style.display="none"
    }
})
