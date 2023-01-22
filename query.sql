SELECT * 
FROM department
ORDER BY name ASC

SELECT department_id, title, department.name AS name, salary
FROM role INNER JOIN department ON role.department_id = department.id;

SELECT department_id, title, department.name AS name
FROM department
RIGHT JOIN role
ON department.department_id = role.role.id
INNER JOIN employee
ON department.department_id = employee.id;