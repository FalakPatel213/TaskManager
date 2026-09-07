# 📝 ToDo List Application

A modern, responsive Task Management application built with **React.js** and **Material-UI (MUI)**. The application allows users to create, edit, and delete tasks while providing user authentication, persistent local storage, responsive UI, and light/dark theme support.

---

## ✨ Features

* 🔐 **User Authentication** - Sign up and log in using username and email
* 🛡️ **Protected Routes** - Task management pages are accessible only after login
* ✅ **Add Tasks** - Create new tasks with a title and description
* ✏️ **Edit Tasks** - Modify the title and/or description of existing tasks
* 🗑️ **Delete Tasks** - Remove tasks that are no longer required
* 💾 **Persistent Task Storage** - Tasks are stored in browser `localStorage`
* 👤 **User Storage** - Registered users are stored locally in `localStorage`
* 🚪 **Logout** - Users can securely end their current application session
* 🌙 **Dark Theme** - Modern dark interface with gradient accents
* ☀️ **Light Theme** - Clean light interface for better visibility
* 💡 **Theme Persistence** - Selected theme is remembered using `localStorage`
* 🎨 **Material-UI Design** - Professional interface using MUI components
* 📱 **Responsive Design** - Layout adapts to different screen sizes
* 🔍 **About Page** - Displays information about the application and its features
* ⚡ **Interactive UI** - Hover effects, transitions, alerts, and animations
* 🎯 **User-Friendly Interface** - Simple and intuitive task management workflow

> **Note:** Authentication in this project is implemented using browser `localStorage` for demonstration and educational purposes. It is not intended to replace a production authentication system with a backend and secure password handling.

---

## 🛠️ Technologies Used

| Technology            | Purpose                                                             |
| --------------------- | ------------------------------------------------------------------- |
| **React.js**          | Frontend library for building the user interface                    |
| **React Router DOM**  | Client-side routing and protected navigation                        |
| **Material-UI (MUI)** | UI components and styling                                           |
| **MUI Icons**         | Icons used throughout the application                               |
| **Emotion**           | CSS-in-JS styling used by Material-UI                               |
| **JavaScript (ES6+)** | Application logic and React functionality                           |
| **localStorage**      | Persistent storage for users, tasks, sessions, and theme preference |
| **CSS3**              | Global styling, animations, and responsive behavior                 |

---

## 📦 Installation

### Prerequisites

* Node.js
* npm
* A modern web browser
* Git

### Step-by-Step Setup

### 1. Clone the repository

```bash
git clone https://github.com/FalakPatel213/TaskManagement.git
cd TaskManagement
```

### 2. Install dependencies

```bash
npm install
```

If the Material-UI packages are not already present in `package.json`, install them using:

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

Make sure React Router DOM is installed:

```bash
npm install react-router-dom
```

### 3. Start the development server

For a Vite-based project:

```bash
npm run dev
```

The terminal will display the local development URL, typically:

```text
http://localhost:5173
```

> If your project's `package.json` uses a different start script, use the script defined there.

---

## 🔐 Authentication

The application includes a simple local authentication system.

### Sign Up

Users can create an account using:

* Username
* Email address

The registered user is stored in:

```text
localStorage → users
```

Duplicate usernames or email addresses are prevented.

### Login

Users can log in using the username and email combination registered during signup.

After successful login, the current session is stored as:

```text
localStorage → currentUser
```

The user is then redirected to:

```text
/tasks
```

### Protected Routes

The task management area is protected using a `ProtectedRoute` component.

If there is no `currentUser` in `localStorage`, the user is automatically redirected to:

```text
/login
```

### Logout

When the user clicks **Logout**:

1. `currentUser` is removed from `localStorage`
2. The user is redirected to `/login`
3. Protected pages can no longer be accessed without logging in again

> **Security Note:** This is a frontend demonstration of authentication. Since users and sessions are stored in `localStorage`, this implementation should not be used for real-world secure authentication.

---

## 🧭 Application Routes

| Route     | Page                  | Access    |
| --------- | --------------------- | --------- |
| `/login`  | Login page            | Public    |
| `/signup` | Signup page           | Public    |
| `/tasks`  | Task management page  | Protected |
| `/about`  | About page            | Protected |
| `/`       | Redirects to `/tasks` | Protected |

