# 📝 Task Manager Application

A modern, feature-rich Task List application built with React.js and Material-UI. This application provides a seamless task management experience with a sleek dark theme design and persistent storage.


## ✨ Features

- ✅ **Add Tasks** - Create new tasks with title and description
- ✏️ **Edit Tasks** - Modify existing tasks easily
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- 💾 **Persistent Storage** - All tasks are saved in localStorage
- 🌙 **Dark Theme** - Modern dark UI with gradient accents
- 🎨 **Material-UI Design** - Clean, minimal, and professional interface
- 📱 **Responsive Design** - Works perfectly on all devices
- 🔍 **About Page** - Learn more about the application
- ⚡ **Fast Performance** - Optimized React components
- 🎯 **User-Friendly** - Intuitive interface for all users

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend library for building UI |
| **React Router DOM** | Navigation and routing |
| **Material-UI (MUI)** | Component library and styling |
| **MUI Icons** | Beautiful icon library |
| **Emotion** | CSS-in-JS styling |
| **LocalStorage** | Data persistence |

## 📦 Installation

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Step-by-Step Setup

1. **Clone the repository**

```bash
git clone https://github.com/FalakPatel213/TaskManager
cd TaskManager
```

2. **Install dependencies**

```bash
npm install
```

3. **Install Material-UI dependencies**

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

4. **Start the development server**

```bash
npm start
```

5. **Open your browser**

```
http://localhost:3000
```

## 🚀 Build for Production

```bash
npm run build
```

The build folder is ready to be deployed.

## 📁 Project Structure

```
TaskManager/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── Components/
│   │   ├── Header.js         # Navigation bar with Material-UI
│   │   ├── Footer.js         # Footer section with Material-UI
│   │   ├── TaskList.js       # List of tasks with Material-UI
│   │   ├── TaskItem.js       # Individual task item with Material-UI
│   │   ├── AddTask.js        # Add task form with Material-UI
│   │   ├── EditTask.js       # Edit task form with Material-UI
│   │   └── About.js          # About page with Material-UI
│   ├── App.js                # Main application with ThemeProvider
│   ├── App.css               # Global styles
│   └── index.js              # Entry point
├── package.json
├── README.md
└── .gitignore
```

## 🎯 Usage Guide

### 1. Adding a Task

```
1. Enter a title in the "Title" field
2. Enter a description in the "Description" field  
3. Click the "Add Task" button
4. Your new task will appear in the list
```

### 2. Editing a Task

```
1. Click the "Edit" button on any task
2. Modify the title and/or description
3. Click the "Update Task" button
4. The task will be updated instantly
```

### 3. Deleting a Task

```
1. Click the "Delete" button on any task
2. The task will be removed immediately
```

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Background | `#0a0a0a` → `#16213e` | Main background gradient |
| Primary Accent | `#6c5ce7` | Buttons, icons, highlights |
| Secondary Accent | `#a29bfe` | Headers, special text |
| Danger Accent | `#ff6b6b` | Delete buttons, warnings |
| Text Primary | `#e0e0e0` | Main text content |
| Text Secondary | `#b2b2d0` | Subtext, descriptions |
| Card Background | `rgba(20, 20, 35, 0.8)` | Task cards and forms |
| Border | `rgba(108, 92, 231, 0.2)` | Subtle borders |

## 💻 Component Documentation

### App Component
- **Features**: ThemeProvider setup, routing, state management
- **Theme**: Custom Material-UI dark theme with gradient accents

### Header Component (Material-UI)
- **Props**: `head` - Title of the app
- **Features**: AppBar with navigation links, responsive design, gradient logo

### AddTask Component (Material-UI)
- **Props**: `add` - Function to add new task
- **Features**: Form validation, TextField components, animated button

### EditTask Component (Material-UI)
- **Props**: `edit`, `esno`, `etitle`, `edesc` - Edit function and task data
- **Features**: Pre-filled form, update functionality, Material-UI components

### TaskList Component (Material-UI)
- **Props**: `tasks`, `delTask`, `edtTask` - Task array and handlers
- **Features**: Empty state with icon, task rendering with animations

### TaskItem Component (Material-UI)
- **Props**: `task`, `delTask`, `edtTask` - Task item and handlers
- **Features**: Hover effects, IconButton actions, glassmorphism design

### About Component (Material-UI)
- **Features**: Information about the app, feature cards with icons

### Footer Component (Material-UI)
- **Features**: Sticky footer with heart icon and copyright

## 🔧 Configuration

### Changing the App Name
In `App.js`:

```jsx
<Header head="Task Manager" />  // Change this text
```

### Modifying the Theme
In `App.js`, update the theme object:

```jsx
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6c5ce7',  // Change primary color
    },
    // ... other theme options
  },
});
```

### Styling Customization
Components use Material-UI's `sx` prop for styling. You can modify any component's styles:

```jsx
<Paper
  sx={{
    p: 4,           // Padding
    mb: 4,          // Margin bottom
    background: 'rgba(20, 20, 35, 0.8)',
    borderRadius: 3, // Rounded corners
  }}
>
```

## 📱 Responsive Design

The app is fully responsive and works on:

| Device | Resolution | Status |
|--------|------------|--------|
| 💻 Desktop | 1920x1080+ | ✅ Fully Supported |
| 💻 Laptop | 1366x768 | ✅ Fully Supported |
| 📱 Tablet | 768x1024 | ✅ Fully Supported |
| 📱 Mobile | 320x480 | ✅ Fully Supported |

## 🐛 Common Issues & Solutions

### Issue: "CheckCircleOutline not found"
**Solution**: Use `CheckCircle` instead of `CheckCircleOutline`. Update the import in TaskList.jsx:

```jsx
import { CheckCircle } from '@mui/icons-material';  // Correct
// NOT: import { CheckCircleOutline } from '@mui/icons-material';
```

### Issue: "Cannot set properties of undefined"
**Solution**: This occurs when trying to edit a task that doesn't exist. The latest update includes proper error handling with validation.

### Issue: Tasks not saving
**Solution**: Ensure localStorage is enabled in your browser. If using incognito mode, tasks won't persist.

### Issue: Material-UI styles not applying
**Solution**: Make sure all dependencies are installed:

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### Issue: App not starting
**Solution**: 
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

## 🎨 Material-UI Icons Reference

| Component | Icon Import | Usage |
|-----------|-------------|-------|
| AddTask | `Add, Send` | Add button and submit |
| EditTask | `Edit, Update` | Edit button and update |
| TaskList | `ListAlt, CheckCircle` | Header and empty state |
| TaskItem | `Delete, Edit, CheckCircle` | Action buttons |
| Header | `CheckBox, Home, Info` | Logo and navigation |
| Footer | `Favorite` | Heart icon |
| About | `AddBox, Edit, Delete, CloudUpload` | Feature cards |

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

```
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
```

## 👏 Acknowledgments

- **Material-UI** - For the amazing component library
- **React Router** - For seamless navigation
- **Emotion** - For CSS-in-JS styling
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

**2026&copy; [FalakPatel213](https://github.com/FalakPatel213)**

[⬆ Back to Top](#-task-manager-application)

</div>