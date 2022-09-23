// depenencies
const express = require('express');
const app = express();

// creates port
const PORT = process.env.PORT || 3001;

// creates route for files in public folder
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// starts server
app.listen(PORT, () => {
  console.log(`server live at localhost:${PORT}`)
})