import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/store.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { PURGE, persistStore } from 'redux-persist'


const persistor = persistStore(store)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  
  </React.StrictMode>,
)
