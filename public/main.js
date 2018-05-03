let socket = io();
//connect
socket.on("connect", function() {
  console.log("connect");

  /*send to server side:
   { to: "bara@gmail.com",text: "hii"}*/

  socket.emit("createEmail", {
    to: "bara@gmail.com",
    text: "hii"
  });
});

// socket.emit("createMessage", {
//   message: "x",
//   from: "jsx@gmail.com"
// });

socket.on("newMessage", function(params) {
  console.log("newMeesage", params);
});

// On disconnect
socket.on("disconnect", function() {
  console.log("disconnect");
});

// get data from server
socket.on("newEmail", function(x) {
  console.log("newEmail", x);
});

function sendToServer () {
  const sender = document.getElementById("sender").value;
  const message = document.getElementById("message").value;
  const receiver = document.getElementById("receiver").value;

  socket.emit(receiver, {
    sender: sender,
    message: message,
    receiver: receiver
  });
};


var nameTshanel='';
socket.on(nameTshanel, function(params) {
  console.log("newMeesage", params);
});

function makeMeSender() {
  nameTshanel= document.getElementById("sender").value;
  console.log(nameTshanel);
  
}