const express = require("express");
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

const app = express();

const accountRoutes = require('./routes/api/accounts');

app.use(express.json());

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));




app.use('/api/accounts', accountRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));