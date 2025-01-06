function Benefits() {
   window.location.href = "Benefits.html"
}

function BreathingExercises() {
   window.location.href = "BreathingExercises.html"
}

function RelaxingSounds() {
   window.location.href = "RelaxingSounds.html"
}

function BinauralSounds() {
   window.location.href = "BinauralSounds.html"
}


let Countdown = document.getElementById("Countdown")
let Interval; 

function StartMeditate(a){
   var time = a * 60;

   Interval = setInterval(()=>{
      if(time <= 0){
         clearInterval(Interval)
         // alert("meditation time is over")
         let TimerSectionAlarm = document.getElementById("TimerSection-alarm")
         TimerSectionAlarm.innerHTML = `<audio controls autoplay> <source src="./audios/The New Darker You - The Tower of Light.mp3"></audio>`
         let audio = TimerSectionAlarm.querySelector("audio")
         audio.addEventListener("pause",()=> TimerSectionAlarm.remove())
      }
      else{
         time--;
         UpdateTimer(time)
      }
   },1000)
}

function UpdateTimer(GivenTime){
   let seconds = GivenTime % 60;
   let minutes = Math.floor(GivenTime / 60);

   minutes = minutes < 10 ? "0"+minutes : minutes;
   seconds = seconds < 10 ? "0"+seconds : seconds;

   Countdown.innerHTML = `${minutes}:${seconds}`
}