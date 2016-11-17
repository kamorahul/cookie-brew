const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var RecipieJson = require("./RecipieJson")


  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/brew', (req, res) => {
    var cookie =  req.cookies;
    if(cookie.token_id){
        res.json(RecipieJson.visitor)
    }
    else{
      res.json(RecipieJson.cookieUser)
    }  
})

app.post('/setcookie', (req, res) => {
  var user_id =  req.query;
      res.cookie('token_id', user_id, {maxAge: 86400000, httpOnly: true});
      res.json({success : true})
})

