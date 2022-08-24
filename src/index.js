import './css/styles.css';
import fetchCountries from '../src/js/fetchCountries.js';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputEl: document.querySelector('#search-box'),
  countryListEl: document.querySelector('.country-list'),
  countryInfoEl: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener(
  'input',
  debounce(onInputSearchContry, DEBOUNCE_DELAY)
);

function onInputSearchContry(e) {
  const countryName = e.target.value.trim();

  if (countryName === '') {
    refs.countryInfoEl.innerHTML = '';
    refs.countryListEl.innerHTML = '';
    return;
  }

  fetchCountries(countryName)
    .then(renderCountry)
    .catch(error =>
      Notiflix.Notify.failure('Oops, there is no country with that name')
    );
}

function renderCountry(countryName) {
  if (countryName.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    refs.countryListEl.innerHTML = '';
  }

  const markup = countryName
    .map(({ name, capital, population, flags, languages }) => {
      return `<img src="${flags.svg}" alt="${name.official}" width="300px">
            <h1 class="official-name">${name.official}</h1>
            <p><b>Capital:</b> ${capital}</p>
            <p><b>Population:</b> ${population}</p>
            <p><b>Langueges:</b> ${Object.values(languages)}</p>`;
    })
    .join('');
  refs.countryInfoEl.innerHTML = markup;

  if (countryName.length > 1) {
    refs.countryInfoEl.innerHTML = '';
  }

  renderCountries(countryName);
}

function renderCountries(countryName) {
  if (countryName.length >= 2 && countryName.length <= 10) {
    const markup = countryName
      .map(({ name, flags }) => {
        return `<li>
          <img src="${flags.svg}" alt="${name.official}" width="30px">
          <p class="official-name"><b>${name.official}</b>
        </li>`;
      })
      .join('');
    refs.countryListEl.innerHTML = markup;
  }
  if (countryName.length === 1) {
    refs.countryListEl.innerHTML = '';
  }
}
