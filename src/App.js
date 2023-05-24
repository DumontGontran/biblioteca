import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeView, AddingView, ErrorView } from '@pages'
import '@styles/base/app.scss'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route index path='/' element={<HomeView />}></Route>
          <Route path='add' element={<AddingView />}></Route>
          <Route path='list' element={null}></Route>
          <Route path='wishlist' element={null}></Route>
          <Route path='favorites' element={null}></Route>
          <Route path='/*' element={<ErrorView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
