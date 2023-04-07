import React from 'react'
import Routing from './Routing'
import "./App.css"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './Redux/Store'



export default function App() {
  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routing />
      </PersistGate>
    </Provider>


  )
}
