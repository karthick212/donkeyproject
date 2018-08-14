const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express(),
config = require('./config/DB'),
itemRoutes = require('./expressRoutes/itemRoutes');
commonRoutes = require('./expressRoutes/commonRoutes');

config.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})
      //app.use(express.bodyParser());
      app.use(express.static('public'));
      app.use(body_parser.json());
      app.use(body_parser.urlencoded({ extended: true }));
      app.use(cors());
      app.use('/courier', itemRoutes);
      app.use('/common', commonRoutes);

      const port = process.env.PORT || 4000;

      const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
      });

//const api_admin = require("./server/routes/admin");
// const api_driver = require("./routes/driver");


// app.use(morgan("combine"));

//app.use(express.static((__dirname, './dist/')));

// app.use(bodyParser.urlencoded({ extended: true }));
//app.use(body_parser.json());
//app.use(cors());

//app.use('/api/admin/', api_admin);

/*app.get('*',(req,res) => {
    res.sendfile(__dirname + "/dist/index.html")

});*/


// app.use('/api/diver',api_driver);

//app.listen(process.env.PORT || 8080);
