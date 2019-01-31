require('@babel/polyfill');
import "@babel/polyfill";

import Search from './Search';

//Control and centralized DOM

const controlDOM = {
  burger: document.querySelector('.burger-menu'),
  searchInput: document.querySelector('.search__bar'),
  searchBtn: document.querySelector('.search__button'),
  menu : document.querySelector('.menu'),
  cards: document.querySelector('.content__items'),
  contentHeading: document.querySelector('.content__heading')
};

//Data structure

const data = {
  cardName: ''
};

//Get input value

const getInputValue = () => {
  data.cardName = controlDOM.searchInput.value;
  console.log(data.cardName);
}

//Loop through data and insert each cards into UI

const createUi = (array) => {

  array.forEach(item => {
    if (item.imageUrl) {
      const card = `
      <div class="content__item"><img src="${item.imageUrl}" alt="card 1" class="content__img"></div>
      `
  
      controlDOM.cards.insertAdjacentHTML('beforeend', card);
    }
  });
}

const showResult = (array) => {
  controlDOM.contentHeading.textContent = `
  Total "${array.length}" cards where the name includes "${data.cardName}"
  `;
}

// Clear card item

const clearPage = () => {
  controlDOM.cards.innerHTML = '';
}

// Clear input value

const clearInput = () => {
  controlDOM.searchInput.value = '';
}

// Data test

const dataTest = () => {
  console.log(data);
}

const searchControl = async () => {
  //1. Get the input value from search bar
  getInputValue();

  //2. Clear input
  clearInput();


  try {
    //3.Get card info and render page
    const result = await Search(data.cardName);
    //To see if there is a result
    if (result.cards.length > 0) {
      //If so, clear page
      clearPage();
      //And get card info and render page
      createUi(result.cards);
    }
    //4. Show result and render heading anyway
    showResult(result.cards);

  } catch (error) {
    console.log(error);
  }

}

controlDOM.burger.addEventListener('click', (e) => {

  //To see if e.target is the element with class .burger-menu or its children
  if (e.target.matches('.burger-menu, .burger-menu *')) {
    /*if (controlDOM.menu.style.height === '0px') {
      controlDOM.menu.style.height = '100%';
      controlDOM.menu.style.opacity = '1';
    } else {
      controlDOM.menu.style.height = '0';
      controlDOM.menu.style.opacity = '0';
    }
    above is not going to work because the initial "inline style" isn't 0px (not define at all)
    */

    // console.log(document.querySelectorAll('.burger-menu *'));

    //Add class can trigger css transition property too
    controlDOM.menu.classList.toggle('visible');
  }
});

controlDOM.searchBtn.addEventListener('click', searchControl);

