
const menuList = document.getElementById('menuList');

menuList.style.maxHeight = '0px';

function togglemenu(){
  if(menuList.style.maxHeight == '0px')
  {
    menuList.style.maxHeight = '210px';
  }
  else
  {
    menuList.style.maxHeight = '0px';

  }
}
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click',() => {
  if(!menuOpen){
    menuBtn.classList.add('open');
    menuOpen = true;
  }
  else{
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
})

const myslide = document.querySelectorAll('.myslider'),
    dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter); 

let timer = setInterval(autoslide, 8000);
function autoslide(){
  counter += 1;
  slidefun(counter);
}
function plusSlides(n){
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n){
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer(){
  clearInterval(timer);
  timer = setInterval(autoslide, 8000);
}
function slidefun(n){
  let i;
  for(i = 0; i< myslide.length; i++){
    myslide[i].style.display = "none";
  }
  for(i = 0; i< dot.length; i++){
    dot[i].classList.remove('active');
  }
  if(n > myslide.length){
    counter = 1;
  }
  if(n < 1){
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].classList.add('active');

}

// try shit
var acc = document.getElementsByClassName('tt-item__title');
var i;
var len = acc.length;
for(i = 0; i < len; i++){
  acc[i].addEventListener('click', function(){
    this.classList.toggle('active')
    var panel = this.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    }
    else{
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  })
}
var meniBtn = document.querySelectorAll('.meni-btn');
var s;
var meni = meniBtn.length
let meniOpen = false;
for(s = 0; s < meni ; s++){
  meniBtn[s].addEventListener('click', function (){
    if(!meniOpen){
      this.classList.add('access');
      meniOpen = true;
    }
    else{
      this.classList.remove('access');
      meniOpen = false;
    };
  })
}

// try shit stops
// form starts
var form = document.getElementsByClassName('button');
var j;
var ben = form.length;
for(j = 0; j < ben; j++){
  form[j].addEventListener('click', function(){
    document.querySelector(".popup").classList.add("active")
  });
}
document.querySelector(".popup .close-btn").addEventListener('click',function(){
  document.querySelector(".popup").classList.remove("active")

});
// form ends