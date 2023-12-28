require('dotenv').config();

const express = require('express');
const connectToDB = require('./db/databaseConnections');
const allRoutes = require('./routes');
const app = express();

app.use(express.json());
connectToDB;

app.use('/api/stms/v1/', allRoutes);

app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`);
});


