import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { ApiProvider } from '@reduxjs/toolkit/query/react'
// import { myapis } from './redux/api.ts'

import { Provider } from "react-redux"
import { store } from './redux/stores.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ApiProvider api={myapis} > */}
    <Provider store={store} >
      <App />

    </Provider>

    {/* </ApiProvider> */}
  </React.StrictMode>,
)
