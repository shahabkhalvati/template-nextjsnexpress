import prettyJSON from './prettyJSON'
require('es6-promise').polyfill()
const fetch = require('isomorphic-fetch')

export default function({ url, method = 'POST', data = null }) {
  return fetch(url, {
    method,
    mode: 'cors', // no-cors, cors, *same-origin
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    })
    .then(function(data) {
      console.log('response is:', data)
    })
}
