import './css/styles.css';

const refs = {
    inputEl: document.querySelector('#search-box'),
}
console.log(refs.inputEl)
const DEBOUNCE_DELAY = 300;


refs.inputEl.addEventListener('input', onInputSearch);

function onInputSearch (){
    console.dir(event.currentTarget.value)
    

}
