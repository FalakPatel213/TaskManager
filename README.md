# 📝 Todo List Application

A modern, feature-rich Todo List application built with React.js. This application provides a seamless task management experience with a sleek dark theme design and persistent storage.


## ✨ Features

- ✅ **Add Todos** - Create new tasks with title and description
- ✏️ **Edit Todos** - Modify existing tasks easily
- 🗑️ **Delete Todos** - Remove tasks you no longer need
- 💾 **Persistent Storage** - All todos are saved in localStorage
- 🌙 **Dark Theme** - Modern dark UI with gradient accents
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Glassmorphism effects and smooth animations
- 🔍 **About Page** - Learn more about the application
- ⚡ **Fast Performance** - Optimized React components
- 🎯 **User-Friendly** - Intuitive interface for all users

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend library for building UI |
| **React Router DOM** | Navigation and routing |
| **Bootstrap** | Responsive layout and styling |
| **Bootstrap Icons** | Beautiful icon library |
| **CSS3** | Custom styling with animations |
| **LocalStorage** | Data persistence |

## 📦 Installation

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Step-by-Step Setup

1. **Clone the repository**

`bash
git clone https://github.com/yourusername/todo-list-app.git
cd todo-list-app
`

2. **Install dependencies**

`bash
npm install
`

3. **Add Bootstrap Icons** (in `public/index.html`)

`html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
`

4. **Start the development server**

`bash
npm start
`

5. **Open your browser**

`
http://localhost:3000
`

## 🚀 Build for Production

`bash
npm run build
`

The build folder is ready to be deployed.

## 📁 Project Structure

`
todo-list-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── Components/
│   │   ├── Header.js         # Navigation bar
│   │   ├── Footer.js         # Footer section
│   │   ├── TodoList.js       # List of todos
│   │   ├── TodoItem.js       # Individual todo item
│   │   ├── AddTodo.js        # Add todo form
│   │   ├── EditTodo.js       # Edit todo form
│   │   └── About.js          # About page
│   ├── App.js                # Main application
│   ├── App.css               # Global styles
│   └── index.js              # Entry point
├── package.json
├── README.md
└── .gitignore
`

## 🎯 Usage Guide

### 1. Adding a Todo

`
1. Enter a title in the "Title" field
2. Enter a description in the "Description" field  
3. Click the "Add Todo" button
4. Your new todo will appear in the list
`

### 2. Editing a Todo

`
1. Click the "Edit" button on any todo
2. Modify the title and/or description
3. Click the "Update Todo" button
4. The todo will be updated instantly
`

### 3. Deleting a Todo

`
1. Click the "Delete" button on any todo
2. The todo will be removed immediately
`

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Background | `#0a0a0a` → `#16213e` | Main background gradient |
| Primary Accent | `#6c5ce7` | Buttons, icons, highlights |
| Secondary Accent | `#a29bfe` | Headers, special text |
| Danger Accent | `#ff6b6b` | Delete buttons, warnings |
| Text Primary | `#e0e0e0` | Main text content |
| Text Secondary | `#b2b2d0` | Subtext, descriptions |
| Card Background | `rgba(20, 20, 35, 0.95)` | Todo cards and forms |
| Border | `rgba(108, 92, 231, 0.2)` | Subtle borders |

## 💻 Component Documentation

### Header Component
- **Props**: `head` - Title of the app
- **Features**: Navigation links, responsive design

### AddTodo Component  
- **Props**: `add` - Function to add new todo
- **Features**: Form validation, input fields

### EditTodo Component
- **Props**: `edit`, `esno`, `etitle`, `edesc` - Edit function and todo data
- **Features**: Pre-filled form, update functionality

### TodoList Component
- **Props**: `todos`, `delTodo`, `edtTodo` - Todo array and handlers
- **Features**: Empty state, todo rendering

### TodoItem Component
- **Props**: `todo`, `delTodo`, `edtTodo` - Todo item and handlers
- **Features**: Hover effects, action buttons

### About Component
- **Features**: Information about the app, feature highlights

## 🔧 Configuration

### Changing the App Name
In `App.js`:

`jsx
<Header head="My Todo List" />  // Change this text
`

### Modifying Storage Method
The app currently uses localStorage. To change to a different storage method, modify the `useEffect` hook in `App.js`:

`jsx
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])
`

### Styling Customization
All styling is done inline with CSS-in-JS. You can modify the style objects in each component:

`jsx
const styleAddTodo = {
  background: 'rgba(20, 20, 35, 0.95)',
  borderRadius: '15px',
  // ... modify these values
}
`

## 📱 Responsive Design

The app is fully responsive and works on:

| Device | Resolution | Status |
|--------|------------|--------|
| 💻 Desktop | 1920x1080+ | ✅ Fully Supported |
| 💻 Laptop | 1366x768 | ✅ Fully Supported |
| 📱 Tablet | 768x1024 | ✅ Fully Supported |
| 📱 Mobile | 320x480 | ✅ Fully Supported |

## 🐛 Common Issues & Solutions

### Issue: "Cannot set properties of undefined"
**Solution**: This occurs when trying to edit a todo that doesn't exist. The latest update includes proper error handling with validation.

### Issue: Todos not saving
**Solution**: Ensure localStorage is enabled in your browser. If using incognito mode, todos won't persist.

### Issue: Icons not showing
**Solution**: Make sure Bootstrap Icons CDN is properly included in your `index.html`.

### Issue: App not starting
**Solution**: 
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a new branch (`git checkout -b feature/improvement`)
3. **Make** your changes
4. **Commit** your changes (`git commit -m 'Add some improvement'`)
5. **Push** to the branch (`git push origin feature/improvement`)
6. **Open** a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

`
MIT License

Copyright (c) 2024 Falak Patel

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
`

## 👏 Acknowledgments

- **Bootstrap** - For the responsive grid system
- **React Router** - For seamless navigation
- **Bootstrap Icons** - For the beautiful icon set
- **React Community** - For the amazing ecosystem

## 📞 Contact

**Falak Patel**
- 📧 Email: falakpatel213@gmail.com
- 🐙 GitHub: [@falakpatel](https://github.com/FalakPatel213)
- 🔗 LinkedIn: [Falak Patel](https://www.linkedin.com/in/falakpatel213)

## 🌟 Show Your Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting issues
- 💡 Suggesting features
- 🤝 Contributing to the project

---

<div align="center">

**Made with ❤️ by Falak Patel**

[⬆ Back to Top](#-todo-list-application)

</div>