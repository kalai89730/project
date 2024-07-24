const but=document.querySelector("button")
let speech=new SpeechSynthesisUtterance();


but.addEventListener("click",()=>{
  

  speech.text=document.querySelector("textarea").value;
  speech.volume=1;
  speech.rate=1;
  speech.pitch=1;

  window.speechSynthesis.speak(speech);
});