import { configureStore, createSlice } from "@reduxjs/toolkit"
import newRomance from '@images/newRomance.avif'
import romance from '@images/romance.avif'
import fantastic from '@images/fantastic.avif'
import mangas from '@images/mangas.jpg'
import thriller from '@images/thriller.avif'

const categories = createSlice({
    name: 'Categories',
    initialState: {
        categories:
            [{
                id: 1,
                title: 'Fantastique',
                background: fantastic
            },
            {
                id: 2,
                title: 'New Romance',
                background: newRomance
            },
            {
                id: 3,
                title: 'Romance',
                background: romance
            },
            {
                id: 4,
                title: 'Thriller/Policier',
                background: thriller
            },
            {
                id: 5,
                title: 'Mangas',
                background: mangas
            }]
    },
    reducers: {

    }
})

const users = createSlice({
    name: 'Users',
    initialState: {

    },
    reducers: {

    }
})

const library = createSlice({
    name: 'Library',
    initialState: {

    },
    reducers: {

    }
})

export const store = configureStore({
    reducer: {
        Categories: categories.reducer,
        Users: users.reducer,
        Library: library.reducer
    }
})