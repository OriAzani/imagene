# Interview Task: Develop a Nest.js Backend Server with Prisma Integration

## Objective

Build a robust backend server using Nest.js and Prisma to support a real estate application. The frontend has been partially developed and will interact with your backend to manage property listings and their associated addresses.
Background: You are tasked with developing the server-side component of a real estate application. The application manages properties and their corresponding addresses. Each property has details such as title, number of rooms, price, floor number, contact information, and is associated with an address. Addresses include state, city, street, and house number. The frontend team has set up the initial user interface and will rely on your backend APIs to perform CRUD (Create, Read, Update, Delete) operations.

## Requirements:

### Technology Stack:

Backend Framework: Nest.js
ORM: Prisma
Database: SQLite
Language: TypeScript
Database Models:

    - Property:
        title: String
        number_of_rooms: Integer
        price: Float
        floor: Integer (Optional)
        contact: String
        address: Relation to Address
    - Address:
        state: String
        city: String
        street: String
        number: Integer (Optional)
        properties: Relation to multiple Properties

#### API Endpoints:

Implement the following RESTful API endpoints:

#### Properties:

    GET /properties: Retrieve a list of all properties.
    GET /properties/:id: Retrieve details of a specific property by ID.
    POST /properties: Create a new property.
    PUT /properties/:id: Update an existing property by ID.
    DELETE /properties/:id: Delete a property by ID.

#### Addresses:

    GET /addresses: Retrieve a list of all addresses.
    GET /addresses/:id: Retrieve details of a specific address by ID.
    POST /addresses: Create a new address.
    PUT /addresses/:id: Update an existing address by ID.
    DELETE /addresses/:id: Delete an address by ID.

### Functional Requirements

- Data Validation: Ensure all incoming data for creating and updating properties and addresses are validated. For example, title and contact should be non-empty strings, number_of_rooms and price should be positive numbers, etc.

- Error Handling: Implement comprehensive error handling. Return appropriate HTTP status codes and error messages for scenarios such as resource not found, validation failures, and server errors.

- Relations Management:
  When creating or updating a property, allow associating it with an existing address or creating a new address.
  When deleting an address, handle the cascading effect on associated properties appropriately (e.g., prevent deletion if properties are linked, or handle property reassignment).

- Full Text Search for Addresses and Properties:
  Requirement: Implement full-text search functionality to allow users to search addresses and properties based on various fields such as title, state, city, street.
  Implementation Example: Use a full-text search engine like [Meilisearch](https://www.meilisearch.com/) to index and search address data.

### Features:

Indexing: Set up [Meilisearch](https://www.meilisearch.com/) (or a similar search engine) to index the Address data from your SQLite database.
Search API Endpoint: Create new endpoints, e.g., GET /addresses/search, GET /properties/search, that accepts query parameters to perform full-text searches on addresses and properties.
Search Parameters: Allow searching by partial matches, synonyms, and typo tolerance to enhance the search experience.
Integration: Ensure that the search index stays synchronized with the database. Implement hooks or background jobs to update the search index whenever addresses and properties are created, updated, or deleted.
Performance: Optimize search queries for speed and relevance.

Setup Instructions:

Initialize a new Nest.js project under the backend folder.
Set up Prisma with SQLite as the database.
Define the Prisma schema based on the models described above.
Generate Prisma client and integrate it into the Nest.js application.
Implement the necessary modules, controllers, and services in Nest.js to handle the API endpoints.

Ensure the application can be started with a simple command (e.g., npm run start) and includes any necessary migration steps.

Deliverables:
Source code of the Nest.js application with Prisma integration.

### Evaluation Criteria:

- Correctness: The backend should meet all the functional requirements and correctly implement the API endpoints.
-
- Code Quality: Clean, readable, and maintainable code with proper use of Nest.js and Prisma best practices.
- Error Handling & Validation: Robust handling of edge cases and invalid inputs.
- Full Text Search Implementation: Effective integration of a full-text search engine, ensuring accurate and efficient search capabilities for addresses.

Good luck!
