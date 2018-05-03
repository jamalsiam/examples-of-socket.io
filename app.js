const path = require("path");
const express = require("express");
const app = express();
const http = require("http");
const publicPath = path.join(__dirname, "./public");
const socketIO = require("socket.io");

let sarver = http.createServer(app);
let io = socketIO(sarver);

let arr=['jamal','ahmed','baraa'];

// connection
io.on("connection", socket => {
  console.log("connection");




  socket.on('sendMsg',(data)=>{
    io.broadcast.emit(data.receiver,data);
  })









  //send to client side 'newEmail', {name:'jamal', age: 32}
  /////socket.emit("newEmail", { name: "jamal", age: 32 });

  // get data from client
  socket.on("createEmail", data => {
    console.log("listner createEmail", data);
  });

  socket.on("createMessage", (data) => {
      console.log(data);
      socket.broadcast.emit('newMessage', {
        from:'server',
        message:'text xxxxx'
    });
      
  });


  socket.on("disconnect", () => {
    console.log("disconnect");
  });
});

app.use(express.static(publicPath));
sarver.listen(3000, () => {
  console.log("server listen in post: 3000");
});




/*
socket.emit('listner',{}) // to send response form me 
socket.broadcast.emit('listner',{}) //to send response form all user except me
io.emit('listner',{}) // to send response form all user and me


*/