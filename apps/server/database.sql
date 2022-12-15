CREATE DATABASE checklistapp;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
  id serial PRIMARY KEY,
  user_name VARCHAR(255),
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  user_dob VARCHAR(255),
  user_specialty VARCHAR (255)
);

INSERT INTO users(user_name, user_email, user_password, user_dob, user_specialty) VALUES ('jiayi', 'jiayi@gmail.com', '123', '12/12/2022', 'medtech')

--one to many: one procedure has many patients
-- parent table
DROP TABLE IF EXISTS procedure CASCADE;
CREATE TABLE procedure (
  id serial PRIMARY KEY,
  procedure_name VARCHAR(255) NOT NULL)
INSERT INTO procedure(procedure_name)
VALUES
('Treadmil'),
('Exercise'),
('Dobutamine')

--child table
DROP TABLE IF EXISTS patient;
CREATE TABLE patient(
  id serial PRIMARY KEY,
  patient_name VARCHAR(255) NOT NULL,
  patient_ic VARCHAR(255) NOT NULL,
  patient_date VARCHAR(255) NOT NULL,
  patient_time VARCHAR(255) NOT NULL,
  patient_status VARCHAR(255), 
  patient_procedure VARCHAR(255) 
  ); --procedure_id is foreign key

INSERT INTO patient(patient_name, patient_ic, patient_time, patient_date, patient_status, patient_procedure)
VALUES
('James', 'S12334576', '8.00am', '12/12/2022', '', ''),
('Jane', 'S2727272F', '9.00am', '12/12/2022', '',''),
('Jack', 'S12334777', '10.00am', '12/12/2022', '', ''),
('Rose', 'S2727222', '11.00am', '12/12/2022', '', '')

SELECT *
FROM patient
INNER JOIN procedure
ON (procedure_id = id)

