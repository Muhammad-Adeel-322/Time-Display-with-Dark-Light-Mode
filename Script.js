let hours_sp = document.querySelector('.hrs')
let mints_sp = document.querySelector('.mints')
let seconds_sp = document.querySelector('.secs')
let btn = document.querySelector('.btn')
let htmlTag= document.querySelector('html')


btn.addEventListener('click',function(){
    if(btn.innerHTML == 'LightMode'){
        btn.innerHTML= 'DarkMode'
        htmlTag.classList.add('change')
    }
    else{
        btn.innerHTML= 'LightMode'
        htmlTag.classList.remove('change')

    }
})
setInterval(()=>{
    let getTime= new Date()

let hours= getTime.getHours()
let mints= getTime.getMinutes()
let seconds= getTime.getSeconds()


hours_sp.innerHTML= hours
mints_sp.innerHTML= `0${mints}`
seconds_sp.innerHTML= `0${seconds}`
if (seconds > 9){
seconds_sp.innerHTML= seconds
if(mints> 9){
mints_sp.innerHTML= mints
}
}
},1000)