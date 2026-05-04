const express = require('express');
const app = express();             
const port = 3000;                 

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Vikas App</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(to right, #667eea, #764ba2);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .card {
          background: rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        h1 {
          margin-bottom: 10px;
        }
        p {
          opacity: 0.9;
        }
        button {
          margin-top: 20px;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          background: #ff7eb3;
          color: white;
          cursor: pointer;
          font-size: 16px;
        }
        button:hover {
          background: #ff4f91;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Hello Vikas 👋</h1>
        <p>Welcome to your beautiful Node.js app 🚀</p>
        <p>Now your UI looks modern and clean!</p>
        <button onclick="alert('You clicked the button!')">Click Me</button>
      </div>
    </body>
    </html>
  `);     
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:\${port}`);
});