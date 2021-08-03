INSERT INTO department (id, name)
VALUES  (1, "Marketing/Sales"),
        (2, "UX/UI"),
        (3, "Engineering");

INSERT INTO role (id, title, salary, department_id)
VALUES  (1, "Sales - B2B", 50000, 1),
        (2, "Admin", 40000, 1),
        (3, "Marketing Coordinator", 55000, 1),
        (4, "Photo Editor", 60000, 2),
        (5, "Graphic Designer", 80000, 2),
        (6, "UI Designer", 100000, 2),
        (7, "Engineering Intern", 50000, 3),
        (8, "Full-stack Web Developer", 100000, 3),
        (9, "Senior Engineer II", 160000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (3, "John", "Appleseed", 3, NULL),
        (1, "Kyle", "Bush", 1, 3),
        (2, "Xavier", "Carrey", 2, 3),
        (7, "Coin", "Doge", 6, NULL),
        (4, "Basil", "Ethereum", 4, 7),
        (5, "Pierce", "Franklin", 4, 7),
        (6, "Snail", "Gary", 5, 7),
        (10, "Drew", "Holliday", 5, NULL),
        (8, "Dom", "Nguyen", 8, NULL),
        (9, "Michael", "Phelps", 7, NULL);