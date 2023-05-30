import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeView, AddingView, LibraryView, WishlistView, ErrorView, FavoritesView } from '@pages'
import '@styles/base/app.scss'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route index path='/' element={<HomeView />}></Route>
          <Route path='add' element={<AddingView />}></Route>
          <Route path='library' element={<LibraryView />}></Route>
          <Route path='wishlist' element={<WishlistView />}></Route>
          <Route path='favorites' element={<FavoritesView />}></Route>
          <Route path='/*' element={<ErrorView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
