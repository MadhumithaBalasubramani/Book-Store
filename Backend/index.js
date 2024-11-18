// main server file (e.g., index.js or app.js)

const express = require('express');
const routes = require('../Server/Routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors())
const PORT=7700;
const mongoDBURL="mongodb+srv://madhumitha:Madhu@madhu.psyhljz.mongodb.net/Doctor-Appointment"
app.use(express.json());
app.use("/books",routes);
app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('Book Store');
});

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
