const DB = require('../db.config')
const Library = DB.Library
const User = DB.User

exports.getAllLibrary = (req, res) => {
    Library.findAll({paranoid: false})
        .then(library => res.json({ data: library }))
        .catch(_err => res.status(500).json({ message: 'Erreur interne' }))
}

exports.getLibrary = async (req, res) => {
    let libraryId = parseInt(req.params.id)

    if (!libraryId) {
        return res.json(400).json({ message: 'Paramétre manquant' })
    }

    try {
        let library = await Library.findOne({ where: { id: libraryId }, include: {model: User, attributes:['id','pseudo','email']} })

        if (library === null) {
            return res.status(404).json({ message: 'Cet ouvrage n\'existe pas !' })
        }

        return res.json({ data: library })
    } catch (err) {
        return res.status(500).json({ message: 'Erreur interne' })
    }
}

exports.addLibrary = async (req, res) => {
    const { user_id, titre, tome, auteur, edition, format, favoris, etat, note, couverture } = req.body

    if (!user_id || !titre || !tome || !auteur || !edition || !format || ! favoris || !etat || !note || !couverture) {
        return res.status(400).json({ message: 'Vous devez remplir tous les champs !' })
    }

    try{
        let library = await Library.findOne({ where: { titre: titre }, raw: true })
        if (library !== null) {
            return res.status(409).json({ message: `L\'ouvrage "${titre}" existe déjà !` })
        }

        library = await Library.create(req.body)
        return res.json({ message: 'Ouvrage Créé', data: library })
    }catch(err){
        return res.status(500).json({ message: 'Erreur interne' })
    }
}

exports.updateLibrary = async (req, res) => {
    let libraryId = parseInt(req.params.id)
    const { titre, tome, auteur, edition, format, favoris, etat, note, couverture } = req.body

    if (!libraryId) {
        return res.status(400).json({ message: 'Paramétre manquant' })
    }

    if (!titre || !tome || !auteur || !edition || !format || ! favoris || !etat || !note || !couverture) {
        return res.status(400).json({ message: 'Vous devez remplir tous les champs !' })
    }

    try{
        let library = await Library.findOne({ where: { id: libraryId }, raw: true })
        if (library === null) {
            return res.status(404).json({ message: 'Cet ouvrage n\'existe pas !' })
        }

        await Library.update(req.body, { where: { id: libraryId } })
        return res.json({ message: 'Ouvrage mis à jour' })
    }catch(err){
        return res.status(500).json({ message: 'Erreur interne' })
    }    
}

exports.untrashLibrary = (req, res) => {
    let libraryId = parseInt(req.params.id)

    if (!libraryId) {
        return res.status(400).json({ message: 'Paramétre manquant' })
    }

    Library.restore({ where: { id: libraryId } })
        .then(() => res.status(204).json({}))
        .catch(_err => res.status(500).json({ message: 'Erreur interne' }))
}

exports.trashLibrary = (req, res) => {
    let libraryId = parseInt(req.params.id)

    if (!libraryId) {
        return res.status(400).json({ message: 'Paramétre manquant' })
    }

    Library.destroy({ where: { id: libraryId } })
        .then(() => res.status(204).json({}))
        .catch(_err => res.status(500).json({ message: 'Erreur interne' }))
}

exports.deleteLibrary = (req, res) => {
    let libraryId = parseInt(req.params.id)

    if (!libraryId) {
        return res.status(400).json({ message: 'Paramétre manquant' })
    }

    Library.destroy({ where: { id: libraryId }, force: true })
        .then(() => res.status(204).json({}))
        .catch(_err => res.status(500).json({ message: 'Erreur interne' }))
}