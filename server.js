var express = require('express');
var app = express(); 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", (req, res) => {
  console.log(req.headers);
  let ipaddress = req.headers['x-forwarded-for'];
  let lang = req.headers['accept-language'];
  let software = req.headers['user-agent'];
  
  res.json({"ipaddress" : ipaddress, "language" : lang, "software" : software});
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
