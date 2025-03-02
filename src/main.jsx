import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
import store from '../store/store'
import { Provider } from 'react-redux'
import  Router  from './components/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>,
)
