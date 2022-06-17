let endDate= "Sat Jun 17 2022 21:56:00 GMT+0600 (Bangladesh Standard Time)";
document.getElementById("end-date").innerHTML=endDate;

const inputval= document.querySelectorAll("input");

function clock() {
  let end= new Date(endDate).getTime();
  let now= new Date();
  let diff = (end-now)/1000;
  if(diff<0){
    document.getElementById('surp').innerHTML="Surprise MadaFuka I'm Back";
    clearInterval(stoppls);
  }
  else{
  inputval[0].value=(Math.floor(diff/ 3600/24));
  inputval[1].value=(Math.floor(diff/3600)%24);
  inputval[2].value=(Math.floor(diff/60)%60);
  inputval[3].value=(Math.floor(diff)%60);
  }
}

let stoppls= setInterval(() => {
  console.log('time')
  clock();
}, 1000);
