const html = require('yo-yo')
const request = require('superagent')
const beersTemplate = require('./beers')

module.exports = appTemplate

function appTemplate(state, dispatch) {

  function fetchBeers(dispatch) {
    dispatch({type: 'TOGGLE_LOADING'})

    const url = 'https://rogue-beers.herokuapp.com/api/v1/beers'

    request
      .get(url)
      .end((err, res) => {
        if(err) return 
        dispatch({type: 'TOGGLE_LOADING'})
        dispatch({type: 'RECEIVE_BEERS', payload: res.body.beers}) 
      })
  }

  return html`
    <div id="app"> 
      ${beersTemplate(state, dispatch)}
      ${state.isLoading ? html`<div>Loading...</div>` : ''} 
      <button onclick=${() => fetchBeers(dispatch)}>Refresh</button>
    </div> 
  ` 
}
