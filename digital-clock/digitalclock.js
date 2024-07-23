
function newTime(){
  let dateTime=new Date();
  let hr=dateTime.getHours();
  let min=dateTime.getMinutes();
  let sec=dateTime.getSeconds();
  if(hr>=12)
    document.getElementById("AM").innerHTML="PM"
  if(hr>12)
    hr=hr-12
  
  
document.getElementById("hour").innerHTML=twoDigit(hr)
document.getElementById("minutes").innerHTML=twoDigit(min)
document.getElementById("seconds").innerHTML=twoDigit(sec)

}
function twoDigit(a){
  if(a<10){
    a="0"+a
  }
  return a
}

setInterval(newTime,500)

