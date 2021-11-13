const UserDAO = require("../datamodel/userdao")

module.exports = class UserService {
    constructor(db) {
        this.dao = new UserDAO(db)
    }
}
