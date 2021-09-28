

    (function ($) {
        var $window = $(window),
            $html = $('html');
        $window.resize(function resize() {
            if ($window.width() <=360){
                LoadClientesMobile();      
              
                LoadMobileServicios();
                LoadMobileMinTextoCarousel();
            
            }else if($window.width() >360  && $window.width() < 576 ){
                LoadClientesMobile();                                  	
            } else if ($window.width() >= 576 && $window.width() < 756) {
                LoadClientesMobile();
            } else if ($window.width() >= 756 && $window.width() < 780) {
                LoadClientesMobile();
            } else if ($window.width() >= 780 && $window.width() < 992) {
                LoadClientesMobile();
                           
                             
            } else if ($window.width() >= 992 && $window.width() < 1200) {
                LoadClientesEscritorio();
             
           
             } else if ($window.width() >= 1200) {   
                LoadClientesEscritorio();
            
                $('.logoWhats').addClass("appWhatsapp");            
              
            }

        }).trigger('resize');
        
     

        function LoadMobileServicios() {
            $('.seccion-servicios-all').html(' <div class="row mt-3">'
                + ' <div class="  col-md-12">'
                + '  <div class="card " style="background-image: url(https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-full-technology-sense-3d-computer-motherboard-background-fiction3d-image_66145.jpg); style="background-image: url(img/contenedor-redes.jpg);  background-repeat: no-repeat;  background-size: cover; background-position: center center;">      '
                + '      <div class="text-white text-center rgba-black-strong py-5 px-4 rounded">'
   + ' <div>  <h3 class="card-title pt-2 text-primary " > <i class="fas fa-tools"></i> <strong>Soporte Tecnico</strong></h3>'
                + '          <h3 class="pb-4 text-center  ">No dejes que tu <strong   class="font-weight-bold">    Máquina</strong> deje de <strong class="font-weight-bold">Funcionar</strong></h3>'
                + '  <button type="button" class="btn btn-ver-mas-servicios btn-rounded text-white font-weight-bold">Ver Más </button>'
                + '      </div>     </div>   </div> </div> '
                + ' <div class="  col-md-12 my-4">'
                + '  <div class="card " style="background-image: url(img/contenedor-redes.jpg);  background-repeat: no-repeat;  background-size: cover; background-position: center center;">'      
                + '      <div class="text-white text-center rgba-black-strong py-5 px-4 rounded">'
   + ' <div>  <h3 class="card-title pt-2 text-primary " > <i class="fas fa-network-wired"></i> <strong>Redes</strong></h3>'

   +'<h3 class="mb-4 text-center  "> <strong class="font-weight-bold">'
     +'     Conecta</strong> tus dispositvos entre sí y con el <strong  class="font-weight-bold">Mundo</strong></h3>'
   +'<button type="button" class="btn btn-ver-mas-servicios btn-rounded text-white font-weight-bold">  Ver Más</button>'
                + '      </div>     </div>   </div> </div>'
                + '  <div class=" col-md-12 mt-3">'
                + '         <div class="card mb-3 " style="background-image: url(img/contenedor-codigo.jpg); style="background-image: url(img/contenedor-redes.jpg);  background-repeat: no-repeat;  background-size: cover; background-position: center center;">'
                + ' <div class="text-white text-center rgba-black-strong py-5 px-4 rounded">'
                + '                    <div>  <h3 class="card-title pt-2 text-primary "> <i class="fas fa-code"></i><strong> Software</strong></h3>'
                + '                       <h3 class="mb-4 text-center  "> <strong class="font-weight-bold">'  
                + '      Disfruta</strong> de la <strong class="font-weight-bold">Eficiencia</strong> de los'  
                + '     programas que desarrollamos para ti </h3>'  
                + '      <button type="button" class="btn btn-ver-mas-servicios btn-rounded text-white font-weight-bold">'  
                + '          Ver Más'  
                + '     </button>'  
                + '                    </div> </div>  </div> </div>'

                + '        </div>  ');


        }
        function LoadTabletCarousel() {
            $('.seccion-tecnologia').html('<div class="carousel-tecnologia "><div class="content-all">'
                + '   <div class="content-carrousel">'
                + '         <figure ><img src="img/windowserver.png" class="tec1" ></figure>'
                + '           <figure><img src="img/sql_lite.png" class="tec2"></figure>'
                + '           <figure><img src="img/oracle.png " class="tec3"></figure>'
                + '            <figure><img src="img/node.png" class="tec4"></figure>'
                + '            <figure><img src="img/qt.png" class="tec5"></figure>'
                + '            <figure><img src="img/mysql.png" class="tec6"></figure>'
                + '            <figure><img src="img/jsp.png" class="tec7"></figure>'
                + '           <figure><img src="img/java.png" class="tec8"></figure>'
                + '            <figure><img src="img/diseño_Web.png" class="tec9"></figure>'
                + '           <figure><img src="img/digitalocean.png"  class="tec10"></figure>'
                + '            <figure><img src="img/centos.png" class="tec11"></figure>'
                + '     </div> '
                + '     </div>  <div class="fondo_carousel"></div>  </div>');



        }    
  
        function LoadMobileMinTextoCarousel() {
            $('.texto-carousel-empresas').html('<div class="row   mt-md-3 pt-md-3   mt-xl-5 pt-xl-5  mt-lg-5 pt-lg-5">'
            +'   <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6 text-center ">'
             +'   <h3 class="h1-responsive   text-white  mt-sm-5 text-center font-weight-bold  ">'
                +'   Empresa <i class="fas fa-building"></i></h3>'
                +'   <hr class="hr-light">'
                +'      <h5 class="mb-4 text-center    text-white">¿Quieres <strong'
              +'  class="font-weight-bold"> Mejorar</strong> y <strong'
                +'    class="font-weight-bold">Crecer</strong> como Empresa? <br>Por eso estamos'
              +'    aquí , Tú'
                  +' tienes la iniciativa y nosotros la <strong class="font-weight-bold">'
                +' Experiencia</strong> </h5>'
                +'    <button type="button"'
                +'      class="btn btn-contactos btn-rounded text-white font-weight-bold  "> Servicios'
                +'   </button>'
                +'     <button type="button"'
                +'           class="btn btn-contactos btn-rounded text-white font-weight-bold   "> Ver Más'
                +'        </button> </div>'
                +'  </div>');
  $('.texto-carousel-servicios').html(' <div class="row    mt-md-3 pt-md-3   mt-xl-5 pt-xl-5  mt-lg-5 pt-lg-5 ">'
                +' <div class="col-md-12 col-sm-12 col-lg-6   text-center">'
                 +'   <h3   class="h1-responsive   text-white  mt-sm-5 text-center font-weight-bold  ">'
                    +'       Soluciones Informáticas</h3>    <hr class="hr-light ">'
                        +'   <h5 class="mb-4  text-center   text-white">Nos<strong'
                 +'           class="font-weight-bold"> Dedicamos</strong> al Servicio de Soporte Técnico'
                +'        de Computadoras y Laptops          </h5>'
                        +'    <button type="button"  class="btn btn-contactos btn-rounded text-white font-weight-bold  ">'
                    +'        Servicios     </button>'
                        +'   <button type="button"     class="btn btn-contactos btn-rounded text-white font-weight-bold ">'
                        +'      Contacto     </button>'
                +'</div> </div>');

        }

        function LoadClientesMobile(){

            $('.Seccion-clientes').html('<div class="row  mt-3 ">' 
            + '        <div class="col-sm-12 col-md-12 mb-3">' 
            + '          <div class="card " ' 
            + '              style="background-image: url(img/Empresa.jpg);">' 
            + '             <div class="text-white text-center py-5 px-4 rounded">' 
            + '                <div>' 
            + '                    <h1 class="h1-responsive font-weight-bold ">' 
            + '                        Empresas </h1>' 
            + '                     <h4 class="mb-4    "> <strong class="font-weight-bold">Necesitas' 
            + '                     crecer </strong>, para ello puedes contar con nuestra <strong' 
                                + '                  class="font-weight-bold"> Ayuda!</strong>' 
                                + '              </h4>'                                  
       + '                                        </div>     </div>  </div>            </div>' 
       + '                      <div class="col-sm-12 col-md-12 mb-3 ">' 
       + '                     <div class="card " ' 
       + '                  style="background-image: url(img/Persona.jpg);">' 
                        + '                          <div class="text-white text-center   py-5 px-4 rounded">' 
      + '   <div>                   <h1 class="h1-responsive  font-weight-bold ">   Personas </h1>' 
        + '                                <h4 class="mb-4    "> <strong class="font-weight-bold">Somos la Solucion' 
                        + '                                 </strong>, a tus problemas tecnológicos                               </h4>' 
    + '                          </div>      </div>    </div>         </div>        ' 
    + '        <div class="col-md-12 col-sm-12  mb-3">' 
    + '                <div class="card " ' 
          + '              style="background-image: url(img/Estudiante.jpg);">' 
    + '                    <div class="text-white text-center  py-5 px-4 rounded">' 
    + '                <h1 class="h1-responsive fl    font-weight-bold ">' 
                      + '                              Estudiantes </h1>' 
                      + '                          <h4 class="mb-4   "> <strong class="font-weight-bold">Te ayudamos'
      + '</strong>, ah tener no tener<strong class="font-weight-bold"> límites </strong> y crecer ' 
         + '                           profesionalmente' 
                                + '             </h4>    ' 
                            + '                 </div>' 
                            + '             </div>' 
                + '          </div>' 
       + '     </div>'    );
    
    }
    function LoadClientesEscritorio(){
        $('.Seccion-clientes').html(      '   <div class="container-fluid   pt-5 d-flex align-items-end "style="height:650px">'
            +'    <div class="row d-flex justify-content-between align-items-end">'
            +'    <div class="col-md-3 col-lg-3 col-xl-4 text-white ">'
            +'                 <h4 class="mb-4   animated fadeInLeft "> <strong class="font-weight-bold">Necesitas'
                    +'                   crecer </strong>, para ello puedes contar con nuestra <strong'
           +'                 class="font-weight-bold">Ayuda!</strong>'
            +'        </h4>'
            +'        <h1 class="h1-responsive     font-weight-bold animated heartBeat ">'
                    +'                  Empresas </h1>'
                        +'        </div>'
                        +'        <div class="col-md-5 col-lg-5 col-xl-4  text-white ">'
                +'              <h4 class="mb-4   animated fadeInLeft "> <strong class="font-weight-bold">Somos la Solucion'
                +'          </strong>, a tus problemas tecnológicos                               </h4>'
                +'         <h1 class="h1-responsive  font-weight-bold animated heartBeat ">   Personas </h1>'
                +'         </div>'
                +'       <div class="col-md-3 col-lg-3 col-xl-4  text-white   ">'
                +'                 <h4 class="mb-4  animated fadeInLeft "> <strong class="font-weight-bold">Te ayudamos'
                +'</strong>, ah tener no tener <strong class="font-weight-bold">limites </strong> y crecer '
                +'profesionalmente'
              +'      </h4>   '
              +'<h1 class="h1-responsive fl    font-weight-bold animated heartBeat "> '
         +'         Estudiantes </h1> '
            +'         </div>'
            +'        </div>'
        +'</div>'   );

    }
    function LoadCarouselSwiper(){

        $('.seccion-tecnologia').html(' <div class="carousel-cubo"> <div class="swiper-container">'
        +'  <div class="swiper-wrapper">'
        +'   <div class="swiper-slide d-flex align-items-center" data-timeout="1000">'
        +'     <img src="img/windowserver.png" class="tec1 img-fluid"></div>'
        +'    <div class="swiper-slide d-flex align-items-center ">'
        +'      <img src="img/sql_lite.png" class="tec2 img-fluid"></div>'
        +'     <div class="swiper-slide d-flex align-items-center">'
        +'        <img src="img/oracle.png " class="tec3 img-fluid  "></div>'
        +'      <div class="swiper-slide d-flex align-items-center">'
        +'       <img src="img/node.png" class="tec4 img-fluid"></div>'
        +'     <div class="swiper-slide d-flex align-items-center">'
        +'       <img src="img/qt.png" class="tec5 img-fluid"></div>'
        +'      <div class="swiper-slide d-flex align-items-center">'
        +'        <img src="img/mysql.png" class="tec6 img-fluid"></div>'
        +'     <div class="swiper-slide d-flex align-items-center">'
        +'       <img src="img/jsp.png" class="tec7 img-fluid"></div>'
              +'     <div class="swiper-slide d-flex align-items-center">'
              +'      <img src="img/java.png" class="tec8 img-fluid h-100"></div>'
              +'    <div class="swiper-slide d-flex align-items-center">'
              +'       <img src="img/diseño_Web.png" class="tec9 img-fluid"></div>'
              +'        <div class=" swiper-slide d-flex align-items-center">'
              +'       <img src="img/digitalocean.png" class="tec10 img-fluid"></div>'
              +'   </div>'
              +'   <!-- Add Pagination -->'
              +'   <div class="swiper-pagination"></div>'
              +'  </div>'
              +' </div>');

    }
      
    })(jQuery);


