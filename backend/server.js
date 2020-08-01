const app = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.user(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db_url = 'https://localhost:21017/quicktutordb';

mongoose.connect(db_url, {useNewUrlParser: true}).then(() => console.log("MongoDB connected!")).catch(err => console.log(err));

app.use("/routes/users", users);

app.listen(5000, () => console.log("Server up and running!"));
