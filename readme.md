# TP integrador: LABORATORIO DE COMPUTACION II

## ETAPA 2 - CSS

    Este es un proyecto de carácter educativo, donde se busca crear una aplicación web que sirva para visualizar
     el estado del clima en diferentes ciudades del mundo. Donde se aplicarán los conocimientos adquiridos en la 
     materia Laboratorio de Computación II de la Técnicatura universitaria en computacion (UTN)

    Dicho proyecto esta dividido en 3 etapas:
    ETAPA 1: HTML 
    ETAPA 2: CSS
    ETAPA 3: JAVASCRIP

    Al momento de subir este documento, el trabajo esta avanzado hasta la ETAPA 2 incluida (HTML Y CSS completos)
    . Junto con este archivo readme.md ya que olvidé subirlo en la etapa 1. Esta es la primera vez que tengo 
    contacto con estas tecnologías y estos formatos, asi que cualquier sugerencia sobre como mejorar mi 
    redacción es bienvenida. 

    A continuación dejo algunos acotes sobre como se resolvió esta etapa:

    -comon.css: Me encontré con que el header, el footer y los botones compartian el mismo formato en todas las 
    páginas asi que los edité directamente desde este archivo, tambien agregué a las variables los colores que 
    utilicé tanto en add-city como en help, así como tambien hice que cambie el cursor cuando este pase por 
    encima de un botón.

    -index.css: La utilicé solo para darle estilo al selector de ciudad y la tarjeta donde se encuentran los 
    resultados, trabajé con flex para centrar los elementos.

    -add-city.css: Aquí le di estilo solamente a los elementos de la etiqueta main de add-city.html, donde 
    también agregué un section con varios div para mostrar los diferentes status sobre la carga de la ciudad. 
    Todos ubicados y centrados con la propiedad flex, utilizando colores que agregué a las variables en comon.css

    -help.css: Mi mayor trabajo aca fué centrar todos los elementos, nuevamente utilizando la propiedad flex (es 
    con la que mas cómodo me siento trabajando), tambien agregué un div en help.html y lo estilé utilizando un 
    color que agregué en las variables de comon.css.


## ESTAPA 3 - JavaScrip

    En esta estapa se corrigió los errores de la etapa anterior en base a la repetición de código
    Además se agrego funcionalidad JavaScrip para darle vida a la página

    Algunos acotes sobre como se resolvió esta etapa:

    -comon.js: Se declararon algunas variables globales comunes a todas las paginas y se construyo la funcion fetch
     que hace la consulta a la API 

    -index.js: Se utilizo para realizar la carga de ciudades al selector y construir la tarjeta donde se mostraran 
    los datos del clima

    -add-city.js: Utilizado para validar las ciudades y cargarlas al localStorage

    -help.js: Aquí se utilizó una API de emailJS para hacer envios de email de consultas que lleguen directamente
    a mi casilla de correo personal



Quedo atento a sugerencias, correcciones y cualquier otro tip que pueda alimentar mi aprendizaje. 
    Saludos, Bortoli Gaston.asdasd