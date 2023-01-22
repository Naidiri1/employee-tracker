INSERT INTO departments (department_name)
VALUES 
("Engineering"),
("Finance"),
("Legal"),
("Sales");

INSERT INTO roles (id_department, title, salary)
VALUES 
(4, "Sales Lead", 100000),
(4, "Salesperson", 80000),
(1, "Lead Engineer", 150000),
(1, "Software Engineer", 150000),
(2, "Account Manager", 160000),
(2, "Accountant", 125000),
(3, "Legal Team Lead", 250000),
(3, "Lawyer", 190000);

INSERT INTO employees(firts_name, last_name, manager)
VALUES
("Michale", "Brown", NULL),
("Malia", "Rojas", "Michael Brown"),
("Tom", "Perez", NULL),
("Danna", "Blackburn", "Tom Perez"),
("Ernesto", "Sanchez",  NULL),
("Roberto", "Fernandez", "Ernesto Sanchez"),
("Karla", "Potts", NULL),
("Erika", "Wells", "Karla Potts");