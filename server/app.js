const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./src/config/db');
const businessRoutes = require('./src/routes/businessRoutes');
const creatorRoutes = require('./src/routes/creatorRoutes');
const authRoutes = require('./src/routes/authRoutes');
const protectedRoutes = require('./src/routes/protectedRoutes');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

//test
app.use(cors({
  origin: ['https://creator-equity-dl8z-git-master-ruthvik-s-projects.vercel.app', 'https://creator-equity-dl8z-ruthvik-s-projects.vercel.app/', 'https://creator-equity-dl8z.vercel.app'],
  methods: ["post", "get"],
  credentials: true
}));

app.use(express.json());

connectDB();

app.use('/api/businesses', businessRoutes);
app.use('/api/creators', creatorRoutes);
app.use('/auth', authRoutes);
app.use('/api', protectedRoutes);

// app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

// app.use(express.static(path.join(__dirname, 'dist', 'index.html')));


// app.use(express.static(__dirname, 'dist', 'index.html'));

// Define default routes here
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

// app.get('*', (req, res) => {
//   res.status(404).send('Page Not Found');
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
// });




// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


