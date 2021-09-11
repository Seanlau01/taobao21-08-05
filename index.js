window.addEventListener('load',function(){
    const avatar=document.querySelector('.user .avatar img')
    const avatar_bottom_btns=document.querySelector('.main .box .col-right .buttons')
    const register=document.querySelector('.shortcut .shortcut-container .register')
    let params=location.search
    let arr=params.substr(1).split('=')
       if(arr[1]){
        uname_1.innerText=arr[1]
        uname_2.innerText='Hi! '+arr[1]
        register.innerText="手机逛淘宝"
        avatar.src="widget/kefu.png"
        avatar.style.width="50px"
        avatar_bottom_btns.innerHTML=`
        <ul style="font-size:13px;width:100%">
           <li class="fl" style="width:25%;height:36px;">
            <a href="javascript:;" style="display:block">
            <span style="display:block;text-align:center;color:red;">0</span>
            <span style="display:block;text-align:center;">待收货</span>
            </a>
           </li>
           <li class="fl" style="width:25%;height:36px;">
            <a href="javascript:;" style="display:block">
            <span style="display:block;text-align:center;color:red;">0</span>
            <span style="display:block;text-align:center;">待发货</span>
            </a>
           </li>
           <li class="fl" style="width:25%;height:36px;">
            <a href="javascript:;" style="display:block">
            <span style="display:block;text-align:center;color:red;">0</span>
            <span style="display:block;text-align:center;">待付款</span>
            </a>
           </li>
           <li class="fl" style="width:25%;height:36px;">
            <a href="javascript:;" style="display:block">
            <span style="display:block;text-align:center;color:red;">0</span>
            <span style="display:block;text-align:center;">待评价</span>
            </a>
           </li>
        </ul>
        `
       }
  
   
































})