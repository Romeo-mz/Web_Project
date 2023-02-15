const endpoint = 'https://raw.githubusercontent.com/Romeo-mz/French-Cities/main/cities.json';

const cities = [];

fetch(endpoint)
.then(garb => garb.json())
.then(data => cities.push(...data)); // ... use to spread data into an array

function findMatches(wordToMatch, cities){
    if(wordToMatch !== ''){
        return cities.filter(place => {

            const regex = new RegExp(wordToMatch, 'gi'); //gi , global and i for uppercase and minuscase
            return place.city_code.match(regex);
        })
    }
}

function displayMatches(){
    const matchArray = findMatches(this.value,cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city_code.replace(regex,`<span class=hl>${this.value}</span>`)
        return `
        <li>
            <span class='name'>${cityName}</span>
            <span class='postal-code'>${place.zip_code}</span>
        </li>
        `
    }).join('');
    suggestions.innerHTML = html;
}
/*
let timeoutId;

function onSearchInput() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => displayMatches(), 200);
}
*/
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('change', displayMatches);
//searchInput.addEventListener('keyup',onSearchInput);
