import { configureStore, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
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

const API_baseUrl = 'http://localhost:8888'

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
    user: {}
    },
    reducers: {
        login: async (state, action) => {
            state.user = {
                email: action.email,
                password: action.password
            }

            console.log('user: ', state.user)

            const res = await axios.post(`${API_baseUrl}/auth/login`, state.user)
            console.log(res.data)
            return res.data
        },
        register: async (state, action) => {
            state.user = {
                pseudo: action.pseudo,
                nom: action.nom,
                prenom: action.prenom,
                email: action.email,
                password: action.password,
                confirmPassword: action.confirmPassword
            }

            console.log('user: ', state.user)

            const res = await axios.post(`${API_baseUrl}/users`, state.user)
            console.log(res.data)
            return res.data
        }
    }
})

const library = createSlice({
    name: 'Library',
    initialState: {
        library: [],
        book: {}
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