import './css/styles.css';
import debounce from 'lodash.debounce';

const refs = {
    inputEl: document.querySelector('#search-box'),
}
console.log(refs.inputEl)
const DEBOUNCE_DELAY = 300;


refs.inputEl.addEventListener('input', debounce(onInputSearch, 3000));

function onInputSearch (){
    // const search = event.target.value
    // console.log(search)
    console.log('hi')
    

}
