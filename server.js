const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const app = express();
const user = require('./routes/api/userRoutes');
const publicPath = path.join(__dirname, 'client', 'build');
const port = process.env.PORT || 3000;

mongoose.connect(process.env.CONNECT_URL,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
     .then(() => console.log("database connected"))
     .catch(err => console.log(err));

app.use(express.static(publicPath));

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});

app.use(express.json());

app.get('/user', user);

//app.use('/products', require('./routes/api/productRoutes'));
//app.use('/orders', require('./routes/api/orderRoutes'));


app.listen(port, () => {
   console.log('Server is up!');
});