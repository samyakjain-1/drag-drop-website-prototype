Drag-and-Drop Website Builder Prototype

📌 Project Overview

This project is a prototype of a drag-and-drop website builder built using React, transforming the traditional form-based interface into a more flexible, visual, and intuitive web design tool.

It is designed as part of the Websites.co.in platform modernization effort to allow users more control over their website design without needing to write code.

🚀 Key Features

Drag-and-drop elements: Add Text, Image, and Button components onto the canvas.

Element property editing: Modify content or URLs through form-based side panel editing.

Canvas reordering: Reposition elements via drag-and-drop using react-beautiful-dnd.

Responsive layout: Works on both desktop and mobile devices.

HTML export: Download the built website layout as a standalone .html file.

🧱 Architecture

The application is structured with reusable and modular components:

Sidebar.js - Provides draggable elements.

Canvas.js - Renders the main builder area and supports drag-drop, editing, and export.

Builder.js - Layout wrapper that combines Sidebar and Canvas.

State management is handled using useState hooks in React for simplicity.

🛠 Tools & Libraries Used

React (v19) – Frontend framework

react-beautiful-dnd – For drag-and-drop support within canvas

HTML5 Drag-and-Drop API – For dragging from sidebar to canvas

CSS Flexbox & Media Queries – For responsive layout

📂 Project Structure

📤 Export Feature (HTML Generation)

A button in the canvas area lets the user export their layout.

It generates a clean HTML file using the element structure (text, images, buttons).

HTML is saved using Blob and URL.createObjectURL.

📱 Responsiveness

Flex layout adapts to screen size.

On small screens, sidebar and canvas stack vertically.

📈 Scalability Considerations

Easy to add more element types (e.g., videos, sections, cards).

Templates and themes can be added in future iterations.

Can integrate a backend for saving/loading layouts or publishing.

📝 Conclusion

This project demonstrates a flexible and scalable UI prototype that bridges traditional form-based content editing with modern visual web design principles, paving the way for enhanced user experience on the Websites.co.in platform.


