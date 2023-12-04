import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider } from 'react-redux'
import store from './stores'
// store
// import stores from './stores/reducers/movieReducer'

function App() {
  const arr = [{ judul: "Judul1" }, { judul: "Judul2" }, { judul: "Judul3" }]
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