If an unauthenticated user attempts to access a protected route, they are redirected to `/login`.

---

## 🚀 Build for Production

Create a production build using:

```bash
npm run build
```

For a Vite-based application, the production files are generated in the:

```text
dist/
```

directory.

---

## 📁 Project Structure

```text
TaskManagement/
│
├── public/
│
├── src/
│   │
│   ├── Components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   ├── AddTask.jsx
│   │   ├── EditTask.jsx
│   │   ├── About.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── README.md
└── .gitignore
```

> File names may vary slightly depending on the project's actual file extensions and Vite configuration.

---

# 🎯 Usage Guide

## 1. Create an Account

1. Open the application.
2. Navigate to **Sign Up**.
3. Enter a username.
4. Enter an email address.
5. Click **Create Account**.
6. The account is saved locally.
7. You are redirected to the Login page.

---

## 2. Login

1. Enter your registered username.
2. Enter the corresponding email address.
3. Click **Login**.
4. After successful authentication, you are redirected to the Tasks page.

---

## 3. Adding a Task

1. Enter a task title in the **Title** field.
2. Enter a task description in the **Description** field.
3. Click **Add Task**.
4. The task appears in the task list.
5. The task is automatically saved to `localStorage`.

Both title and description are required when adding a task.

---

## 4. Editing a Task

1. Click the **Edit** icon on a task.
2. The Add Task form is replaced by the **Edit Task** form.
3. The selected task's existing title and description are automatically loaded.
4. Modify the required fields.
5. Click **Update Task**.
6. The task list is updated immediately.

The application also supports updating only the title or only the description.

---

## 5. Deleting a Task

1. Click the **Delete** icon on any task.
2. The selected task is removed from the list.
3. The updated task list is automatically saved to `localStorage`.

---

## 6. Switching Theme

The application supports both:

* ☀️ Light Theme
* 🌙 Dark Theme

Click the theme toggle button in the header or on the Login/Signup pages.

The selected theme is saved in:

```text
localStorage → theme
```

Therefore, the selected theme remains available after refreshing the page.

---

## 7. Logout

Click the **Logout** button in the navigation bar.

The current user session is removed and the application redirects to the Login page.

---

# 💾 Data Storage

The application currently uses browser `localStorage` instead of a backend database.

The following data is stored locally:

| Key           | Purpose                              |
| ------------- | ------------------------------------ |
| `tasks`       | Stores the task list                 |
| `users`       | Stores registered users              |
| `currentUser` | Stores the currently logged-in user  |
| `theme`       | Stores the selected theme preference |

### Task Object

Each task follows a structure similar to:

```javascript
{
    sno: 1,
    title: "Complete Assignment",
    desc: "Finish the React project documentation"
}
```

---

# 🎨 Color Palette

| Color                     | Hex / Value               | Usage                            |
| ------------------------- | ------------------------- | -------------------------------- |
| Primary Accent            | `#6c5ce7`                 | Buttons, icons, highlights       |
| Primary Light             | `#a29bfe`                 | Headings and gradient text       |
| Primary Dark              | `#4a3cb5`                 | Button gradients                 |
| Secondary Accent          | `#ff6b6b`                 | Edit/delete actions and warnings |
| Dark Background           | `#0a0a0a`                 | Dark theme background            |
| Dark Secondary Background | `#1a1a2e`                 | Dark cards and surfaces          |
| Light Background          | `#f0f0f5`                 | Light theme background           |
| Primary Text              | `#e0e0e0`                 | Dark theme text                  |
| Secondary Text            | `#b2b2d0`                 | Dark theme descriptions          |
| Card Background           | `rgba(20, 20, 35, 0.8)`   | Dark cards and forms             |
| Border                    | `rgba(108, 92, 231, 0.2)` | Subtle borders                   |

---

# 💻 Component Documentation

## App Component

**File:** `App.jsx`

### Responsibilities

* Initializes the application
* Manages task state
* Handles task creation, editing, and deletion
* Saves tasks to `localStorage`
* Configures application routes
* Protects authenticated routes
* Provides the Material-UI theme
* Connects the custom theme context with the application

---

## Header Component

**File:** `Components/Header.jsx`

