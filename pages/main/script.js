//Burger
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const overlay = document.querySelector('.overlay');
const modalOverlay = document.querySelector('.overlay_modal');
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

//Slider
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
const button_left = document.querySelector('.arr_l');
const button_right = document.querySelector('.arr_r');
const sliderContainerWrapper = document.querySelector('.slider_container_wrapper');
const modal = document.querySelector('.modal');
const modalButton = modal.querySelector('.modal_button');

let displayCardAmount;
let screenWidth = window.innerWidth;

    if (screenWidth>=1280) {
        displayCardAmount=3;
    } else if (screenWidth>=768) {
        displayCardAmount=2;
    } else {
        displayCardAmount=1;
    }

const moveLeft = ()=>{
    const newPets = getRandomPets(pets,displayCardAmount);
    currentPets.push(...newPets);
    addPetsToLeft(newPets);
    sliderContainerWrapper.classList.add('transition-left');

    button_left.removeEventListener('click', moveLeft);
    button_right.removeEventListener('click', moveRight);

};

const moveRight = ()=>{
    const newPets = getRandomPets(pets,displayCardAmount);
    currentPets.push(...newPets);
    addPetsToRight(newPets);
    sliderContainerWrapper.classList.add('transition-right');
    button_left.removeEventListener('click', moveLeft);
    button_right.removeEventListener('click', moveRight);
}

button_left.addEventListener('click', moveLeft);
button_right.addEventListener('click', moveRight);

sliderContainerWrapper.addEventListener('animationend',(animationEvent)=> {
    pets.push(...currentPets.slice(0,displayCardAmount));
    currentPets.splice(0,displayCardAmount);

    if (animationEvent.animationName === 'move-left'||animationEvent.animationName === 'move-left-two'||animationEvent.animationName === 'move-left-one') {
        sliderContainerWrapper.classList.remove('transition-left');
        removePetsFromRight(displayCardAmount);
    } else {
        sliderContainerWrapper.classList.remove('transition-right');
        removePetsFromLeft(displayCardAmount);
    }
    button_left.addEventListener('click', moveLeft);
    button_right.addEventListener('click', moveRight);
});

// создать функцию которая принимает данные карточки 
// и возвращает DOM элемент карточки
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

const currentPets = [];//которые отображаются

//выбирает из массива amount случайных животных
function getRandomPets (array, amount) {
    const result = [];
    for (let i=0; i<amount; i++) {
        const randomIndex = randomNumber(0, array.length-1);
        result.push(array[randomIndex]);
        array.splice(randomIndex, 1);
    }
    return result;
}

function randomNumber (n,m) {
    return Math.floor (
        Math.random()*(m-n+1)
    )+n
}

// init 1 2 3 4 5 6 7 8
// current -> 2 4 5 pets-> 1 3 6 7 8
// current ->  2 4 5 + 1 3 6 pets -> 7 8 
const sliderContainer = document.querySelector('.slider_container');
currentPets.push(...getRandomPets(pets,displayCardAmount));
displayPets(currentPets);

// создает блок из карточек
function displayPets(array) {
    array.forEach((elem) => {
        sliderContainer.appendChild(createSlideCard(elem));
    })
}

//добавляет элементы в конец  sliderContainer
function addPetsToRight(array) {
    array.forEach((elem) => {
        sliderContainer.appendChild(createSlideCard(elem));
    })
}
// удаляет первые amount элементов из sliderContainer
function removePetsFromLeft(amount) {
    Array.from(sliderContainer.children)
        .slice(0, amount)
        .forEach(child => sliderContainer.removeChild(child))
}
//добавляет элементы в начало sliderContainer
function addPetsToLeft(array) {
    array.forEach((elem) => {
        sliderContainer.prepend(createSlideCard(elem));
    })
}
//удаляет последние amount элементов из sliderContainer
function removePetsFromRight(amount) {
    Array.from(sliderContainer.children)
    .reverse()
    .slice(0,amount)
    .forEach(child => sliderContainer.removeChild(child));
}


//Popup

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

