let socket = io();
let nameTchannel='';
//connect
socket.on("connect", function() {console.log("connect")});

function makeMeSender() {
  socket.on(document.getElementById("sender").value,function(data){
    console.log(data);

    document.getElementById("msgSender").innerHTML = `New Message From , ${data.sender}:-`;
    document.getElementById("msgText").innerHTML = data.message;

    });
}

function sendToServer () {
  const sender = document.getElementById("sender").value;
  const message = document.getElementById("message").value;
  const receiver = document.getElementById("receiver").value;
  socket.emit('newMsg',{sender,message,receiver})
}
