// app.js

// 1. Load the Express module
const express = require('express');

// 2. Create an Express app
const app = express();

// 3. Use dynamic port for deployment platforms like Render
const PORT = process.env.PORT || 3000;

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

// 9. 404 route (optional but good for polish)
app.use((req, res) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found'
  });
});

// 10. Start the serve
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
