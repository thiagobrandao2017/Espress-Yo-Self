const db = require("../config/database");
const bcrypt = require("bcrypt");

let User = {}

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

User.saveShop = (user, shop) => {
  return db.one(`
    INSERT INTO favorites
    (user_id, name, rating, title, price, address, phone)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;`, [user.id,shop.name,shop.rating,shop.title,shop.price,shop.address,shop.phone]);
};

User.showFavorites = (user_id) => {
  return db.manyOrNone(`
    SELECT * from favorites WHERE user_id = $1
    `, user_id);
};

User.deleteFavorite = (user, shop) => {
  return db.none(`
    DELETE FROM favorites WHERE user_id = $1
    AND id = $2;
    `, [user,shop])
};

module.exports = User;
