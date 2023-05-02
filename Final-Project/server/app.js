const express = require('express');
const app = express();
//app.get('/', (req, res) => res.send('Hello world!'));
const port = process.env.PORT || 3001;

const mongoose = require('mongoose');
const cors = require('cors');
const items = require('./routes/api/items');

//Connect Database
app.use(cors({orgin: true, credentials: true}));

app.use(express.json({ extended: false }));
app.use('/api/items', items);
app.get('/hi', (req, res) => res.send("<h2>You are on the hi route</h2>"));

const conn_str = 'mongodb+srv://bdc30468:DO7sHXBsmFYvJPWy@cluster0.mlsokk4.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
mongoose.connect(conn_str,{
    useUnifiedTopology : true,
    useNewUrlParser : true
})
.then(() => {
    app.listen(port)
    console.log('MongoDB Connection Succeeded...')
})
.catch(err => {
    console.log('Error in DB Connection ${err}');
});

