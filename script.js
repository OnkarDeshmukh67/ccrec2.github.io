// CAROUSEL BACKGROUND CHANGE

let changing_bg_img = document.getElementById('bg_img_container');

window.addEventListener('scroll' , (e) => {

  let removeHeight = window.scrollY;
  
  changing_bg_img.style.opacity = ((445 - window.scrollY)/400);

  if(removeHeight > 465) {
    changing_bg_img.style.display = 'none';
  } 
  else{
    changing_bg_img.style.display = 'block';
  }

})


let slide1 = document.getElementById('slide_1')
let slide2 = document.getElementById('slide_2')
let slide3 = document.getElementById('slide_3')
let slide4 = document.getElementById('slide_4')
let slide5 = document.getElementById('slide_5')

function displayNone (params) {
  slide1.style.display = 'none';
  slide2.style.display = 'none';
  slide3.style.display = 'none';
  slide4.style.display = 'none';
  slide5.style.display = 'none';
}

let c1 = document.getElementById('c1')
let c2 = document.getElementById('c2')
let c3 = document.getElementById('c3')
let c4 = document.getElementById('c4')
let c5 = document.getElementById('c5')

// "https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Homepage-OffType.jpg?v=71331014463972640541684944315";
// "https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Header-Fragment.jpg?v=108924954602691418591680613809";
// "https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Header-EditorialOld.jpg?v=85360777188182687641678142091";
// "https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Header-TypeTrials.jpg?v=140312620541521886991675867719";
// "https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Homepage-FSP.jpg?v=157059235392745552091668604712";

c1.addEventListener('click'  , e => {
  changing_bg_img.style.backgroundImage = 'url("https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Homepage-OffType.jpg?v=71331014463972640541684944315")'

  displayNone()
  slide1.style.display = 'flex';
})
c2.addEventListener('click'  , e => {
  changing_bg_img.style.backgroundImage = 'url("https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Header-Fragment.jpg?v=108924954602691418591680613809")'

  displayNone()
  slide2.style.display = 'flex';
})
c3.addEventListener('click'  , e => {
  changing_bg_img.style.backgroundImage = 'url("https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Header-EditorialOld.jpg?v=85360777188182687641678142091")'

  displayNone()
  slide3.style.display = 'flex';
})
c4.addEventListener('click'  , e => {
  changing_bg_img.style.backgroundImage = 'url("https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Header-TypeTrials.jpg?v=140312620541521886991675867719")'

  displayNone()
  slide4.style.display = 'flex';
})
c5.addEventListener('click'  , e => {
  changing_bg_img.style.backgroundImage = 'url("https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Homepage-FSP.jpg?v=157059235392745552091668604712")'

  displayNone()
  slide5.style.display = 'flex';
})


let textBoxes = document.querySelectorAll('.text_b');
textBoxes.forEach( e => {
  e.classList.toggle('slideUp');
})

let circle = document.getElementById('card_5');

var scrolling = 0;

window.addEventListener('scroll' , () => {
  if (window.scrollY > scrolling) {
    circle.classList.add('rotate_viba')

    setTimeout(() => {
      circle.classList.remove('rotate_viba');
    }, 250);
  }
  else if(window.scrollY < scrolling){
    circle.classList.add('rotate_vibb')

    setTimeout(() => {
      circle.classList.remove('rotate_vibb');
    }, 250);
  }
    scrolling = window.scrollY;
})

// ANIMATING THE TEXT ON SCREEN LOAD

window.addEventListener('unload' , (e) => {

  setTimeout(() => { 

    document.getElementById('s1_td1_1').classList.toggle('slideIn');
    document.getElementById('s1_tda_t1').classList.toggle('slideIn');
    document.getElementById('s1_tda_t2').classList.toggle('slideIn');
    document.getElementById('s1_td3_t1').classList.toggle('slideIn');
    document.getElementById('off_type_box_a').classList.toggle('slideIn');
   
  }, 200);

  changing_bg_img.classList.toggle('slideIn')

})