### Props

```text
head
```

Used to specify the application heading.

### Features

* Application title
* Home navigation
* About navigation
* Login navigation when logged out
* Logout functionality when logged in
* Light/dark theme toggle
* Material-UI AppBar and Toolbar

---

## Footer Component

**File:** `Components/Footer.jsx`

### Features

* Application footer
* Copyright information
* GitHub profile link
* Theme-aware styling

---

## AddTask Component

**File:** `Components/AddTask.jsx`

### Props

```text
add
```

### Features

* Task title input
* Task description input
* Form validation
* Error alert
* Add Task button
* Clears the form after successful submission

---

## EditTask Component

**File:** `Components/EditTask.jsx`

### Props

```text
edit
esno
etitle
edesc
```

### Features

* Loads the selected task's information
* Allows title modification
* Allows description modification
* Updates the selected task
* Validates that at least one field contains information

The component is displayed in place of the `AddTask` component while editing.

---

## TaskList Component

**File:** `Components/TaskList.jsx`

### Props

```text
tasks
delTask
edtTask
```

### Features

* Displays all tasks
* Handles empty task state
* Renders individual `TaskItem` components
* Provides edit and delete functionality

---

## TaskItem Component

**File:** `Components/TaskItem.jsx`

### Props

```text
task
delTask
edtTask
```

### Features

* Displays task title
* Displays task description
* Edit action
* Delete action
* Hover effects
* Responsive Material-UI layout

---

## About Component

**File:** `Components/About.jsx`

### Features

Displays information about the application and highlights its main features:

* Add Tasks
* Edit Tasks
* Delete Tasks
* Persistent Storage

---

## Login Component

**File:** `Components/Login.jsx`

### Features

* Username input
* Email input
* Login validation
* Checks registered users from `localStorage`
* Creates a `currentUser` session
* Redirects to `/tasks`
* Link to Signup page
* Theme toggle

---

## Signup Component

**File:** `Components/Signup.jsx`

### Features

* Username registration
* Email registration
* Duplicate user validation
* Stores new users in `localStorage`
* Success/error alerts
* Redirects to Login page
* Theme toggle

---

## ThemeContext Component

**File:** `Components/ThemeContext.jsx`

### Features

* Centralized theme management
* Light theme
* Dark theme
* Theme toggle functionality
* Saves theme preference in `localStorage`
* Provides theme information through React Context
* Uses Material-UI `createTheme`

The application uses:

```javascript
useTheme()
```

to access:

```javascript
isDark
toggleTheme
theme
```

---

# ⚙️ Application Architecture

The main application follows this structure:

```text
App
│
└── CustomThemeProvider
    │
    └── AppContent
        │
        ├── Material-UI ThemeProvider
        │   └── CssBaseline
        │
        └── BrowserRouter
            │
            └── Routes
                │
                ├── /login
                │   └── Login
                │
                ├── /signup
                │   └── Signup
                │
                └── Protected Routes
                    │
                    ├── Header
                    │
                    ├── /tasks
                    │   ├── AddTask
                    │   │   OR
                    │   ├── EditTask
                    │   │
                    │   └── TaskList
                    │       └── TaskItem
                    │
                    ├── /about
                    │   └── About
                    │
                    └── Footer
```

---

# 🔧 Configuration

## Changing the Application Name

The application heading can be changed through the `Header` component:

```jsx
<Header head="Task Management Application" />
```

---

## Modifying the Theme

The application's themes are defined in:

```text
Components/ThemeContext.jsx
```

The primary color can be modified using:

```javascript
primary: {
    main: '#6c5ce7',
}
```

The light and dark themes can be customized independently.

---

## Styling Customization

Most component-specific styling uses Material-UI's `sx` prop.

For example:

```jsx
<Paper
    sx={{
        p: 4,
        mb: 4,
        borderRadius: 3,
    }}
>
```

Global styles and animations are defined in:

```text
App.css
```

---

# 📱 Responsive Design

The application uses Material-UI's responsive layout system and flexible containers.

The interface is designed to work across:

| Device     | Status      |
| ---------- | ----------- |
| 💻 Desktop | ✅ Supported |
| 💻 Laptop  | ✅ Supported |
| 📱 Tablet  | ✅ Supported |
| 📱 Mobile  | ✅ Supported |

