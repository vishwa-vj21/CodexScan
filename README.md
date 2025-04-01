# AI Code Generator

## Overview
The **AI Code Generator** is a web application that allows users to input code snippets and receive AI-powered reviews and suggestions. It provides a real-time, interactive editor with syntax highlighting and a markdown-rendered review panel.

## Features
- **Code Editor:** A professional code input area with syntax highlighting.
- **AI-Powered Review:** Sends the code to an AI backend for analysis and displays feedback.
- **Loading Animation:** Displays an animated loading screen while waiting for the AI response.
- **Responsive UI:** A clean and modern interface with dark mode support.

## Technologies Used
- **Frontend:** React, React Simple Code Editor, Prism.js, Markdown rendering (React Markdown, Rehype Highlight)
- **Backend:** Node.js, Express, OpenAI API (or any AI-based review system)
- **Styling:** CSS, GitHub Dark theme for syntax highlighting
- **HTTP Requests:** Axios

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-code-generator.git
   cd ai-code-generator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Ensure the backend is running at `http://localhost:3000` or update the API endpoint accordingly.

## Usage
1. Open the web app in your browser.
2. Paste your code into the editor.
3. Click the **Review** button.
4. Wait for the AI response while the loading animation plays.
5. View the feedback on the right panel.

## API Endpoint
- **POST /ai/get-review**
  - **Request Body:** `{ code: "your_code_here" }`
  - **Response:** `{ review: "AI-generated review message" }`

## Future Improvements
- Support for multiple programming languages.
- Enhanced AI feedback with inline suggestions.
- Save and export reviewed code snippets.
- User authentication and history tracking.

## Contributing
Feel free to fork this repository and submit pull requests with improvements!

## License
This project is licensed under the MIT License.

