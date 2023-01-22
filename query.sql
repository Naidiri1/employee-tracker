SELECT *
FROM roles
JOIN departments
ON roles.id_department = departments.id;