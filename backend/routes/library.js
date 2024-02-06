const express = require('express')
const checkTokenMiddleware = require('../jsonwebtoken/check')
const libraryCtrl = require('../controllers/library')

let router = express.Router()

router.use( (req, res, next) => {
    const event = new Date()
    console.log('Biblioteca Time:', event.toString())
    next()
})

router.get('', libraryCtrl.getAllLibrary)

router.get('/:id', libraryCtrl.getLibrary)

router.put('', checkTokenMiddleware, libraryCtrl.addLibrary)

router.patch('/:id', checkTokenMiddleware, libraryCtrl.updateLibrary)

router.post('/untrash/:id', checkTokenMiddleware, libraryCtrl.untrashLibrary)
    
router.delete('/trash/:id', checkTokenMiddleware, libraryCtrl.trashLibrary)

router.delete('/:id', checkTokenMiddleware, libraryCtrl.deleteLibrary)

module.exports = router