const express = require('express');
const app = express();
const {puns} = require('./puns')
const cors = require('cors')

app.use(cors());
app.use(express.static('frontend'));
app.get('/api/puns', (req, res)=>{
    res.json(puns);
})


app.listen(5000, ()=>{
console.log('server is listening on port 5000')
});