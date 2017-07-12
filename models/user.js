const db = require("../config/database");
const bcrypt = require("bcrypt");

let User = {}

User.findAll = () => {}

User.findById = () => {}

User.create = (user) => {
    //Encrypt password before inserting into DB
    user.password = bcrypt.hashSync(user.password, 10);

    return db.one(`
        INSERT INTO users
        (first_name, last_name, email, password)
        VALUES
        ($1, $2, $3, $4)
        RETURNING *
    `, [user.first_name, user.last_name, user.email, user.password]);
}

User.findByEmail = (email) => {
    return db.oneOrNone(`
        SELECT * FROM users
        WHERE email = $1
    `, [email]);
}

User.update = () => {}

User.destroy = () => {}

module.exports = User;
