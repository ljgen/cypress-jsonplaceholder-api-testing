# Cypress JSONPlaceholder API Testing

## Introduction

This repository contains automated tests for the JSONPlaceholder API using Cypress. The tests cover basic CRUD operations: Create, Read, Update, and Delete, as well as handling of non-existing endpoints.

## Features

- **Fetch Posts**: Verifies that the endpoint for fetching posts returns the correct status and has the expected length of posts.
- **Create a Post**: Verifies that a new post can be created and checks that the response contains the expected properties.
- **Update a Post**: Verifies that an existing post can be updated and checks that the response contains the updated values.
- **Delete a Post**: Verifies that a post can be deleted successfully.
- **Non-Existing**: Verifies that accessing a non-existing endpoint returns a 404 status code.

## Setup
To run the tests:
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npx cypress open` to start Cypress Test Runner.

## Contact
If you have any questions, feel free to contact me through [https://www.linkedin.com/in/tipakorn-lj/].
