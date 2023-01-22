DROP DATABASE IF EXISTS manager_db;
CREATE DATABASE manager_db;

USE manager_db;

CREATE TABLE departments(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 id_department INT,
 title VARCHAR(30) NOT NULL,
 salary INT,
 FOREIGN KEY (id_department) REFERENCES departments(id)
 ON DELETE SET NULL
 );

CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager VARCHAR(30),
);