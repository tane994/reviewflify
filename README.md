# Reviewflify

Reviewflify is a web application that allows users to post, update, and delete reviews for movies. It is built using React for the frontend and Node.js with Express for the backend, utilizing MySQL as the database.

## Features

- **Post Movie Reviews**: Users can write and submit reviews for their favorite movies.
- **Update Reviews**: Reviews can be edited after posting.
- **Delete Reviews**: Users can delete reviews they have posted.
- **View All Reviews**: All posted reviews can be viewed dynamically on the homepage.

## Technologies Used

<div style="background: #000; padding: 20px; text-align: center; color: white;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" style="height: 80px; vertical-align: middle; margin-right: 20px;" alt="React"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" style="height: 80px; vertical-align: middle; margin-right: 20px;" alt="Node.js"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" style="height: 80px; vertical-align: middle; margin-right: 20px;" alt="Express"/>
  <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" style="height: 80px; vertical-align: middle; margin-right: 20px;" alt="MySQL"/>
</div>


- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Others**: Axios for API requests, CORS enabled via `cors`, and `body-parser` for parsing incoming request bodies.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and MySQL installed on your local machine.

### Installation

1. Clone the repository:
   ```bash
   git clone [repository_url]
   ```
2. Navigate to the project directory:
   ```bash
   cd [project_name]
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a MySQL database named `CRUDDatabase` and execute the provided SQL scripts to create and populate the necessary tables.

5. Configure your database connection in `config/dbConfig.js`:
   ```javascript
   const dbPool = mysql.createPool({
       host: 'localhost',
       user: 'your_username',
       password: 'your_password',
       database: 'CRUDDatabase'
   });
   ```
6. Start the backend server:
   ```bash
   npm run start
   ```
7. In a new terminal, start the frontend:
   ```bash
   npm run dev
   ```
   Access the app through: [http://localhost:3000](http://localhost:3000)

## Usage

- **Adding a Review**: Navigate to the main page, fill out the form with the movie name and your review, then submit.
- **Deleting a Review**: Click the delete button next to the review you want to remove.
- **Updating a Review**: Modify the desired review and confirm by clicking the update button.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

