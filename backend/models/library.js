const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    return Library = sequelize.define('Library', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        user_id:{
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        titre:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        tome:{
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        auteur:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        edition:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        format:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        favoris:{
            type: DataTypes.TINYINT(1),
            allowNull: false
        },
        etat:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        note:{
            type: DataTypes.INTEGER(10),
            allowNull: false
        },
        couverture:{
            type: DataTypes.STRING(45),
            allowNull: false
        }
    })
}