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

// price list start
let products = {
  data:
  [
    {
      productName: 'Complete Suit Full Laundry',
      category: "Suit",
      price: '1800',
      image: 'images (12).jpeg'
    },
    {
      productName: 'Complete Suit Express Service',
      category: "Suit",
      price: '3000',
      image: 'images (12).jpeg'
    },
    {
      productName: 'Complete Suit Iron only',
      category: "Suit",
      price: '750',
      image: 'images (12).jpeg'
    },
    {
      productName: 'Complete Suit Dry Cleaning',
      category: "Suit",
      price: '3500',
      image: 'images (12).jpeg'
    },
    {
      productName: 'Female Suit Full Laundry',
      category: "Suit",
      price: '1000',
      image: 'images (13).jpeg'
    },
    {
      productName: 'Female Suit Express Service',
      category: "Suit",
      price: '2000',
      image: 'images (13).jpeg'
    },
    {
      productName: 'Female Suit Iron Only',
      category: "Suit",
      price: '500',
      image: 'images (13).jpeg'
    },
    {
      productName: 'Female Suit Dry Cleaning',
      category: "Suit",
      price: '2500',
      image: 'images (13).jpeg'
    },
    {
      productName: 'Complete Agbada Full Laundry',
      category: "Trad",
      price: '1700',
      image: 'images (14).jpeg'
    },
    {
      productName: 'Complete Agbada Express Service',
      category: "Trad",
      price: '3400',
      image: 'images (14).jpeg'
    },
    {
      productName: 'Complete Agbada Iron Only',
      category: "Trad",
      price: '750',
      image: 'images (14).jpeg'
    },
    {
      productName: 'Complete Agbada Iron & Starch',
      category: "Trad",
      price: '1000',
      image: 'images (14).jpeg'
    },
    {
      productName: 'Complete Agbada Dry Cleaning',
      category: "Trad",
      price: '3000',
      image: 'images (14).jpeg'
    },
    {
      productName: 'Complete Agbada(white)Full Laundry',
      category: "Trad",
      price: '2000',
      image: 'images (15).jpeg'
    },
    {
      productName: 'Complete Agbada(white)Express Service',
      category: "Trad",
      price: '4000',
      image: 'images (15).jpeg'
    },
    {
      productName: 'Complete Agbada(white)Iron Only',
      category: "Trad",
      price: '1000',
      image: 'images (15).jpeg'
    },
    {
      productName: 'Complete Agbada(white)Starch & Iron',
      category: "Trad",
      price: '1200',
      image: 'images (15).jpeg'
    },
    {
      productName: 'Complete Agbada(white)Dry Cleaning',
      category: "Trad",
      price: '3500',
      image: 'images (15).jpeg'
    },
    {
      productName: 'Native(Up & Down)Full Laundry',
      category: "Trad",
      price: '700',
      image: 'images (17).jpeg'
    },
    {
      productName: 'Native(Up & Down)Express Service',
      category: "Trad",
      price: '1400',
      image: 'images (17).jpeg'
    },
    {
      productName: 'Native(Up & Down)Iron Only',
      category: "Trad",
      price: '350',
      image: 'images (17).jpeg'
    },
    {
      productName: 'Native(Up & Down)Starch & Iron',
      category: "Trad",
      price: '500',
      image: 'images (17).jpeg'
    },
    {
      productName: 'Native(Up & Down)Dry Cleaning',
      category: "Trad",
      price: '1700',
      image: 'images (17).jpeg'
    },
    {
      productName: 'Native(Up & Down)(White)Full Laundry',
      category: "Trad",
      price: '1000',
      image: 'images (18).jpeg'
    },
    {
      productName: 'Native(Up & Down)(White)Express Service',
      category: "Trad",
      price: '2000',
      image: 'images (18).jpeg'
    },
    {
      productName: 'Native(Up & Down)(White)Iron Only',
      category: "Trad",
      price: '500',
      image: 'images (18).jpeg'
    },
    {
      productName: 'Native(Up & Down)(White)Starch & Iron',
      category: "Trad",
      price: '700',
      image: 'images (18).jpeg'
    },
    {
      productName: 'Native(Up & Down)(White)Dry Cleaning',
      category: "Trad",
      price: '2000',
      image: 'images (18).jpeg'
    },
    {
      productName: 'Native(Kaftan)Full Laundry',
      category: "Trad",
      price: '400',
      image: 'images (16).jpeg'
    },
    {
      productName: 'Native(Kaftan)Express Service',
      category: "Trad",
      price: '800',
      image: 'images (16).jpeg'
    },
    {
      productName: 'Native(Kaftan)Iron Only',
      category: "Trad",
      price: '200',
      image: 'images (16).jpeg'
    },
    {
      productName: 'Native(Kaftan)Starch & Iron',
      category: "Trad",
      price: '250',
      image: 'images (16).jpeg'
    },
    {
      productName: 'Native(Kaftan)Dry Cleaning',
      category: "Trad",
      price: '800',
      image: 'images (16).jpeg'
    },
    {
      productName: 'Shirt Full Laundry',
      category: "Shirt",
      price: '400',
      image: 'images (19).jpeg'
    },
    {
      productName: 'Shirt Express Service',
      category: "Shirt",
      price: '800',
      image: 'images (19).jpeg'
    },
    {
      productName: 'Shirt Iron Only',
      category: "Shirt",
      price: '200',
      image: 'images (19).jpeg'
    },
    {
      productName: 'Shirt Starch & Iron',
      category: "Shirt",
      price: '350',
      image: 'images (19).jpeg'
    },
    {
      productName: 'Shirt Dry Cleaning',
      category: "Shirt",
      price: '1000',
      image: 'images (19).jpeg'
    },
    {
      productName: 'Shirt(White)Full Laundry',
      category: "Shirt",
      price: '500',
      image: 'images (20).jpeg'
    },
    {
      productName: 'Shirt(White)Express Service',
      category: "Shirt",
      price: '1000',
      image: 'images (20).jpeg'
    },
    {
      productName: 'Shirt(White)Iron Only',
      category: "Shirt",
      price: '250',
      image: 'images (20).jpeg'
    },
    {
      productName: 'Shirt(White)Starch & Iron',
      category: "Shirt",
      price: '300',
      image: 'images (20).jpeg'
    },
    {
      productName: 'Shirt(White)Dry Cleaning',
      category: "Shirt",
      price: '1500',
      image: 'images (20).jpeg'
    },
    {
      productName: 'T-Shirt(Polo)Full Laundry',
      category: "Shirt",
      price: '400',
      image: 'images (21).jpeg'
    },
    {
      productName: 'T-Shirt(Polo)Express Laundry',
      category: "Shirt",
      price: '800',
      image: 'images (21).jpeg'
    },
    {
      productName: 'T-Shirt(Polo)Iron Only',
      category: "Shirt",
      price: '200',
      image: 'images (21).jpeg'
    },
    {
      productName: 'Trousers Full Laundry',
      category: "Trousers",
      price: '400',
      image: 'images (22).jpeg'
    },
    {
      productName: 'Trousers Express Service',
      category: "Trousers",
      price: '800',
      image: 'images (22).jpeg'
    },
    {
      productName: 'Trousers Iron Only',
      category: "Trousers",
      price: '200',
      image: 'images (22).jpeg'
    },
    {
      productName: 'Trousers Dry Cleaning',
      category: "Trousers",
      price: '1000',
      image: 'images (22).jpeg'
    },
    {
      productName: 'Jeans(Chinos) Full Laundry',
      category: "Jeans",
      price: '500',
      image: 'images (23).jpeg'
    },
    {
      productName: 'Jeans(Chinos) Express Service',
      category: "Jeans",
      price: '1000',
      image: 'images (23).jpeg'
    },
    {
      productName: 'Jeans(Chinos) Iron Only',
      category: "Jeans",
      price: '250',
      image: 'images (23).jpeg'
    },
    {
      productName: 'Jeans(Short) Full Laundry',
      category: "Jeans",
      price: '300',
      image: 'images (24).jpeg'
    },
    {
      productName: 'Jeans(Short) Express Service',
      category: "Jeans",
      price: '600',
      image: 'images (24).jpeg'
    },
    {
      productName: 'Jeans(Short) Iron Only',
      category: "Jeans",
      price: '150',
      image: 'images (24).jpeg'
    },
    {
      productName: 'Skirt(Short) Full Laundry',
      category: "Trousers",
      price: '300',
      image: 'images (25).jpeg'
    },
    {
      productName: 'Skirt(Short) Express Service',
      category: "Trousers",
      price: '600',
      image: 'images (25).jpeg'
    },
    {
      productName: 'Skirt(Short) Iron Only',
      category: "Trousers",
      price: '150',
      image: 'images (25).jpeg'
    },
    {
      productName: 'Skirt(Short) Dry Cleaning',
      category: "Trousers",
      price: '1000',
      image: 'images (25).jpeg'
    },
    {
      productName: 'Skirt(long) Full Laundry',
      category: "Trousers",
      price: '400',
      image: 'images (26).jpeg'
    },
    {
      productName: 'Skirt(long) Express Service',
      category: "Trousers",
      price: '800',
      image: 'images (26).jpeg'
    },
    {
      productName: 'Skirt(long) Iron Only',
      category: "Trousers",
      price: '200',
      image: 'images (26).jpeg'
    },
    {
      productName: 'Skirt(long) Dry Cleaning',
      category: "Trousers",
      price: '1200',
      image: 'images (26).jpeg'
    },
    {
      productName: 'Gown(Short) Full Laundry',
      category: "Gowns",
      price: '500',
      image: 'images (27).jpeg'
    },
    {
      productName: 'Gown(Short) Express Service',
      category: "Gowns",
      price: '1000',
      image: 'images (27).jpeg'
    },
    {
      productName: 'Gown(Short) Iron Only',
      category: "Gowns",
      price: '250',
      image: 'images (27).jpeg'
    },
    {
      productName: 'Gown(Short) Dry Cleaning',
      category: "Gowns",
      price: '1200',
      image: 'images (27).jpeg'
    },
    {
      productName: 'Gown(Long) Full Laundry',
      category: "Gowns",
      price: ' 700',
      image: 'images (28).jpeg'
    },
    {
      productName: 'Gown(Long) Express Service',
      category: "Gowns",
      price: ' 1400',
      image: 'images (28).jpeg'
    },
    {
      productName: 'Gown(Long) Iron Only',
      category: "Gowns",
      price: ' 300',
      image: 'images (28).jpeg'
    },
    {
      productName: 'Gown(Long) Dry Cleaning',
      category: "Gowns",
      price: '1500',
      image: 'images (28).jpeg'
    },
    {
      productName: 'Stoned Long Gown Full Laundry',
      category: "Gowns",
      price: '1000',
      image: 'images (29).jpeg'
    },
    {
      productName: 'Stoned Long Gown Express Service',
      category: "Gowns",
      price: '2000',
      image: 'images (29).jpeg'
    },
    {
      productName: 'Stoned Long Gown Iron Only',
      category: "Gowns",
      price: '500',
      image: 'images (29).jpeg'
    },
    {
      productName: 'Iro & Buba Full Laundry',
      category: "Trad",
      price: '800',
      image: 'images (30).jpeg'
    },
    {
      productName: 'Iro & Buba Express Service',
      category: "Trad",
      price: '1600',
      image: 'images (30).jpeg'
    },
    {
      productName: 'Iro & Buba Iron Only',
      category: "Trad",
      price: '400',
      image: 'images (30).jpeg'
    },
    {
      productName: 'Iro & Buba Starch & Iron',
      category: "Trad",
      price: '500',
      image: 'images (30).jpeg'
    },
    {
      productName: 'Iro & Buba Dry Cleaning',
      category: "Trad",
      price: '1500',
      image: 'images (30).jpeg'
    },
    {
      productName: 'Blazers Full Laundry',
      category: "Suit",
      price: '800',
      image: 'images (31).jpeg'
    },
    {
      productName: 'Blazers Express Service',
      category: "Suit",
      price: '1600',
      image: 'images (31).jpeg'
    },
    {
      productName: 'Blazers Iron Only',
      category: "Suit",
      price: '400',
      image: 'images (31).jpeg'
    },
    {
      productName: 'Blazers Dry Cleaning',
      category: "Suit",
      price: '2000',
      image: 'images (31).jpeg'
    },
    {
      productName: 'Jalamia Full Laundry',
      category: "Native",
      price: '600',
      image: 'images (32).jpeg'
    },
    {
      productName: 'Jalamia Express Service',
      category: "Native",
      price: '1200',
      image: 'images (32).jpeg'
    },
    {
      productName: 'Jalamia Iron Only',
      category: "Native",
      price: '300',
      image: 'images (32).jpeg'
    },
    {
      productName: 'Jalamia Dry Cleaning',
      category: "Native",
      price: '1500',
      image: 'images (32).jpeg'
    },
    {
      productName: 'Track suit/Jogger Full Laundry',
      category: "Others",
      price: '800',
      image: 'images (33).jpeg'
    },
    {
      productName: 'Track suit/Jogger Express Laundry',
      category: "Others",
      price: '1600',
      image: 'images (33).jpeg'
    },
    {
      productName: 'Track suit/Jogger Iron Only',
      category: "Others",
      price: '400',
      image: 'images (33).jpeg'
    },
    {
      productName: 'Hoodie Full Laundry',
      category: "Others",
      price: '600',
      image: 'images (34).jpeg'
    },
    {
      productName: 'Hoodie Express Service',
      category: "Others",
      price: '1200',
      image: 'images (34).jpeg'
    },
    {
      productName: 'Hoodie Iron Only',
      category: "Others",
      price: '300',
      image: 'images (34).jpeg'
    },
    {
      productName: 'Cardigan Full Laundry',
      category: "Others",
      price: '500',
      image: 'images (36).jpeg'
    },
    {
      productName: 'Cardigan Express Service',
      category: "Others",
      price: '1000',
      image: 'images (36).jpeg'
    },
    {
      productName: 'Cardigan Iron Only',
      category: "Others",
      price: '250',
      image: 'images (36).jpeg'
    },
    {
      productName: 'Blouse Full Laundry',
      category: "Others",
      price: '400',
      image: 'images (37).jpeg'
    },
    {
      productName: 'Blouse Express Laundry',
      category: "Others",
      price: '800',
      image: 'images (37).jpeg'
    },
    {
      productName: 'Blouse Iron Only',
      category: "Others",
      price: '200',
      image: 'images (37).jpeg'
    },
    {
      productName: 'Sultana Full Laundry',
      category: "Others",
      price: '600',
      image: 'images (38).jpeg'
    },
    {
      productName: 'Sultana Express Service',
      category: "Others",
      price: '1200',
      image: 'images (38).jpeg'
    },
    {
      productName: 'Sultana Iron Only',
      category: "Others",
      price: '300',
      image: 'images (38).jpeg'
    },
    {
      productName: 'Bedsheet+Pillowcase Full Laundry',
      category: "Others",
      price: '700',
      image: 'images (39).jpeg'
    },
    {
      productName: 'Bedsheet+Pillowcase Express Service',
      category: "Others",
      price: '1400',
      image: 'images (39).jpeg'
    },
    {
      productName: 'Bedsheet+Pillowcase Iron Only',
      category: "Others",
      price: '350',
      image: 'images (39).jpeg'
    },
    {
      productName: 'Towel Full Laundry',
      category: "Others",
      price: '500',
      image: 'images (40).jpeg'
    },
    {
      productName: 'Towel Express Laundry',
      category: "Others",
      price: '1000',
      image: 'images (40).jpeg'
    },
    {
      productName: 'Duvet Full Laundry',
      category: "Others",
      price: '1500',
      image: 'images (41).jpeg'
    },
    {
      productName: 'Duvet Express Laundry',
      category: "Others",
      price: '2500',
      image: 'images (41).jpeg'
    },
    {
      productName: 'Curtains Full Laundry',
      category: "Others",
      price: '600',
      image: 'images (42).jpeg'
    },
    {
      productName: 'Curtains Express Service',
      category: "Others",
      price: '1200',
      image: 'images (42).jpeg'
    },
    {
      productName: 'Cap Full Laundry',
      category: "Others",
      price: '200',
      image: 'images (43).jpeg'
    },
    {
      productName: 'Cap Express Service',
      category: "Others",
      price: '400',
      image: 'images (43).jpeg'
    },
    {
      productName: 'Boxer Full Laundry',
      category: "Others",
      price: '300',
      image: 'images (44).jpeg'
    },
    {
      productName: 'Boxer Express Service',
      category: "Others",
      price: '500',
      image: 'images (44).jpeg'
    },
    {
      productName: 'Boxer Iron Only',
      category: "Others",
      price: '150',
      image: 'images (44).jpeg'
    },
    {
      productName: 'Singlet Full Laundry',
      category: "Others",
      price: '250',
      image: 'images (45).jpeg'
    },
    {
      productName: 'Singlet Express Service',
      category: "Others",
      price: '500',
      image: 'images (45).jpeg'
    },
    {
      productName: 'Singlet Iron Only',
      category: "Others",
      price: '250',
      image: 'images (45).jpeg'
    },
    {
      productName: 'Wedding Gown Full Laundry',
      category: "Gowns",
      price: '4000',
      image: 'images (46).jpeg'
    },
    {
      productName: 'Wedding Gown Express Service',
      category: "Gowns",
      price: '7000',
      image: 'images (46).jpeg'
    },
    {
      productName: 'Wedding Gown Iron Only',
      category: "Gowns",
      price: '2000',
      image: 'images (46).jpeg'
    },
    {
      productName: 'Wedding Gown Dry Cleaning',
      category: "Gowns",
      price: '8000',
      image: 'images (46).jpeg'
    },
  ],
};

