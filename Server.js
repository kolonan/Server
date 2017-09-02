var express = require("express");
var app = express();
var fcmSend=require('./src/fcmSend');
var fcmConfig=require('./src/fcmConfig');



app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views","./views");

var server = require("http").createServer(app);
var io = require("socket.io")(server);
server.listen(process.env.PORT||3000);


//config message của fcmsend
var message = {
    to:fcmConfig('address')['to'],
    collapse_key:fcmConfig('address')['collapse_key'],
    notification:fcmConfig('notification'),
    data:fcmConfig('data')
   };

console.log(message.to);
io.on("connection",function(socket){
  console.log("day la id"+socket.id)

  socket.on('SOS',function(data){
    console.log(data);
    fcmSend(message);
  });
});




app.get("/",function(req,res){
  res.render('mainpage.ejs')
});
