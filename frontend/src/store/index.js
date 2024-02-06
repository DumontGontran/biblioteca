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
import bd from '@images/BD.avif'

const apiBaseUrl = 'http://localhost:8888'

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
                background: bd
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
        user: {},
        token: JSON.parse(sessionStorage.getItem('token'))
    },
    reducers: {
        login: async (state, action) => {
            state.user = {
                email: action.email,
                password: action.password
            }

            await axios
                .post(`${apiBaseUrl}/auth/login`, state.user)
                .then((res) => {
                    if (res.data.access_token) {
                        sessionStorage.setItem('token', JSON.stringify(res.data))
                        window.location.replace('http://localhost:3000/')
                    }

                    return res.data
                })
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

            await axios
                .put(`${apiBaseUrl}/users`, state.user)
                .then((res) => {
                    if (res.data.access_token) {
                        window.location.replace('http://localhost:3000/login')
                    }

                    return res.data
                })
        },
        profilEdit: () => {

        },
        profilDelete: () => {

        },
        logout: () => {
            sessionStorage.removeItem('token')
            window.location.replace('http://localhost:3000/login')
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
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        })
})