SELECT * 
FROM department
ORDER BY name ASC

SELECT department_id, title, department.name as name, salary
FROM role INNER JOIN department ON role.department_id = department.id;


 SELECT department_id, name, first_name, last_name, manager
 FROM department, employee, role
inner join  department ,role ,employee

SELECT * FROM employee