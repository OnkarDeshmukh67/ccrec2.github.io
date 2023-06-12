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

let slideIndex = 1;
let lastIndex = 1;

c1.addEventListener('click'  , () => {
  slideIndex = 1;

  changing_bg_img.style.backgroundImage = 'url("https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Homepage-OffType.jpg?v=71331014463972640541684944315")';

  if (lastIndex < slideIndex) {   

    bg_img_container.classList.add('slideinLeft');
  
    setTimeout(() => {
      bg_img_container.classList.remove('slideinLeft')
    }, 1400);

  } else {

    bg_img_container.classList.add('slideinRight');
  
    setTimeout(() => {
      bg_img_container.classList.remove('slideinRight')
    }, 1400);
    
  }

  displayNone();
  slide1.style.display = 'flex';

  lastIndex = 1;
});

c2.addEventListener('click'  , () => {
  slideIndex = 2;

  changing_bg_img.style.backgroundImage = 'url("https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Header-Fragment.jpg?v=108924954602691418591680613809")'

  if (lastIndex < slideIndex) {
    
    bg_img_container.classList.add('slideinLeft');
  
    setTimeout(() => {
      bg_img_container.classList.remove('slideinLeft')
    }, 1400);

  } else {

    bg_img_container.classList.add('slideinRight');
  
    setTimeout(() => {
      bg_img_container.classList.remove('slideinRight')
    }, 1400);
    
  }

  displayNone()
  slide2.style.display = 'flex';

  lastIndex = 2;
});

c3.addEventListener('click'  , () => {
  slideIndex = 3;

  changing_bg_img.style.backgroundImage = 'url("https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Header-EditorialOld.jpg?v=85360777188182687641678142091")'

  if (lastIndex < slideIndex) {
    
    bg_img_container.classList.add('slideinLeft');
  
    setTimeout(() => {
      bg_img_container.classList.remove('slideinLeft')
    }, 1400);

  } else {

    bg_img_container.classList.add('slideinRight');
  
    setTimeout(() => {
      bg_img_container.classList.remove('slideinRight')
    }, 1400);
    
  }
  
  displayNone();
  slide3.style.display = 'flex';

  lastIndex = 3;
});

c4.addEventListener('click'  , () => {
  slideIndex = 4;

  changing_bg_img.style.backgroundImage = 'url("https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Header-TypeTrials.jpg?v=140312620541521886991675867719")'

  if (lastIndex < slideIndex) {
    
    bg_img_container.classList.add('slideinLeft');
  
    setTimeout(() => {
      bg_img_container.classList.remove('slideinLeft')
    }, 1400);

  } else {

    bg_img_container.classList.add('slideinRight');
  
    setTimeout(() => {
      bg_img_container.classList.remove('slideinRight')
    }, 1400);
    
  }
  
  displayNone()
  slide4.style.display = 'flex';

  lastIndex = 4;
});

c5.addEventListener('click'  , () => {
  slideIndex = 5;

  changing_bg_img.style.backgroundImage = 'url("https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Homepage-FSP.jpg?v=157059235392745552091668604712")'

  if (lastIndex < slideIndex) {
    
    bg_img_container.classList.add('slideinLeft');
  
    setTimeout(() => {
      bg_img_container.classList.remove('slideinLeft')
    }, 1400);

  } else {

    bg_img_container.classList.add('slideinRight');
  
    setTimeout(() => {
      bg_img_container.classList.remove('slideinRight')
    }, 1400);
    
  }
  
  displayNone()
  slide5.style.display = 'flex';

  lastIndex = 5;
});


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

    document.getElementById('s1_td1_1').classList.add('slideIn');
    document.getElementById('s1_tda_t1').classList.add('slideIn');
    document.getElementById('s1_tda_t2').classList.add('slideIn');
    document.getElementById('s1_td3_t1').classList.add('slideIn');
    document.getElementById('off_type_box_a').classList.add('slideIn');
   
  }, 200);

  changing_bg_img.classList.toggle('slideIn')

})

c1.addEventListener('click' , (e) => {

  document.getElementById('s1_td1_1').classList.add('slideIn');
  document.getElementById('s1_tda_t1').classList.add('slideIn');
  document.getElementById('s1_tda_t2').classList.add('slideIn');
  document.getElementById('s1_td3_t1').classList.add('slideIn');
  document.getElementById('off_type_box_a').classList.add('slideIn');
  
})

c2.addEventListener('click' , (e) => {
document.getElementById('s2_td1_t').classList.add('slideIn')
document.getElementById('s2_tda_t1').classList.add('slideIn')
document.getElementById('s2_tda_t2').classList.add('slideIn')
document.getElementById('s2_td3_t').classList.add('slideIn')

})

