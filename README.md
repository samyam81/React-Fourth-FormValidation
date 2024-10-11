# Form Validation App

The Form Validation App is a simple React application that allows users to sign in by entering their email and password. It features real-time validation to ensure that the inputs meet specified criteria before submission.

## Features
- **Email Validation**: Ensures that the email field is filled out and in a valid format.
- **Password Validation**: Checks that the password is at least 6 characters long.
- **Real-time Feedback**: Displays error messages dynamically as the user fills out the form.
- **Success Message**: Confirms successful form submission.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **CSS**: Custom styles for form layout and design.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/samyam81/React-Fourth-FormValidation.git
   ```
2. Navigate to the project directory:
   ```bash
   cd React-Fourth-FormValidation
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   The app will run at `http://localhost:3000`.

## Usage
1. Fill in the **Email** and **Password** fields.
2. If any validation rules are violated, error messages will be displayed below the corresponding input fields.
3. Click the **Submit** button to submit the form. If successful, a confirmation message will be shown.

## Project Structure
```
/src
  ├── App.js             # Main component for the app
  ├── index.js           # Entry point of the React app
  └── App.css            # Styles for the app
```

## Styling
The app features:
- A clean layout with a focus on usability and clarity.
- Responsive design to ensure compatibility across different devices.

### CSS Classes
- `.Form`: Styles for the form container.
- `.success-message`: Styles for the success message after form submission.
- Error messages are displayed in red below the respective input fields.

## Future Improvements
- Add more fields (e.g., username, confirm password) with validation.
- Implement form submission to a backend service.
- Enhance accessibility features.

---

Enjoy using the **Form Validation App** for a smooth sign-in experience!
