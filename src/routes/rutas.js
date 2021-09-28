const express= require('express');
const router = express.Router();
//importando la clase email javascript para su envio
const email = require('../servidor/email');

/*
const oEmail=new email({
    "service":"gmail",
     "auth":{
     "user":"fixblueperu@gmail.com",
    "pass":"fixblue_social2018"
     }
    });
    */

const oEmail=new email({
        "host":"smtpout.secureserver.net",
        "port":"25",
         "secure":false,
         "auth":{
        "type":"login",
        "user":"contacto@fixblueperu.com",
        "pass":"@Fixbluecorreo18"
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
     from:"contacto@fixblueperu.com",
     to:"fixblueperu@gmail.com",
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