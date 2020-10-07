const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//  return res.send();
// });
// app.get('/api', function (req, res) {
//     res.send("api")
//   });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8000)

// const express = require('express');
// const bodyParser = require('body-parser')
// const path = require('path');
// const express = require('express')
// const app = express()

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/',  (req, res)=> {
//     sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(process.env.PORT || 8000);