for (let i of products.data){
  // create card
  let card = document.createElement("div");
  // card should have category and should stay hidden initally
  card.classList.add('card', i.category, 'hide');
  // image div
  let imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');
  // img tag
  let image = document.createElement('img');
  image.setAttribute('src', i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  // container
  let container = document.createElement('div');
  container.classList.add('container');
  // product name
  let name = document.createElement('h4');
  name.classList.add('product-name');
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  // price
  let price = document.createElement('h5');
  price.innerText = "#" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById('products').appendChild(card);
}

// parameter passed from button (parameter same as category)
function filterProduct(value){
  // Button class code
  let buttons = document.querySelectorAll('.button-value');
  buttons.forEach((button) => {
    // check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()){
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
  // select all cards
  let elements = document.querySelectorAll('.card');
  // loop through all cards
  elements.forEach((element) => {
    // display all cards on 'all' button click
    if(value == 'all'){
      element.classList.remove('hide');
    }
    else{
      // check if element contains category class
      if(element.classList.contains(value)){
        // display element based on category
        element.classList.remove('hide');
      }
      else{
        // hide other elements
        element.classList.add('hide');
      }
    }
  });
}

// search button click
document.getElementById('search').addEventListener('click', () =>{
  // initiazations
  let searchInput = document.getElementById('search-input').value;
  let elements = document.querySelectorAll('.product-name');
  let cards = document.querySelectorAll('.card');
  

  // loop through all elements
  elements.forEach((element,index) =>{
    // check if text includes the search value
    if(element.innerText.includes(searchInput.toUpperCase())){
      // display matching card
      cards[index].classList.remove('hide');
    }
    else{
      // hide others
      cards[index].classList.add('hide');
    }
  })
})

// initially display all products
window.onload = () =>{
  filterProduct('all');
};

// form starts
var form = document.getElementsByClassName('button');
var j;
var ben = form.length;
for(j = 0; j < ben; j++){
  form[j].addEventListener('click', function(){
    document.querySelector(".popup").classList.add("act")
  });
}
document.querySelector(".popup .close-btn").addEventListener('click',function(){
  document.querySelector(".popup").classList.remove("act")

});
// form ends