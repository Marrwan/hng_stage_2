# Person API Documentation

This documentation outlines the usage of the Person API, which allows you to perform CRUD (Create, Read, Update, Delete) operations on person records.

## Endpoints

### CREATE: Adding a new person

- **Endpoint:** `/api`
- **HTTP Method:** POST

#### Request Format

- Request Body (JSON):
  - `name` (string, required): The name of the person.
  - `age` (number, optional): The age of the person.

#### Sample Request

```json
POST /api
{
  "name": "John Doe",
  "age": 30
}
```

#### Expected Response
```
Status Code: 201 (Created)
Response Body (JSON):
name (string): The name of the created person.
age (number): The age of the created person.
```

#### Sample Response
```json
{
  "name": "John Doe",
  "age": 30
}
```
### READ: Fetching details of a person
- **Endpoint:** `/api/:id`
- **HTTP Method:** GET

#### Request Format
- URL Parameter:
id (string, required): The ID of the person to retrieve.
#### Sample Request
```json
GET /api/123456789
```

#### Expected Response
```
Status Code: 200 (OK)
Response Body (JSON):
name (string): The name of the retrieved person.
age (number): The age of the retrieved person.
```
####  Response
```json
{
  "name": "John Doe",
  "age": 30
}
```

### UPDATE: Modifying details of an existing person

- **Endpoint:** `/api/:id`
- **HTTP Method:** PUT

#### Request Format

- URL Parameter:
    - `id` (string, required): The ID of the person to update.

- Request Body (JSON):
    - `name` (string, required): The updated name of the person.
    - `age` (number, optional): The updated age of the person.
#### Sample Request
```json
PUT /api/123456789
{
  "name": "Updated Name",
  "age": 35
}
```
### Expected Response
```
Status Code: 200 (OK)
```
- Response Body (JSON):
    - `name` (string): The updated name of the person.
    - `age` (number): The updated age of the person.

#### Sample Response
```json
{
  "name": "Updated Name",
  "age": 35
}
```
### DELETE: Removing a person
- **Endpoint:** `/api/:id`
- **HTTP Method:** DELETE

#### Request Format

- URL Parameter:
    - `id` (string, required): The ID of the person to delete.

#### Sample Request
```json
DELETE  /api/123456789
```

#### Expected Response
```
Status Code: 200 (OK)
```
- Response Body (JSON):
    - `name` (string): The name of the deleted person.
    - `age` (number): The age of the deleted person.
#### Sample Response
```json
{
  "name": "Updated Name",
  "age": 35
}
```

#### Validation
The `"name"` field must be a non-empty string.
The `"age"` field, if provided, must be a number.

### Known Limitations and Assumptions
- This API assumes that the "id" parameter is a valid identifier for person records.
- It does not support authentication and authorization mechanisms.
- Error handling is basic and may not cover all edge cases.
- Local Setup and Deployment

### To set up and deploy this API locally or on a server, follow these steps:

- Clone the GitHub repository: git clone https://github.com/marrwan/hng_stage_2.git
- Install dependencies: npm install
- Configure your database connection in the application.
- Start the server: npm start
- Make sure to provide environment variables or configuration files for database settings and other sensitive information.


For any questions or issues, please refer to the GitHub repository or contact the API maintainer.