c3.addEventListener('click' , (e) => {
  document.getElementById('s3_td1_t').classList.add('slideIn')
  document.getElementById('s3_tda_t1').classList.add('slideIn')
  document.getElementById('s3_tda_t2').classList.add('slideIn') 
  document.getElementById('s3_td3_t').classList.add('slideIn')
  
})

c4.addEventListener('click' , (e) => {
  document.getElementById('s4_td1_t').classList.add('slideIn')
  document.getElementById('s4_tda1').classList.add('slideIn')
  document.getElementById('s4_tda2').classList.add('slideIn')
  document.getElementById('s4_td3_t').classList.add('slideIn')
  
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

// SINGLE CARD DISPLAY ANIMATION

eye.addEventListener('mouseover' , (e) => {
  let par = eye.parentNode;
  console.log(par);
  par.style.zIndex = '100';
  document.getElementById('fix').style.display = 'block';
})

eye.addEventListener('mouseout' , (e) => {
  let par = eye.parentNode;
  console.log(par);
  par.style.zIndex = '100';
  document.getElementById('fix').style.display = 'none';
})


//  DISPLAYING RANDOM IMAGES

let displayscreen = document.getElementById('fix');

let imagesArr = [
  {
    src: 'images/random/rimg1.webp',
    width: 400,
    height: 400
  },
  {
    src: 'images/random/rimg2.webp',
    width: 600,
    height: 600
  },
  {
    src: 'images/random/rimg3.webp',
    width: 800,
    height: 800
  },
  {
    src: 'images/random/rimg4.webp',
    width: 550,
    height: 550
  },
];

let fixTime = 0;

function randomgenerator (time) {

  requestAnimationFrame(randomgenerator)

  if ((time - fixTime) >= 700) {

    displayscreen.innerHTML = '';
    
    let index = Math.floor(Math.random()*(4))
    
    let imageActive = new Image();
    imageActive.src = imagesArr[index].src;
    
    let screenX = window.innerWidth;
    let screenY = window.innerHeight;

    let sizeX = imagesArr[index].width;
    let sizeY = imagesArr[index].height;

    let rLeft = Math.floor(Math.random()*(screenX - sizeX))
    let rTop = Math.floor(Math.random()*(screenY - sizeY))

    imageActive.style.position = 'absolute';
    imageActive.style.zIndex = '250'
    imageActive.style.left = rLeft + 'px';
    imageActive.style.top = rTop + 'px';
    imageActive.style.width = sizeX + 'px';
    imageActive.style.height = sizeY + 'px';
    
    displayscreen.appendChild(imageActive)

    fixTime = time;
  }

}
// randomgenerator ();

requestAnimationFrame(randomgenerator)




// ANIMATING CIRCULAR CARD

let card5 = document.getElementById('card_5')
let cicCard = document.getElementById('c5_text')

card5.addEventListener('mouseenter' , (e) => {
  cicCard.style.opacity = 0.6;
})

card5.addEventListener('mouseleave' , (e) => {
  cicCard.style.opacity = 1;
})


// PRALLAX FUNCTION

function parallax (image , lowerB) {
  let y = window.scrollY;

  image.style.bottom = (lowerB - y)/5 + 'px';
  image.style.top = (lowerB - y)/5 + 'px';

}

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');


window.addEventListener('scroll' , () => {
  parallax(img1 , 3900);
  parallax(img2 , 4100);
  parallax(img3 , 4400);
  parallax(img4 , 4400);
  parallax(img5 , 4400);
  parallax(img6 , 5450);
  parallax(img7 , 5000);
  parallax(img8 , 4600);
})

// DYNAMIC FONT DISPLAY FUNCTION


let fonts = document.getElementsByTagName('td');

let displayFont = document.getElementById('dynamic_font');

for (let j = 0; j < fonts.length; j++) {

  let hoveredFont = fonts[j];
  hoveredFont.addEventListener('mouseenter' , () => {

    displayFont.innerHTML = '';

    let displayedFont = window.getComputedStyle(hoveredFont).fontFamily;

    displayFont.innerHTML = 'Aa';
    displayFont.style.fontFamily = displayedFont;
  })
  hoveredFont.addEventListener('mouseleave' , () =>{
    displayFont.innerHTML = '';
  })
}

// MAKING THE HAMBURGER

let logo = document.getElementById('pplogo')
let mode = document.getElementById('modeswitch')
let pg1 = document.getElementById('page-one')
let pg2 = document.getElementById('page-two')

let navbar = document.getElementById('navbar');
let bun = document.getElementById('bun');

let slicea = document.getElementById('slicea')
let sliceb = document.getElementById('sliceb')

bun.addEventListener('click' , () => {
  bun.classList.toggle('aft')
  navbar.classList.toggle('darkNavbar')
  pg1.classList.toggle('page_one_show')
  pg2.classList.toggle('page_two_show')
  mode.classList.toggle('modeswitch_dark')
  logo.classList.toggle('logo_dark')
})
