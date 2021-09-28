(function ($) { var $window = $(window),
  $html = $('html');
$window.resize(function resize() { if ($window.width() <=760){
Redes();
Mantenimiento();
Software();
}
   else{ 
    SoftwareMobile();
    RedesMobile();
  MantenimientoMobile();
                             
                              }
}).trigger('resize');

function Redes(){
$('.detalle-redes').html( '  <h2 class="my-2  pt-2 h3 text-center">Redes</h2>'
+ '  <div class="row">   '
      + '        <div class="col-2">'
          + '          <i class="fas fa-check-circle fa-2x indigo-text"></i>'
          + '        </div>'
          + '        <div class="col-10">'
          + '           <h6 class=" py-1 feature-title">Servidores</h6>'
        + '              <h6 class="  py-1 feature-title">CCTV-Camaras de Seguridad</h6>'
        + '            <h6 class=" py-1 feature-title">Instalacion de Redes</h6>'
        + '              <h6 class=" py-1 feature-title">Configuracion y Administracion de Red</h6>'
        + '             <h6 class=" py-1 feature-title">Acceso Remoto</h6>'
        + '            <h6 class=" py-1 feature-title">Gestion de Archivos</h6>'
        + '             <h6 class=" py-1 pb-3 feature-title">Impresion y Archivos en Red</h6>'

        + '              <div style="height:15px"></div>'
        + '            </div>'
        + '           </div>'   );

}
function RedesMobile(){
$('.detalle-escritorio-redes').html('<h2 class="my-2 pl-5 ml-3 h3 text-center">Redes</h2>'
+ '  <div class="row ">   '
      + '        <div class="col-2">'
          + '          <i class="fas fa-check-circle fa-2x indigo-text"></i>'
          + '        </div>'
          + '        <div class="col-10">'
          + '           <h6 class="feature-title">Servidores</h6>'
        + '              <h6 class="feature-title">CCTV-Camaras de Seguridad</h6>'
        + '            <h6 class="feature-title">Instalacion de Redes</h6>'
        + '              <h6 class="feature-title">Configuracion y Administracion de Red</h6>'
        + '             <h6 class="feature-title">Acceso Remoto</h6>'
        + '            <h6 class="feature-title">Gestion de Archivos</h6>'
        + '             <h6 class="feature-title">Impresion y Archivos en Red</h6>'
              
        + '              <div style="height:15px"></div>'
        + '            </div>'
        + '           </div>'   );

}
function Mantenimiento(){
$('.detalle-mantenimiento').html( '   <h2 class="my-2 pt-2 h3 text-center">Equipos</h2> '  
+ '    <div class="row ">'  
+    '            <div class="col-2">'  
+        '           <i class="fas fa-check-circle fa-2x indigo-text"></i>'  
+         '         </div>'  
+         '   <div class="col-10">'  
+             '          <h6 class=" py-1 feature-title">Computadoras</h6>'  
+             '          <h6 class=" py-1 feature-title">Laptop</h6>'  
+              '     <h6 class="py-1 feature-title">Impresoras</h6>'  
+           '           <p class=" py-1 grey-text">(Epson L-210,L-395,L-396)'  
+              '           </p>'  
+              '        <div style="height:15px"></div>'  
+           '         </div>'  
+           '       </div>'  
+            '      <h2 class="my-2 h3 text-center">Nivel</h2>'  
+        '     <div class="row">'  
+           '         <div class="col-2">'  
+              '                <i class="fas fa-check-circle fa-2x indigo-text"></i>'  
+              '             </div>'  
+             '             <div class="col-10">'  
+                 '              <h6 class=" py-1 feature-title">Hardware</h6>'  
+                '             <h6 class=" py-1 pb-3 feature-title">Software</h6>         '  
+               '              </p>'  
+                 '           <div style="height:15px"></div>'  
+         '            </div>'  
+              '        </div>'   );

}
function MantenimientoMobile(){
$('.detalle-escritorio-mantenimiento').html( '   <h2 class="my-2 h3 my-2 pl-5 ml-3 text-center">Equipos</h2> '  
+ '    <div class="row">'  
+    '            <div class="col-2">'  
+        '           <i class="fas fa-check-circle fa-2x indigo-text"></i>'  
+         '         </div>'  
+         '   <div class="col-10">'  
+             '          <h6 class="feature-title">Computadoras</h6>'  
+             '          <h6 class="feature-title">Laptop</h6>'  
+              '     <h6 class="feature-title">Impresoras</h6>'  
+           '           <p class="grey-text">(Epson L-210,L-395,L-396)'  
+              '           </p>'  
+              '        <div style="height:15px"></div>'  
+           '         </div>'  
+           '       </div>'  
+            '      <h2 class="my-2 h3  my-2 pl-5 ml-3 text-center">Nivel</h2>'  
+        '     <div class="row">'  
+           '         <div class="col-2">'  
+              '                <i class="fas fa-check-circle fa-2x indigo-text"></i>'  
+              '             </div>'  
+             '             <div class="col-10">'  
+                 '              <h6 class="feature-title">Hardware</h6>'  
+                '             <h6 class="feature-title">Software</h6>         '  
+               '              </p>'  
+                 '           <div style="height:15px"></div>'  
+         '            </div>'  
+              '        </div>'   );

}
function Software(){
$('.detalle-software').html( '   <h2 class="my-2 h3 text-center">Plataformas</h2> '  
+ '    <div class="row">'  
+    '            <div class="col-2 px-3">'  
+        '           <i class=" pr-5 pr-sm-5  fas fa-check-circle fa-2x indigo-text"></i>'  
+         '         </div>'  
+         '   <div class="col-8 px-5">'  
+             '          <h6 class=" py-1 feature-title">Escritorio</h6>'  
+             '          <h6 class=" py-1 feature-title">Web</h6>'  
+             '          <h6 class=" py-1 feature-title">Mobile</h6>'   
+              '        <div style="height:15px"></div>'  
+           '         </div>'  
+           '       </div>'    );

}
function SoftwareMobile(){
$('.detalle-escritorio-software').html( '  <h2 class="my-2 my-2 pl-5 ml-3 h3 text-center">Plataformas</h2> '  
+ '    <div class="row ">'  
+    '            <div class="col-2">'  
+        '           <i class="fas fa-check-circle fa-2x indigo-text"></i>'  
+         '         </div>'  
+         '   <div class="col-10">'  
+             '          <h6 class="feature-title">Escritorio</h6>'  
+             '          <h6 class="feature-title">Web</h6>'  
+             '          <h6 class="feature-title">Mobile</h6>'   
+              '        <div style="height:15px"></div>'  
+           '         </div>'  
+           '       </div>'     );

}

})(jQuery);
