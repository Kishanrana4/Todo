const items=document.querySelector('.list');
items.addEventListener('click',e=>{
    if(e.target.tagName==='LI')
    {
        if(e.target.style.textDecoration!=="line-through")
        e.target.style.textDecoration="line-through";
        else
        e.target.style.textDecoration="none"
        // e.target.remove();
    }
});
items.addEventListener('click',e=>{
    if(e.target.tagName==='I')
    {
        e.target.parentElement.remove();
    }
});
const button=document.querySelector('.sub');
const input=document.querySelector('.input');
const guide=document.querySelector('.guide');
button.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(input.value.trim()==='')
    {
        guide.innerHTML="**Field can't be empty!";
    }
    else
    {
        items.innerHTML+=`<li>${input.value.trim()}<i class="far fa-trash-alt del-icon"></i></li>`;
        // console.log(input.value);
        input.value='';
        guide.innerHTML='';
    }
})
const image=document.querySelector(".image");
let num=0;
setInterval(()=>{
        num++;
        image.setAttribute('src',`https://source.unsplash.com/random/1920x1080/?quotes,quote&${num}`);
        console.log("changed");

    },9000
    // image.src="https://source.unsplash.com/random/1920x1080/?quotes",5000
)
