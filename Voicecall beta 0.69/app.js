const localVideo = document.getElementById('screenDisplay');
const mic = document.getElementById("micImg");
let camStat = null;
let camButton= null;

let micStream= null;
let muteToggle= null;

let streamStatus = null;


function getUserMedia() {
  navigator.mediaDevices.getUserMedia({video:true, audio:true}).then(stream => {
    
    micStream = stream;

    document.querySelector("audio").srcObject = stream;

    window.stream = stream;
    camStat = stream;

  }).catch(error => {
    console.error('No se pudo obtener acceso al microfono o camara')
  })
}

function startCam() {
if (!(camButton)) {
  camButton=true;
  const videoTracks = camStat.getVideoTracks();
  
  localVideo.style.height = "auto";
  
  localVideo.srcObject = camStat;

  document.getElementById('camaraImg').src = 'Icons/NCamara.png';

  console.log('viedo device: '+videoTracks[0].label)
}else{

  const tracks = camStat.getTracks();
  
  camButton=null;
   
  localVideo.style.height = "480px";

  localVideo.srcObject = null;

  document.getElementById('camaraImg').src = 'Icons/Camara.png';

}
}

function micMute() {

  const audioTracks = micStream.getAudioTracks();

  if (!(muteToggle)){
   
    muteToggle = true;
    mic.src = "./Icons/Nmicro.png"    

    audioTracks.forEach(track => {
      track.enabled = false;
    });

  }else{

    muteToggle = false;
    mic.src = "./Icons/Micro.png"   

    audioTracks.forEach(track => {
      track.enabled = true;
    });

  }
}

getUserMedia(); 

