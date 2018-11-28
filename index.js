const path=require('path');
var express=require('express');
var socket=require('socket.io');
var socket2=require('socket.io');
const app=express();
//const app2=express();

//app setup

var server=app.listen(process.env.PORT || 5100 ,'0.0.0.0', function(){
    console.log('listening to request port' +  process.env.PORT  || 5100);
});

/*var server2=app2.listen(process.env.PORT || 5300 ,'0.0.0.0', function(){
   console.log('listening to request port 5300' +  process.env.PORT  || 5300);
});*/
//static files
app.use(express.static('./static'));

app.get('/stream', (req,res)=>{
    res.sendFile(path.join(__dirname, './stream.html'));
});

/*app2.use(express.static('./static'));

app2.get('/stream', (req,res)=>{
    res.sendFile(path.join(__dirname, './stream.html'));
});
*/
//sockey setup

var io=socket(server);
//var io2=socket2(server2);

io.on('connection',(socket)=>{
    console.log('made socket conection',socket.id);
    socket.on('image',(data)=>{ 
       socket.broadcast.emit('image',data);
    });
   });
   
   /* io2.on('connection',(socket2)=>{
      console.log('made socket conection',socket2.id);
      socket2.on('image',(data)=>{ 
         socket2.broadcast.emit('image',data);
      });
   });
    socket.on('paschal',(data)=>{ 
        socket.broadcast.emit('paschal',data);
     });

     socket.on('ifeanyi',(data)=>{ 
        socket.broadcast.emit('ifeanyi',data);
     });
    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
     });*/



