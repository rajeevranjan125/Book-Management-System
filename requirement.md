Create a simple RESTful backend application using Spring Boot for a “Book Management API”.

Technical Requirements
• Framework: Spring Boot 4.1.0
• Build Tool: Maven
• Java Version: Java 24
Include the following dependencies:
• Spring Web
• Spring Data JPA
• H2 Database
• Lombok
• Spring Boot DevTools
• Spring Validation
• Open API Swagger UI


Application Requirements
Domain Model
Create a Book entity with the following fields:

• id → Long, auto-generated primary key

• title → String

• author → String

• title → String

• author → String

• price → Double

Apply appropriate validation annotations such as:
• Non-null / non-empty validation for title and author

• Positive value validation for price

Repository Layer
Create a repository interface:
BookRepository extends JpaRepository<Book, Long>

Service Layer
Create a BookService class containing business logic with the following methods:

• addBook(Book book)

• getAllBooks()

REST Controller
Create a controller named BookController.

Expose the following endpoints:
• BookController.

Expose the following endpoints:
• POST /api/books

• Add a new book
• Return appropriate HTTP status codes
• Use ResponseEntity

Sample Request:
json -5 lines

{
  "title": "Clean Code",
  "author": "Robert Martin",
  "price": 35.5
}


• GET /api/books

• Return all books stored in the database
• Use ResponseEntity

Sample Response:
json -8 lines

[
  {
    "id": 1,
    "title": "Clean Code",
    "author": "Robert Martin",
    "price": 35.5
  }
]


Database Configuration
• Use H2 in-memory database
• Enable the H2 console
• Configure all settings using application.properties

Additional Requirements
• Use clean layered architecture (Controller → Service → Repository)
• Add proper exception handling where appropriate
• Use meaningful HTTP status codes
• Keep the code simple, readable, and production-style
• Use Lombok annotations where beneficial to reduce boilerplate code
• Add Open API documentation for the exposed endpoints.
• Add some initial dummy data to the db, during startup.
• Ensure that h2 db data is stored in a file, so that data is not lost during application restart.
Output Expectations
Generate the complete project structure including:
• Maven pom.xml

• Entity class
• Repository interface
• Service class
• Controller class
• Configuration in application.properties

• Any required validation or exception handling classes
• Sample curl commands to test all APIs

• Instructions to test all APIs
• Instructions to run the application locally
Ensure the generated project is fully runnable without additional configuration.



=============================================================================
FRONT END
=============================================================================
Can you please create a basic angular based front end application to call the "/api/books" GET and POST rest APIs to display and add data