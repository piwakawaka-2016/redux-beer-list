const html = require('yo-yo')
module.exports = beerTemplate

function beerTemplate(beer, dispatch) {
  return html `
    <li class="beer"> 
      <div class="beer-name">${beer.name}</div>
      <div class="brewery">${beer.brewery}</div>
      <div class="country">${beer.country}</div>
      <div class="style">${beer.style}</div>
      <div class="abv">${beer.abv}</div>
    </li> 
  ` 
}
