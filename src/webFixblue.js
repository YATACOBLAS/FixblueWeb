 const express = require('express');
 const path = require('path');
  const morgan= require('morgan');
 const bodyParser=require('body-parser');
  const app = express();
const email = require('./servidor/email');

  //settings 
app.set('port',process.env.PORT || 3000);
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//Import routes
const costumerRoutes=require('./routes/rutas');

//routes
app.use('/',costumerRoutes);

//static files
app.use(express.static(path.join(__dirname,'public')));
//emaail ruta


app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
 });

 ///////////////////////////////////////////////////////////////////////////////////////


