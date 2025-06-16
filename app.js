

// app.js

// 1. Load the Express module
const express = require('express');

// 2. Create an Express app
const app = express();

// 3. Define the port number
const PORT = 3000;

// 4. Set EJS as the templating/view engine
app.set('view engine', 'ejs');

// 5. Serve static files (like CSS) from the "public" folder
app.use(express.static('public'));

// 6. Home route ("/") - renders index.ejs
app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Home Page',
    name: 'Nantha',
    hobbies: ['Dancing', 'Coding', 'Traveling', 'Cooking', 'Healing'] // dynamic data
  });
});

// 7. About route ("/about") - renders about.ejs
app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About Me',
    profession: 'Full Stack Developer & Transcendence Coach'
  });
});

// 8. Contact route ("/contact") - renders contact.ejs
app.get('/contact', (req, res) => {
  res.render('contact', {
    pageTitle: 'Contact Me',
    email: 'nantha@asknantha.com',
    phone: '+65 9060 3693'
  });
});

// 9. Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
