let color=document.querySelector('.color')
let button=document.getElementById('but')
let cname=document.getElementById('span')
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
button.addEventListener('click',changecolor)
function changecolor(){
  let newcolor='#'
  for(let i=1; i<=6; i++){
    let ind=Math.floor(Math.random()*16)
    newcolor+=hex[ind]
    console.log(ind)
  }
  color.style.backgroundColor=newcolor
  cname.innerHTML=newcolor
}