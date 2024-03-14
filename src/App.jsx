

import './App.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './Routes/MainRoutes'

function App() {

  return (
    <>
     
        <RouterProvider router={MainRoutes}></RouterProvider>
    </>
  )
}

export default App
