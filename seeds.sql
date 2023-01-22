INSERT INTO department (name)
VALUES 
("Engineering"),
("Finance"),
("Legal"),
("Sales");

INSERT INTO role (department_id, title, salary)
VALUES 
(4, "Sales Lead", 100000),
(4, "Salesperson", 80000),
(1, "Lead Engineer", 150000),
(1, "Software Engineer", 150000),
(2, "Account Manager", 160000),
(2, "Accountant", 125000),
(3, "Legal Team Lead", 250000),
(3, "Lawyer", 190000);

INSERT INTO employee (department_id, first_name, last_name, manager)
VALUES
(1, "Michale", "Brown", NULL),
(1, "Malia", "Rojas", "Michael Brown"),
(2, "Tom", "Perez", NULL),
(2, "Danna", "Blackburn", "Tom Perez"),
(3, "Ernesto", "Sanchez",  NULL),
(3, "Roberto", "Fernandez", "Ernesto Sanchez"),
(4, "Karla", "Potts", NULL),
(4, "Erika", "Wells", "Karla Potts");