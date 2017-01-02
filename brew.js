const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var RecipieJson = require("./RecipieJson")


   app.listen(process.env.PORT || 3001,function(){
    console.log('listening on 3000')
  })

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true)
  next();
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/brew', function(req, res){

	console.log("req.body.token_id",req.body.token_id)
    if(req.body.token_id){
        res.json(RecipieJson.CookieUser)
    }
    else{
      res.json(RecipieJson.visitor)
    }  
})

app.get('/setcookie', function(req, res){  
      var user_id =  req.query;
      res.cookie('token_id', user_id, {maxAge: 86400000, httpOnly: true});
      res.json({success : true})
});


app.get('/checkcookie', function(req, res){  
      var cookie =  req.cookies;
      console.log(cookie)
      res.json({success : true})
});



