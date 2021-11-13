const BaseDAO = require('./basedao')

module.exports = class UserDAO extends BaseDAO {
    constructor(db) {
        super(db)
    }
}
