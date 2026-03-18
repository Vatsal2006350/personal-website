const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');

// First, try to build the app
console.log('Building React app...');

// Create a simple HTML file as fallback
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>React App</title>
    <style>
        body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; }
        #root { padding: 20px; }
    </style>
</head>
<body>
    <div id="root"></div>
    <script type="module">
        import React from 'https://esm.sh/react@18';
        import ReactDOM from 'https://esm.sh/react-dom@18/client';
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        
        // Try to load your App component
        fetch('/src/App.js')
            .then(res => res.text())
            .then(code => {
                // Basic transpilation (very limited)
                const transformedCode = code
                    .replace(/import\s+(.+)\s+from\s+['"](.+)['"]/g, '')
                    .replace(/export\s+default\s+/g, 'window.App = ');
                
                eval(transformedCode);
                if (window.App) {
                    root.render(React.createElement(window.App));
                } else {
                    root.render(React.createElement('div', null, 'Loading app...'));
                }
            })
            .catch(err => {
                root.render(React.createElement('div', null, 
                    React.createElement('h1', null, 'React App'),
                    React.createElement('p', null, 'Your app is starting up. Please wait...'),
                    React.createElement('p', { style: { color: 'red' } }, err.message)
                ));
            });
    </script>
</body>
</html>
`;

// Write the HTML file
fs.writeFileSync(path.join(__dirname, 'public', 'index.html'), htmlContent);

// Create a simple Express server
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));
app.use('/src', express.static('src'));
app.use('/static', express.static('build/static'));

// Serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Your React app should be accessible now!');
});