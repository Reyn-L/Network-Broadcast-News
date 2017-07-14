/*jshint esversion :6*/
const net = require('net');
var clients = [];
var username = [];
const server = net.createServer((socket) => {
  process.stdout.write('\n' +'connected');
  clients.push(socket);
  socket.on('data', (data) => {
    if(socket.hasOwnProperty('name')){
     clients.forEach((user) => {
      user.write(socket.name + data.toString());
    });
     return;
   }
   let avaliable = clients.every((user) => {
    return data.toString() !== user.name;
  });
   if(avaliable) {
    socket.name = data.toString();
  } else {
    socket.write("Username is already taken. Please choose a new one." + '\n');
  }
});
  socket.on('close', (client) => {
    process.stdout.write('\n' + socket.name + ' disconnected');
    // client.write('\n' + socket.username + " has disconnected");
  });
  // socket.on('data', (data) => {
  //   clients.forEach((client) => {
  //     if(client !== socket){
  //       client.write("\n" + data);
  //     } else if(data === socket.name) {
  //       client.write('hi');
  //     }
  //   });
  // });
});
server.listen(6969, "0.0.0.0", () => {
  process.stdout.write('listening for port 6969');
});
