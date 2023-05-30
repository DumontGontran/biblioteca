import { configureStore, createSlice } from "@reduxjs/toolkit"
import newRomance from '@images/newRomance.avif'
import romance from '@images/romance.avif'
import fantastic from '@images/fantastic.avif'
import mangas from '@images/mangas.jpg'
import thriller from '@images/thriller.avif'
import child from '@images/child.avif'
import teenager from '@images/teenager.avif'
import adventure from '@images/adventure.avif'
import theater from '@images/theater.avif'
import BD from '@images/BD.avif'

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
                title: 'Thriller-Policier',
                background: thriller
            },
            {
                id: 5,
                title: 'Aventure',
                background: adventure
            },
            {
                id: 6,
                title: 'Adolescent',
                background: teenager
            },
            {
                id: 7,
                title: 'Enfant',
                background: child
            },
            {
                id: 8,
                title: 'Mangas',
                background: mangas
            },
            {
                id: 9,
                title: 'BD',
                background: BD
            },
            {
                id: 10,
                title: 'Théâtre',
                background: theater
            }]
    },
    reducers: {

    }
})

const users = createSlice({
    name: 'Users',
    initialState: {
        user: []
    },
    reducers: {

    }
})

const library = createSlice({
    name: 'Library',
    initialState: {
        library: []
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