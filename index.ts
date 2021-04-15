import * as express from 'express';
const socket = require('socket.io');

const app = express();

app.use(express.static('./public'));

const server = app.listen(4000, () => console.log('server started on port'));

const io = socket(server);

io.on('connection', socket => {
    socket.on('chat', data => {
        io.sockets.emit('chat', data);
    })

    socket.on('typing', data => {
        socket.broadcast.emit('typing', data);
    });

});