c1.addEventListener('click' , (e) => {

  document.getElementById('s1_td1_1').classList.toggle('slideIn');
  document.getElementById('s1_tda_t1').classList.toggle('slideIn');
  document.getElementById('s1_tda_t2').classList.toggle('slideIn');
  document.getElementById('s1_td3_t1').classList.toggle('slideIn');
  document.getElementById('off_type_box_a').classList.toggle('slideIn');
  
})

c2.addEventListener('click' , (e) => {
document.getElementById('s2_td1_t').classList.toggle('slideIn')
document.getElementById('s2_tda_t1').classList.toggle('slideIn')
document.getElementById('s2_tda_t2').classList.toggle('slideIn')
document.getElementById('s2_td3_t').classList.toggle('slideIn')

})

c3.addEventListener('click' , (e) => {
  document.getElementById('s3_td1_t').classList.toggle('slideIn')
  document.getElementById('s3_tda_t1').classList.toggle('slideIn')
  document.getElementById('s3_tda_t2').classList.toggle('slideIn') 
  document.getElementById('s3_td3_t').classList.toggle('slideIn')
  
})

c4.addEventListener('click' , (e) => {
  document.getElementById('s4_td1_t').classList.toggle('slideIn')
  document.getElementById('s4_tda1').classList.toggle('slideIn')
  document.getElementById('s4_tda2').classList.toggle('slideIn')
  document.getElementById('s4_td3_t').classList.toggle('slideIn')
  
})

// ANIMATING THE CARD COLUMNS

let column1 = document.getElementById('card_column_1');
let column2 = document.getElementById('card_column_2');
let column3 = document.getElementById('card_column_3');
let column4 = document.getElementById('card_column_4');

window.addEventListener('scroll' , (e) => {
  let  Y = window.scrollY;
  if (Y >= 1300) {
    column1.style.top = (1520 - Y)/40 + 'px';
    column2.style.top = (1520 - Y)/3 + 'px';
    column3.style.top = (1520 - Y)/20 + 'px';
    column4.style.top = (1520 - Y)/40 + 'px';
  }
})



// CARD CONTENT CHANGE ON HOVER

let lowText = [];

let arr = document.querySelectorAll(".down_left");

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  lowText[i] = element;
}

let lowArrow =[];

let Arr = document.querySelectorAll('.down_right');

for (let i = 0; i < Arr.length; i++) {
  const element = Arr[i];
  lowArrow[i] = element;
}


let newText = document.createElement('div');
newText.innerHTML = 'Just keep examining every low bid quoted for zinc etchings.'
newText.setAttribute('style' , 'display:flex; flex-wrap:wrap ;position:absolute; width:20vw ;font-size:2rem; text-align:left ;font-weight: 800; font-family: Neue Montreal , sans-serif; top: 6px; left: 8px')

let eye = document.createElement('div');
eye.setAttribute('id' , 'eye')

let cards = document.querySelectorAll(".cards");

for (let i = 0; i < cards.length; i++) {

  // MOUSE ENTER EVENTS

  cards[i].addEventListener('mouseenter' , (e) => {

    cards[i].setAttribute("style", "background-color:white;");
    cards[i].appendChild(newText)

    eye.classList.toggle('.zoomIn')
    cards[i].appendChild(eye);

    let element = lowText[i];
    element.style.color = 'black';

    let el = lowArrow[i];
    el.style.color = 'black';


  // SINGLE CARD DISPLAY ANIMATION

  eye.addEventListener('mouseenter' , (e) => {
    document.getElementById('eye_hover').style.display = 'block';
    })

  eye.addEventListener('mouseenter' , (e) => {
    document.getElementById('eye_hover').style.display = 'none';
    })
  })

    // MOUSE LEAVE EVENTS

  cards[i].addEventListener('mouseleave' , (e) => {
    cards[i].setAttribute("style", "background-color:transparent;")
    cards[i].removeChild(newText)
    cards[i].removeChild(eye);  

    let element = lowText[i];
    element.style.color = 'white';

    let el = lowArrow[i];
    el.style.color = 'white';
  }) 
}



let card5 = document.getElementById('card_5')
let cicCard = document.getElementById('c5_text')

card5.addEventListener('mouseenter' , (e) => {
  cicCard.style.opacity = 0.6;
})

card5.addEventListener('mouseleave' , (e) => {
  cicCard.style.opacity = 1;
})

