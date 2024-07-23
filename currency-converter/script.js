let s=document.querySelectorAll(".currency")
let ival=document.querySelector("#input")
let op=document.querySelector("#result")
let btn=document.querySelector('#but')

fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayDropdown(res))


function displayDropdown(res){
  let currency=Object.entries(res)
  for(let i=0; i<currency.length; i++){
   let a=`<option value="${currency[i][0]}">${currency[i][0]}</option>`
   s[0].innerHTML+=a
   s[1].innerHTML+=a
  }
}

btn.addEventListener('click',()=>{
  let curr1=s[0].value
  let curr2=s[1].value
  let inp=ival.value
  if(curr1===curr2)
    alert("choose different currency")
  
  else
    convert(curr1,curr2,inp)
  
})

function convert(curr1,curr2,inp){
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inp}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    op.value=Object.values(data.rates)[0]
  });
}