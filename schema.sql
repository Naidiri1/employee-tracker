DROP DATABASE IF EXISTS manager_db;
CREATE DATABASE manager_db;

USE manager_db;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
 role_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 department_id INT,
 title VARCHAR(30) NOT NULL,
 salary INT,
 FOREIGN KEY (department_id) REFERENCES department(id)
 ON DELETE SET NULL
 );

CREATE TABLE employee(
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  role_id INT UNSIGNED,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INT UNSIGNED,
  FOREIGN KEY (manager_id) REFERENCES employee(id)
  ON DELETE SET NULL,
  FOREIGN KEY (role_id) REFERENCES role(role_id)
  ON DELETE CASCADE
);

