const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db_url = 'mongodb://localhost:27017/quicktutordb';

mongoose.connect(db_url, {useNewUrlParser: true}).then(() => console.log("MongoDB connected!")).catch(err => console.log(err));

app.use("/users", users);

app.listen(5000, () => console.log("Server up and running!"));

//socket.io
// const http = require('http').Server(app);
// const io = require('socket.io')(http);

// io.on('connection', (socket) => {
//     console.log('Connected');

//     socket.on('disconnect', () => {
//         console.log('Disconnected');
//     });

//     socket.on('example_message', (msg) => {
//         console.log('message: ' + msg);
//     })

//     socket.on('login', loginHandler);
// })

// io.listen(8000);
