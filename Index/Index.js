/* ===================================================== */
/* FUNCIÓN PARA CARGAR COMPONENTES                       */
/* ===================================================== */

function cargarComponente(
    rutaHTML,
    rutaCSS,
    rutaJS,
    contenedorID
){

    /* ===================================================== */
    /* CARGAR CSS                                             */
    /* ===================================================== */

    if(rutaCSS){

        const css = document.createElement("link");

        css.rel = "stylesheet";

        css.href = rutaCSS;

        document.head.appendChild(css);

    }



    /* ===================================================== */
    /* CARGAR HTML                                            */
    /* ===================================================== */

    fetch(rutaHTML)

        .then(response => response.text())

        .then(data => {

            document.getElementById(contenedorID)
                .innerHTML = data;



            /* ===================================================== */
            /* CARGAR JS                                              */
            /* ===================================================== */

            if(rutaJS){

                const script =
                    document.createElement("script");

                script.src = rutaJS;

                document.body.appendChild(script);

            }

        });

}



/* ===================================================== */
/* APARTADO PRODUCTOS                                    */
/* ===================================================== */

cargarComponente(

    "../Apartado Productos/ApartadoProductos.html",

    "../Apartado Productos/ApartadoProductos.css",

    null,

    "apartado-productos"

);



/* ===================================================== */
/* PRODUCTOS                                             */
/* ===================================================== */

cargarComponente(

    "/Productos/Productos.html",

    "/Productos/Productos.css",

    "/Productos/Productos.js",

    "productos"

);

/* ===================================================== */
/* CERRAR MENSAJE                                        */
/* ===================================================== */

const popup =

    document.getElementById(
        "popup-bienvenida"
    );



popup.addEventListener(

    "click",

    function(){

        popup.style.display = "none";

    }

);