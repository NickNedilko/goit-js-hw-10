

function fetchCountries(country){
   return fetch(`https://restcountries.com/v3.1/name/${country}?fields=name,capital,languages,flags,population`).then(response=>{
        if(!response.ok){
            throw Error(response.statusText);
        }
    return response.json()
    })
}

export default {fetchCountries};