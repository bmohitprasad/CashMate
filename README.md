## Description:

CashMate is a web application designed to facilitate money transfers and account management. It utilizes MongoDB for data storage, Node.js for backend development, React for frontend interface, and Tailwind CSS for styling.

---

## Features:

1. *Signup Page:*
   - Users can create an account by providing their first name, last name, email, and password.
   - Input validation is implemented to ensure secure and valid data submission.
   - Upon successful signup, users are redirected to the dashboard.

2. *Send Money Page:*
   - Users can initiate money transfers to other accounts.
   - The recipient's name and amount are required fields.
   - Input validation ensures that the amount is a non-negative number.
   - Transactions are secured with user authentication using JWT tokens.

3. *Dashboard:*
   - Provides an overview of the user's account balance.
   - Displays a list of users for potential money transfers.
   - Users can navigate between different sections of the application.

---

## Technologies Used:

- *Frontend:*
  - React
  - Tailwind CSS

- *Backend:*
  - Node.js
  - MongoDB

---

## Installation:

1. Clone the repository:
   
   git clone <repository-url>
   

2. Install dependencies:
   
   cd CashMate
   npm install
   

3. Start the development server:
   
   npm start
   

4. Open your browser and navigate to http://localhost:3000 to access the application.

---

## Usage:

1. *Signup:*
   - Navigate to the signup page.
   - Fill in the required information and click on the "Sign up" button.
   - Upon successful signup, you will be redirected to the dashboard.

2. *Send Money:*
   - Navigate to the "Send Money" page from the dashboard.
   - Enter the recipient's name and the amount you want to transfer.
   - Click on the "Initiate Transfer" button to complete the transaction.

3. *Dashboard:*
   - View your account balance and recent transactions.
   - Explore the various features of the application from the dashboard interface.

---
