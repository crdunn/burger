CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE burgers(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(30) NOT NULL,
	devoured BOOLEAN,
	date_dev TIMESTAMP,
	PRIMARY KEY (id) 
);
