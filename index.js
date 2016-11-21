const html = require('yo-yo')
const redux = require('redux')
const clone = require('clone')
const request = require('superagent')

const beers = require('./test-beers').beers
const appTemplate = require('./views/app')

function reducer(state, action) {
  const newState = clone(state) 
  switch(action.type){
    case 'RECEIVE_BEERS':
      newState.beers = action.payload
      return newState
    case 'TOGGLE_LOADING':
      newState.isLoading = !newState.isLoading
      return newState
    default:
      return newState
  }
}

const initialState = {
  beers: [],
  isLoading: false
}
const store = redux.createStore(reducer, initialState)
const {dispatch, getState, subscribe} = store 

const main = document.querySelector('main')
const appEl = document.createElement('div')
main.appendChild(appEl)

subscribe(() =>{
  const state = getState()
  html.update(appEl, appTemplate(state, dispatch))
})

dispatch({type: 'INIT'})

