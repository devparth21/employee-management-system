# Employee Management System

A full stack Employee Management System built with Spring Boot, MySQL, and Vanilla JavaScript.

## Tech Stack

- **Backend:** Java 21, Spring Boot 4.1, Spring Data JPA, Hibernate
- **Database:** MySQL 8.0
- **Frontend:** HTML, CSS, Vanilla JavaScript
- **Tools:** Maven, Postman, Eclipse IDE

## Features

- Add, view, update, and delete employees (Full CRUD)
- Input validation with proper error responses
- Custom exception handling with meaningful HTTP status codes
- Pagination support for large datasets
- Search employees by department
- Responsive frontend dashboard with live API integration

## REST API Endpoints

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | /employees | Get all employees |
| GET | /employees/{id} | Get employee by ID |
| POST | /employees | Add new employee |
| PUT | /employees/{id} | Update employee |
| DELETE | /employees/{id} | Delete employee |
| GET | /employees/paginated?page=0&size=5 | Get paginated employees |
| GET | /employees/department/{dept} | Search by department |

## Project Structure

```
src/main/java/com/parth/ems/
├── controller/
├── service/
├── repository/
├── entity/
└── exception/

src/main/resources/
├── static/
└── application.properties
```

## Setup Instructions

1. Clone the repository

```
git clone https://github.com/devparth21/employee-management-system.git
```

2. Create MySQL database

```sql
CREATE DATABASE ems_db;
```

3. Update `application.properties` with your MySQL credentials

4. Run the application

```
./mvnw spring-boot:run
```

5. Open browser and go to `http://localhost:8080`

## Author

Parth Jain | [GitHub](https://github.com/devparth21) | [LinkedIn](https://linkedin.com/in/parth-jain-6827a0358)