import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

const rerenderEntireTree = store => {
  root.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
  )
}

rerenderEntireTree(store)

store.subscribe(() => {
  rerenderEntireTree(store)
})


