const endpoint = 'https://raw.githubusercontent.com/high54/Communes-France-JSON/master/france.json';

const cities = [];

fetch(endpoint)
.then(garb => garb.json())
.then(data => cities.push(...data)); // ... use to spread data into an array

function findMatches(wordToMatch, cities){
    return cities.filter(place => {

        const regex = new RegExp(wordToMatch, 'gi'); //gi , global and i for uppercase and minuscase
        return place.Nom_commune.match(regex);
    })
}

function displayMatches(){
    const matchArray = findMatches(this.value,cities);
    const html = matchArray.map(place => {
        return `
        <li>
            <span class='name'>${place.Nom_commune}</span>
            <span class='postal-code'>${place.Code_postal}</span>
        </li>
        `
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('keyup', displayMatches);