---

# 🐛 Common Issues & Solutions

## Issue: Login does not work

Make sure the user has created an account through the **Signup** page first.

The login system checks:

```text
localStorage → users
```

The username and email must match an existing registered user.

---

## Issue: Tasks are not being saved

The application uses browser `localStorage`.

Make sure:

* Browser storage is enabled
* The browser is not blocking local storage
* You are not clearing site data after closing the browser

---

## Issue: User is redirected to Login

The task pages are protected.

If:

```text
localStorage → currentUser
```

does not exist, the application redirects the user to:

```text
/login
```

Log in again to access the task management pages.

---

## Issue: Material-UI styles are not applying

Install the required Material-UI packages:

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

Also make sure React Router DOM is installed:

```bash
npm install react-router-dom
```

---

## Issue: Application does not start

Try reinstalling the dependencies:

```bash
rm -rf node_modules
npm install
```

On Windows, you can manually delete the `node_modules` folder and then run:

```bash
npm install
```

After installation, run the appropriate development command from `package.json`, such as:

```bash
npm run dev
```

---

# 🎨 Material-UI Icons Reference

| Component    | Icons Used                                                 | Purpose                           |
| ------------ | ---------------------------------------------------------- | --------------------------------- |
| **AddTask**  | `Add`                                                      | Add Task heading icon             |
| **EditTask** | `Edit`                                                     | Edit Task heading icon            |
| **TaskList** | `ListAlt`, `CheckCircle`                                   | Task list heading and empty state |
| **TaskItem** | `Edit`, `Delete`                                           | Edit and delete actions           |
| **Header**   | `Home`, `Info`, `Login`, `Logout`, `DarkMode`, `LightMode` | Navigation and theme controls     |
| **About**    | `AddBox`, `Edit`, `Delete`, `CloudUpload`                  | Feature cards                     |
| **Login**    | `Login`, `Person`, `Email`, `DarkMode`, `LightMode`        | Login form and theme control      |
| **Signup**   | `Person`, `Email`, `DarkMode`, `LightMode`                 | Signup form and theme control     |

---

# 🔒 Limitations

This project is currently designed as a frontend-based task management application.

### Current limitations

* Authentication is handled using `localStorage`
* There is no backend server
* There is no database
* Password-based authentication is not implemented
* User data is stored locally in the browser
* Tasks are stored locally rather than being synchronized with a server
* Clearing browser storage removes locally stored application data
* Authentication should not be considered production-grade security

These limitations make the project suitable for **learning, demonstrations, academic projects, and frontend development practice**.

---

# 🤝 Contributing

Contributions are welcome!

### Steps

1. **Fork the repository**
2. **Create a new branch**

```bash
git checkout -b feature/improvement
```

3. **Make your changes**
4. **Test your changes**
5. **Commit your changes**

```bash
git commit -m "Add some improvement"
```

6. **Push the branch**

```bash
git push origin feature/improvement
```

7. **Open a Pull Request**

### Contribution Guidelines

* Follow the existing code style
* Write meaningful commit messages
* Test changes before submitting
* Keep components organized
* Update documentation when functionality changes

---

# 📄 License

This project is licensed under the **MIT License**.

```text
MIT License

Copyright (c) 2026 Falak Patel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,

OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

# 👏 Acknowledgments

* **Material-UI** - For the component library and design system
* **React Router** - For client-side routing
* **Emotion** - For CSS-in-JS styling
* **React Community** - For the React ecosystem and resources

---

# 📞 Contact

**Falak Patel**

* 📧 Email: [falakpatel213@gmail.com](mailto:falakpatel213@gmail.com)
* 🐙 GitHub: [FalakPatel213](https://github.com/FalakPatel213)
* 🔗 LinkedIn: [Falak Patel](https://www.linkedin.com/in/falakpatel213)

---

# 🌟 Show Your Support

If you found this project helpful, please consider:

* ⭐ Starring the repository
* 🐛 Reporting issues
* 💡 Suggesting new features
* 🤝 Contributing to the project

---

<div align="center">

**2026 © [FalakPatel213](https://github.com/FalakPatel213)**

[⬆ Back to Top](#-task-management-application)

</div>
