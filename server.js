const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
const PORT = process.env.PORT || 3002;
const routes = require('./routes/api');



app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(routes);

// mongoose.connect('mongodb://localhost:27017/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// });
const db = require("./config/connection");
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  
  
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
    });
  });