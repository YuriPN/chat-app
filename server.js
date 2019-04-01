const app = require('express')();
const http = require('http').createServer(app);

const io = require('socket.io')(http);

io.on('connection', (socket) =>{    
    socket.on('enter room', function(id){
        console.log('user connected')
        socket.join(id);
    })
    socket.on('disconnect', function(){
        console.log('user disconnected')
    })
    socket.on('msg', function(msg, id){
        socket.to(id).emit('user Message', msg);
    })
});
http.listen(5000, ()=>{
    console.log('Ativo na porta 5000')
})