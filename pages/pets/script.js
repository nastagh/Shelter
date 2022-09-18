//BurgerMenu
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const overlay = document.querySelector('.overlay');
const body = document.body;
const navLink = document.querySelectorAll('.nav_link');

function createBurgerMenu() {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
    body.classList.toggle('lock');
}

hamburger.addEventListener('click', createBurgerMenu);
overlay.addEventListener('click', createBurgerMenu);

navLink.forEach((link)=>{
    link.addEventListener('click', createBurgerMenu);
})


//Popup
const modalOverlay = document.querySelector('.overlay_modal');
const modal = document.querySelector('.modal');
const modalButton = modal.querySelector('.modal_button');

modalOverlay.addEventListener('click',switchModalOverlay);
modal.addEventListener('click', (event) => {
    if (event.target!==modalButton) {
        event.stopPropagation()
    }
});

//создание overlay

function switchModalOverlay(callback) {
    body.classList.toggle('locked');
    modalOverlay.classList.toggle('hidden');
    if(callback) {
        modalOverlay.addEventListener('click', callback, {once: true})
    }
}

function fillPetModal(petData) {

    const img = modal.querySelector('.modal_img');
    img.setAttribute('src', petData.img);
    img.setAttribute('title', petData.name);
    img.setAttribute('alt', petData.name);
   
    const headingText = modal.querySelector('.heading_modal_text');
    headingText.innerText=petData.name;
    
    const subheadingText = modal.querySelector('.subheading_modal_text');
    subheadingText.innerText=`${petData.type} - ${petData.breed}`;
    
    const modalInf = modal.querySelector('.modal-inf');
    modalInf.innerText=petData.description;
    
    const modalUl = modal.getElementsByTagName('ul')[0];
    modalUl.children[0].children[1].innerHTML= petData.age;
    modalUl.children[1].children[1].innerHTML= petData.inoculations.join(' , ');
    modalUl.children[2].children[1].innerHTML= petData.diseases.join(' , ');
    modalUl.children[3].children[1].innerHTML= petData.parasites.join(' , ');
}

function showModal() {
    modal.classList.toggle('hidden');
}





//Pagination

const pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
]

const petsContainer = document.querySelector('.pets_container');
let displayCardAmount;
const numberCard = 48;
const rightArrow = document.getElementById('right_arrow');
const imgRightArrow = document.getElementById('img_right_arrow');
const centerButton = document.querySelector('.arrow_center');
let counter = 1;
centerButton.innerHTML = counter;
const leftArrow = document.getElementById('left_arrow');
const imgLeftArrow = document.getElementById('img_left_arrow');
const dblLeftArrow = document.getElementById('dbl_left_arrow');
const imgDblLeftArrow = document.getElementById('img_dbl_left_arrow');
const dblRightArrow = document.getElementById('dbl_Right_arrow');
const imgDblRightArrow =document.getElementById('img_dbl_right_arrow');
let screenWidth = window.innerWidth;

  if (screenWidth>=1280) {
    displayCardAmount=8;
  } else if (screenWidth>=768) {
    displayCardAmount=6;
  } else {
    displayCardAmount=3;
  };


function createSlideCard (cardData) {
    const card = document.createElement('div');
    card.classList.add('slider_card');
    card.classList.add('card_grid');

    const img = document.createElement('img');
    img.setAttribute('src', cardData.img);
    img.setAttribute('title', cardData.name);
    img.setAttribute('alt', cardData.name);
    card.appendChild(img);

    const nameParagraph = document.createElement('p');
    nameParagraph.innerText= cardData.name;
    card.appendChild(nameParagraph);

    const learnMoreButton = document.createElement('button');
    learnMoreButton.innerText = 'Learn More';
    card.appendChild(learnMoreButton);

    card.addEventListener('click', ()=> {
        switchModalOverlay(showModal); // <- передаем в модалСвитч функцию которая изменяет видимость нашей модалки
        fillPetModal(cardData);
        showModal();  
    });
    return card;
}

function displayPets(array) {
    array.forEach((elem) => {
        petsContainer.appendChild(createSlideCard(elem));
    })
}

