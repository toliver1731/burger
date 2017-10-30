DROP DATABASE IF EXISTS burger_db;

create database burger_db;

USE burger_db;

create table burgers (
	id int auto_increment not null,
    burger_name varchar(255) not null,
    devoured BOOLEAN DEFAULT false,
    date timestamp,
    primary key(id)
); 

INSERT INTO burgers (burger_name, devoured) VALUES ("Double Bacon Cheeseburger", FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ("Buffalo Burger", FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ("Swiss Mushroom Burger", FALSE);