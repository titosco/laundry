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