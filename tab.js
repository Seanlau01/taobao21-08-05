const TAB=document.querySelectorAll('.notice>li>a')
const CONT=document.querySelectorAll('.notice-content>li')

for(let j=0;j<TAB.length;j++){
    TAB[j].addEventListener('mouseover',()=>{
        console.log(TAB[j])
        for(let i=0;i<TAB.length;i++){
            TAB[i].classList.remove('active')
            CONT[i].classList.remove('active')
        }
        TAB[j].classList.add('active')
        TAB[3].classList.remove('active')
        TAB[4].classList.remove('active')
        CONT[j].classList.add('active')
    })
}
