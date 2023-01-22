DROP DATABASE IF EXISTS manager_db;
CREATE DATABASE manager_db;

USE manager_db;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 department_id INT,
 title VARCHAR(30) NOT NULL,
 salary INT,
 FOREIGN KEY (department_id) REFERENCES department(id)
 ON DELETE SET NULL
 );

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_id INT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager VARCHAR(30),
  FOREIGN KEY (department_id) REFERENCES department(id)
 ON DELETE SET NULL
);

