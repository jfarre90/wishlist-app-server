require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const wishesRoutes = require('./routes/wishes');

//I am using the cors module to prevent the issues of cross-origin referencing, as it would affect us when accessing the API.
const cors = require('cors'); 

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json()); //setting it to use json to serve API


//ROUTES
app.use('/api/wishes', wishesRoutes);


//ERROR HANDLING

app.use(function(req,res,next){
    let err = new Error("Not found"); 
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function(){
    console.log(`Server is starting on port ${PORT}`);
})