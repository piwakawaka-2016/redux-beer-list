
const html = require('yo-yo')
const beerTemplate = require('./beer');

module.exports = beersTemplate

function beersTemplate({beers}, dispatch) {
  const beers = state.beers
  return html`
    <ul class="beers">
      ${beers.map(beerTemplate)}  
    </ul> 
  ` 
}
