var sli_m=document.getElementsByClassName('slide-main')[0]
var sli_m_i_bx=sli_m.getElementsByClassName('img-box')[0]
var pre=sli_m.getElementsByClassName('pre')[0]
var next=sli_m.getElementsByClassName('next')[0]
var sli_nav=sli_m.getElementsByClassName('slide-nav')[0]
var sli_nav_ul=sli_nav.getElementsByTagName('ul')[0]
var sli_nav_li=sli_nav_ul.getElementsByTagName('li')
var sli_sub=document.getElementsByClassName('slide-sub')[0]
var sli_sub_i_bx=sli_sub.getElementsByClassName('img-box')[0]
var pre2=sli_sub.getElementsByClassName('pre')[0]
var next2=sli_sub.getElementsByClassName('next')[0]

var current=0
var current2=0

next.onclick=function(){
    current++
    if(current===5){
        current=0
    }
    sli_m_i_bx.style.left=-520*current+'px'
    for(var j=0;j<sli_nav_li.length;j++){
        sli_nav_li[j].className=""
    }
    sli_nav_li[current].className="active"
}
pre.onclick=function(){
    current--
    if(current===-1){
        current=4
    }
    sli_m_i_bx.style.left=-520*current+'px'
    for(var j=0;j<sli_nav_li.length;j++){
        sli_nav_li[j].className=""
    }
    sli_nav_li[current].className="active"
}
for(var i=0;i<sli_nav_li.length;i++){
    sli_nav_li[i].onclick=function(){
        for(var j=0;j<sli_nav_li.length;j++){
            sli_nav_li[j].className=""
        }
        current=this.getAttribute('data-index')
        console.log(sli_nav_li[current])
        sli_nav_li[current].className="active"
        sli_m_i_bx.style.left=-520*current+'px'
    }

}
var timer=setInterval(function(){
    current++
    if(current===5){
        current=0
    }
    sli_m_i_bx.style.left=-520*current+'px'
    for(var j=0;j<sli_nav_li.length;j++){
        sli_nav_li[j].className=""
    }
    sli_nav_li[current].className="active"
},3000)

next2.onclick=function(){
    current2++
    if(current2===5){
        current2=0
    }
    sli_sub_i_bx.style.left=-520*current2+'px'
}
pre2.onclick=function(){
    console.log(current2)
    console.log(sli_sub_i_bx)
    current2--
    if(current2===-1){
        current2=4
    }
    sli_sub_i_bx.style.left=-520*current2+'px'
}
var timer2=setInterval(function(){
    current2++
    if(current2===5){
        current2=0
    }
    sli_sub_i_bx.style.left=-520*current2+'px'
},3000)