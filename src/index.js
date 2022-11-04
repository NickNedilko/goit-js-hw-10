import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import API  from './api-services'



const refs = {
    inputEl: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info')
}
const DEBOUNCE_DELAY = 300;

refs.inputEl.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));
let countryList = '';

function onInputSearch (e){
   clearInterface();
const searchCountry = e.target.value.trim();
if(searchCountry.length>=1){
API.fetchCountries(searchCountry).then(renderCountryList).catch(onError);
}
}


function clearInterface(){
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
}

// function fetchCountries(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}?fields=name,capital,languages,flags,population`).then(response=>{
//         if(!response.ok){
//             throw Error(response.statusText);
//         }
//     return response.json()
//     }).then(renderCountryList).catch(onError)
// }


function onError(){
    Notiflix.Notify.failure('Oops, there is no country with that name')
}

function renderCountryList(countries){
    if(countries.length > 10){
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
        return;
    }
    countries.forEach(country => {
        if(countries.length === 1){
            makeCountryInfo(country);
        }
    makeCountryList(country);
        
    });
}

function makeCountryList({flags, name}){
    const country = `<li class="country-list__item">
    <img src="${flags.svg}" width=32  alt="${name.official}">
    ${name.official}</li>`;
return  countryList = refs.countryList.insertAdjacentHTML('beforeend', country);
}

function makeCountryInfo({name, capital, flags, population, languages}){
    const countryInfo = `<div>
    <img src="${flags.svg}" width=32 alt="${name.official}">
    <span class="country-name">${name.official}</span>
    <p> Capital: ${capital}</p>
    <p> Population: ${population}</p>
    <p> Languges: ${Object.values(languages)}</p>
    </div>`
    return countryList = refs.countryInfo.insertAdjacentHTML('beforeend', countryInfo)
}


