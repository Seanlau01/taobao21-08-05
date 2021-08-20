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

listenToPreButtonClicked()
listenToNextButtonClicked()
listenToSlideNavClicked()
autoPlaySlideMain()
listenToPre2ButtonClicked()
listenToNext2ButtonClicked()
autoPlaySlideSub()

//封装函数区
function rmActive(item){
    for(var i=0;i<item.length;i++){
        item[i].className=""
    }
}
function addActive(item,index){
    item[index].className="active"
}
function move(item,n){
    item.style.left=-520*n+'px'
}
function listenToPreButtonClicked(){
    pre.onclick=function(){
        current--
        if(current===-1){
            current=4
        }
        move(sli_m_i_bx,current)
        rmActive(sli_nav_li)
        addActive(sli_nav_li,current)
    }
}
function listenToNextButtonClicked(){
    next.onclick=function(){
        current++
        if(current===5){
            current=0
        }
        move(sli_m_i_bx,current)
        rmActive(sli_nav_li)
        addActive(sli_nav_li,current)
    }
}

function listenToSlideNavClicked(){
    for(var i=0;i<sli_nav_li.length;i++){
        sli_nav_li[i].onclick=function(){
            rmActive(sli_nav_li)
            current=this.getAttribute('data-index')
            addActive(sli_nav_li,current)
            move(sli_m_i_bx,current)
        }
    
    }
}
function autoPlaySlideMain(){
    var timer=setInterval(function(){
        current++
        if(current===5){
            current=0
        }
        move(sli_m_i_bx,current)
        rmActive(sli_nav_li)
        addActive(sli_nav_li,current)
    },3000)
}
function listenToPre2ButtonClicked(){
    pre2.onclick=function(){
        current2--
        if(current2===-1){
            current2=4
        }
        move(sli_sub_i_bx,current2)
    }
}
function listenToNext2ButtonClicked(){
    next2.onclick=function(){
        current2++
        if(current2===5){
            current2=0
        }
        move(sli_sub_i_bx,current2)
    }
}
function autoPlaySlideSub(){
    var timer2=setInterval(function(){
        current2++
        if(current2===5){
            current2=0
        }
        move(sli_sub_i_bx,current2)
        crt2_indicator.innerText=current2+1
    },3000)
}