function ExpandArray(arr,length) {
  let pool = Array.from(arr);
  let thisSix = [];
  let thisEight = [];
  let generalArr = [];
  let itemToTake;
  let itemTaken = false;
  for (let i = 0; i < length; i++) {
      // Get random element from pool, check if it in 6 or 8
      while (!(itemTaken)) {
          let indexOfItem = Math.floor(Math.random()*pool.length)
          itemToTake= pool[indexOfItem];
          // If it not presented in thisEight and thisSix - take it
          if (thisSix.indexOf(itemToTake) === -1 && thisEight.indexOf(itemToTake) === -1) {
              itemTaken = true;
              pool.splice(indexOfItem,1);
          }
      }
      itemTaken = false;
      // add element to out arr, 6 and 8
      thisSix.push(itemToTake);
      thisEight.push(itemToTake);
      generalArr.push(itemToTake);
      if (thisSix.length === 6) {
          thisSix = [];
      }
      if (thisEight.length === 8) {
          thisEight = [];
      }
      if (pool.length === 0)
      {
          pool = Array.from(arr);
      }
  }
  return generalArr;
}

let fullPetsArray = ExpandArray(pets,numberCard);

displayPets(fullPetsArray.slice((counter-1)*displayCardAmount,counter*displayCardAmount));

const moveRight = () => {
    petsContainer.innerHTML='';
    counter ++;
    displayPets(fullPetsArray.slice((counter-1)*displayCardAmount,counter*displayCardAmount));
    centerButton.innerHTML = counter;
    if (leftArrow.disabled) {
      leftArrow.disabled = false;
      imgLeftArrow.setAttribute('src', '../../assets/images/left-worked.png');
      dblLeftArrow.disabled = false;
      imgDblLeftArrow.setAttribute('src', '../../assets/images/two_left_worked.png');
    }
    
    if (counter==numberCard/displayCardAmount) {
      rightArrow.disabled = true;
      imgRightArrow.setAttribute('src', '../../assets/images/right-disabled.png');
      dblRightArrow.disabled = true;
      imgDblRightArrow.setAttribute('src', '../../assets/images/two_right_disabled.png');
    }
    
}

const moveLeft = () => {
  petsContainer.innerHTML='';
  counter --;
  displayPets(fullPetsArray.slice((counter-1)*displayCardAmount,counter*displayCardAmount));
  centerButton.innerHTML = counter;
  rightArrow.disabled = false;
  imgRightArrow.setAttribute('src', '../../assets/images/right.png');
  if (counter==(numberCard/displayCardAmount-1)) {
    dblRightArrow.disabled = false;
    imgDblRightArrow.setAttribute('src', '../../assets/images/two_right.png');
    rightArrow.disabled = false;
    imgRightArrow.setAttribute('src', '../../assets/images/right.png');
  }
  
  if (counter==1) {
    leftArrow.disabled = true;
    imgLeftArrow.setAttribute('src', '../../assets/images/left.png');
    dblLeftArrow.disabled = true;
    imgDblLeftArrow.setAttribute('src', '../../assets/images/two_left.png');
  }
}

const moveLastPage = () =>{
  petsContainer.innerHTML='';
  counter=numberCard/displayCardAmount;
  displayPets(fullPetsArray.slice((counter-1)*displayCardAmount,counter*displayCardAmount));
  centerButton.innerHTML = counter;

  rightArrow.disabled = true;
  imgRightArrow.setAttribute('src', '../../assets/images/right-disabled.png');
  dblRightArrow.disabled = true;
  imgDblRightArrow.setAttribute('src', '../../assets/images/two_right_disabled.png');
  
  dblLeftArrow.disabled = false;
  imgDblLeftArrow.setAttribute('src', '../../assets/images/two_left_worked.png');
  leftArrow.disabled = false;
  imgLeftArrow.setAttribute('src', '../../assets/images/left-worked.png');

}

const moveFirstPage = () => {
  petsContainer.innerHTML='';
  counter = 1;
  displayPets(fullPetsArray.slice((counter-1)*displayCardAmount,counter*displayCardAmount));
  centerButton.innerHTML = counter;

  dblLeftArrow.disabled = true;
  imgDblLeftArrow.setAttribute('src', '../../assets/images/two_left.png');
  leftArrow.disabled = true;
  imgLeftArrow.setAttribute('src', '../../assets/images/left.png');

  dblRightArrow.disabled = false;
  imgDblRightArrow.setAttribute('src', '../../assets/images/two_right.png');
  rightArrow.disabled = false;
  imgRightArrow.setAttribute('src', '../../assets/images/right.png');
}

rightArrow.addEventListener('click', moveRight);
leftArrow.addEventListener('click', moveLeft);
dblLeftArrow.addEventListener('click', moveFirstPage);
dblRightArrow.addEventListener('click', moveLastPage);