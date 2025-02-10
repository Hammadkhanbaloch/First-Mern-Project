import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/Store.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/Store.jsx'
createRoot(document.getElementById('root')).render(
  <Provider Provider store={store} >
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
)
