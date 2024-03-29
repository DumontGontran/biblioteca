const { Sequelize } = require('sequelize')

let sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false
    }
)

const db = {}

db.sequelize = sequelize
db.User = require('./models/user')(sequelize)
db.Library = require('./models/library')(sequelize)

db.User.hasMany(db.Library, {foreignKey: 'user_id', onDelete: 'cascade'})
db.Library.belongsTo(db.User, {foreignKey: 'user_id'})

db.sequelize.sync({alter: true})

module.exports = db