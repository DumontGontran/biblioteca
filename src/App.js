import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@pages/Home'
import '@styles/base/app.scss'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />}></Route>
          <Route path='add' element={null}></Route>
          <Route path='edit' element={null}></Route>
          <Route path='delete' element={null}></Route>
          <Route path='favorites' element={null}></Route>
          <Route path='/*' element={null}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
