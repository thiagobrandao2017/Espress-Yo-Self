DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS users;

CREATE TABLE users
(id BIGSERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(255),
email VARCHAR(255),
password VARCHAR(255));



CREATE TABLE favorites
(id BIGSERIAL PRIMARY KEY,
user_id INT REFERENCES users(id),
image_url VARCHAR(255),
name VARCHAR(255),
rating VARCHAR(255),
title VARCHAR(255),
price VARCHAR(255),
address VARCHAR(255),
phone VARCHAR(255));
