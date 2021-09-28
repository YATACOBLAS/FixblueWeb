//const axios = require ('axios');

document.getElementById('sendEmail').addEventListener("click",function(){

 let strCorreo= document.getElementById("idCorreo").value;
 let strCargo= document.getElementById("idCargo").value;
 let strMensaje= document.getElementById("idMensaje").value;

if(strCorreo !="" && strCargo != "" && strMensaje !=""){
let datos={
c:strCorreo,
car:strCargo,
m:strMensaje

};

axios.post('/api/contacto',datos)
.then(function(response){
   document.getElementById("idCorreo").value="";
   document.getElementById("idCargo").value="";
   document.getElementById("idMensaje").value="";
alert("Gracias por escribirnos en breve te contactaremos");

}).catch(function(error){
    console.log(error);
});

}else{
alert("Porfavor Rellenar todo los campos");

}

});     