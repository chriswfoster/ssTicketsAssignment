const express = require('express');
const http = require("http")
const socketIo = require("socket.io")
const cors = require('cors')
const {json} = require('body-parser')

const PORT = 3000;
// const PORT = 80;


const app = express();
app.use(json());
app.use(cors());
const server = http.createServer(app);
const io = socketIo(server)
app.use(express.static(`${__dirname}/../build`))

let tickets = [

]
let id = 1;

io.on("connection", socket => {
    console.log("A user has connected to the system");
    io.sockets.emit("Tickets", tickets)
    socket.on("AddTicket", ticket => {
        tickets.push({id, title: ticket, status:"New"})
        id++
        io.sockets.emit("Tickets", tickets)
    })
    socket.on("AcceptTicket", id => {
        tickets.forEach((ticket) => { 
            ticket.id===id ? ticket.status="Accepted" : null
        })
        io.sockets.emit("Tickets", tickets)
    })
    socket.on("DeleteTicket", id => {
        tickets.forEach((ticket, i) => {
            ticket.id=== id ? tickets.splice(i, 1) : null
        })
        io.sockets.emit("Tickets", tickets)
    })
})

const path = require("path")
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/../build/index.html"))
})


server.listen(PORT, console.log(`Listening on port ${PORT}`));