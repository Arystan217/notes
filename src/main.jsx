import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store.js'
import { Provider } from './StoreContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

const rerenderEntireTree = store => {
  root.render(
    <BrowserRouter>
      <Provider value={store}>
        <App store={store} />
      </Provider>
    </BrowserRouter>,
  )
}

rerenderEntireTree(store)

store.subscribe(() => {
  rerenderEntireTree(store)
})


