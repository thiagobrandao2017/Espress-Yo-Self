DROP DATABASE IF EXISTS shops_db;
CREATE DATABASE shops_db;
\c shops_db

DROP TABLE IF EXISTS users;

CREATE TABLE users
(id BIGSERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(255),
email VARCHAR(255),
password VARCHAR(255));

DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites
(id BIGSERIAL PRIMARY KEY,
user_id INT REFERENCES users(id),
name VARCHAR(255),
rating VARCHAR(255),
title VARCHAR(255),
price VARCHAR(255),
address VARCHAR(255),
phone VARCHAR(255));
