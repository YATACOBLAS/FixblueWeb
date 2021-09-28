const express= require('express');
const router = express.Router();
//importando la clase email javascript para su envio
const email = require('../servidor/email');

/*
const oEmail=new email({
    "service":"gmail",
     "auth":{
     "user":"--confidential--",
    "pass":"--confidential--"
     }
    });
    */

const oEmail=new email({
        "host":"--confidential--",
        "port":"25",
         "secure":false,
         "auth":{
        "type":"login",
        "user":"--confidential--",
        "pass":"--confidential--"
         }
        });

router.get('/',(req,res)=>{
res.render('index.html');
});
router.get('/we',(req,res)=>{
    res.render('nosotros.html');
    });
router.get('/services',(req,res)=>{
    res.render('servicios.html');
   });
   router.get('/contact',(req,res)=>{
    res.render('contacto.html');
   });
   router.get('/technology',(req,res)=>{
    res.render('tecnologias.html');
   });

   router.post('/api/contacto',function(req,res,next){
    console.log('api activadoss')
 let email={
     from:"--confidential--",
     to:"--confidential--",
     subject:"FIXBLUE ATENCIÓN AL CLIENTE",
     html:`<div><p>Correo: ${req.body.c}</p>
        <p>Cargo: ${req.body.car}</p>
         <p>Mensaje: ${req.body.m}</p>
         </div> `
};

 oEmail.enviarCorreo(email,req.body);

 res.send("ok");  
});

module.exports=router; 