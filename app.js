const path = require("path");
const express = require("express");
const app = express();
const http = require("http");
const publicPath = path.join(__dirname, "./public");
const socketIO = require("socket.io");

let sarver = http.createServer(app);
let io = socketIO(sarver);

let arr = ["jamal", "ahmed", "baraa"];

// connection
io.on("connection", socket => {
  console.log("connection");

  socket.on("newMsg", data => {
    console.log(data);
    
    socket.broadcast.emit(data.receiver, data);
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