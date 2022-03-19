let ul=document.getElementById('list');
let btn=document.getElementById('btn');

btn.addEventListener('click', (e)=>{
    btn.style.height='50px;'
    if(ul.style.display=='none'){
        ul.style.display='inline-flex';
    }
    else{
        ul.style.display='none';
    }
})