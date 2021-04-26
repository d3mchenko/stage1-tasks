const inputs = document.querySelectorAll('.filters > label > input');
const btnRes = document.querySelector('.btn-reset');
const btnSave = document.querySelector('.btn-save');
const image = document.querySelector('img');
image.src = 'assets/img/img.jpg';
var date={night: 1, morning:1, day:1,evening:1};
const btnNext=document.querySelector('.btn-next');
const canvas = document.querySelector('canvas');

 
const next=document.querySelector(".btn-next");

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    document.querySelector(`output[name='result ${this.name}']`).value = this.value;
}


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));



btnRes.addEventListener('click', () => {
    inputs.forEach(input => {
        const suffix = input.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${input.name}`, 0 + suffix);
        document.querySelector(`output[name='result ${input.name}']`).value = 0;
        input.value = 0;
    })
    document.documentElement.style.setProperty(`--saturate`, 100 + '%');
    document.querySelector(`input[name='saturate']`).value = 100;
    document.querySelector(`output[name='result saturate']`).value = 100;
})




function nextPhoto(){
  var time=(new Date()).getHours();
  //download(document.location.href = photo.getAttribute('src'));
  if(time>=0 && time<6){
  if(date['night']>20){
  date['night']=1;
  }
  if(date['night']<10){
  image.src=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/0${date['night']}.jpg`;}
  else{
    image.src=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${date['night']}.jpg`;}
  date['night']++;
  }
  if(time>=6 && time<12){
  if(date['morning']>20){
  date['morning']=1;
  }
  if(date['morning']<10){
    image.src=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/0${date['morning']}.jpg`;}
  else{
    image.src=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${date['morning']}.jpg`;}
  date['morning']++;
  }
  if(time>=12 && time<20){
  if(date['day']>18){
  date['day']=1;
  }
  if(date['day']<10){
    image.src=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/0${date['day']}.jpg`;}
  else{
    image.src=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/${date['day']}.jpg`;}
  date['day']++;
  }
  if(time>=18 && time<=23){
  if(date['evening']>20){
  date['evening']=1;
  }
  if(date['evening']<10){
    image.src=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/0${date['evening']}.jpg`;}
  else{
    image.src=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${date['evening']}.jpg`;}
  date['evening']++;
  }
  }
  btnNext.addEventListener("click", nextPhoto);

function drawImage() {
    const img=new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.src=image.src;
    img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var link = document.createElement('a');
    link.download = 'picture.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
  }
  }

function SavePicture() {
  drawImage();
}
btnSave.addEventListener("click",SavePicture);




const btnFullScreen = document.querySelector('.openfullscreen');
function toggleScreen() {
    if(!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
    else {
        if(document.fullscreenEnabled) {
            document.exitFullscreen();
        }
    }
}
btnFullScreen.addEventListener('click', toggleScreen);
