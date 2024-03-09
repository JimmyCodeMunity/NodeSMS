const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const messageRoute = require('./routes/MessageRoute');

app.listen(5000, (req, res) => {
    console.log('listening on port 5000');
})





app.get('/', (req, res) => {
    res.send('Hello SMS server')
})

//set up sms routes
app.use('/api/sendsms', messageRoute );

