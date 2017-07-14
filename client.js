/*jshint esversion: 6*/
const net = require('net');
const client = net.createConnection({port:6969}, () => {
  process.stdout.write('Please enter your username' + '\n');
});
process.stdin.on('data', (data) => {
  client.write(data);

});

client.on('data', (data) => {
  process.stdout.write(data);
});