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