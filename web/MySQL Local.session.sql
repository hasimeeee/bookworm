CREATE DATABASE oracle;
USE oracle;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO users (username, email, password) VALUES
    ('metin123', 'metin123@hotmail.com', '123metin')


SELECT * FROM users;
