
## Title

HEALTHCARE SERVICES API

This project is a simple API built using Node.js and Express to manage a list of healthcare services. It allows you to perform CRUD (Create, Read, Update, Delete) operations on healthcare services, which are stored in a MongoDB database.


## Features
- Add a new service: Create a new healthcare service with fields for name, description,    and price.
- Get all services: Retrieve a list of all available healthcare services.
- Update a service: Modify the details of an existing service.
- Delete a service: Remove a service from the list.


## Tech Stack
- Node.js with Express.js for building the API.
- MongoDB as the database. 

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file:
- MongoDB connection string
`MONGO_URI`
(Reffer the .env.sample file)

## Installation and Run

Follow these steps to set up the project on your local machine:

- Clone the repository or extract the provided zip file:
```bash
git clone https://github.com/M-D-Nadeem/healthcare-api.git
```

- Install Dependencies:
```bash
  npm install 
```

- Configure MongoDB connection

- Run the project:
```bash
  npm run start
```

- Test and run the API using Postman:
  1. Add a new service: 
  Method: post
  URL: http://localhost:7000/healthcare/addService/
  2. Get all services: 
  Method: get
  URL: http://localhost:7000/healthcare/getAllService/
  3. Modify a service: 
  Method: post
  URL: http://localhost:7000/healthcare/modifyService/id_of_your_service_you_want_to_modify
  4. Modify a service: 
  Method: delete
  URL: http://localhost:7000/healthcare/deleteService/id_of_your_service_you_want_to_delete



## Authors
- [@MD Nadeem](https://github.com/M-D-Nadeem/)


## Demo video
https://youtu.be/tGGDOaK8qmk