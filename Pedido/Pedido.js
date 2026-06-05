/* ===================================================== */
/* EMAILJS                                               */
/* ===================================================== */

emailjs.init("Dw-FH7SVB_BJzN5i1");


/* ===================================================== */
/* FORMULARIO                                            */
/* ===================================================== */

const formulario =

document.getElementById(
    "formulario-pedido"
);


/* ===================================================== */
/* ENVIAR PEDIDO                                         */
/* ===================================================== */

formulario.addEventListener(

    "submit",

    function(event){

        event.preventDefault();



        /* ===================================================== */
        /* DATOS FORMULARIO                                      */
        /* ===================================================== */

        const nombre =

        document.getElementById(
            "nombre"
        ).value;



        const distrito =

        document.getElementById(
            "distrito"
        ).value;



        const direccion =

        document.getElementById(
            "direccion"
        ).value;



        const telefono =

        document.getElementById(
            "telefono"
        ).value;



        /* ===================================================== */
        /* CARRITO                                               */
        /* ===================================================== */

        const carrito =

        JSON.parse(

            localStorage.getItem(
                "carrito"
            )

        ) || [];



        /* ===================================================== */
        /* PRODUCTOS TEXTO                                       */
        /* ===================================================== */

        let productosTexto = "";



        carrito.forEach(item => {



            /* ===================================================== */
            /* BUSCAR PRODUCTO COMPLETO EN PRODUCTOS.JS             */
            /* ===================================================== */

            const producto = productos.find(

                producto =>

                producto.id == item.id

            );



            /* ===================================================== */
            /* SI EXISTE                                             */
            /* ===================================================== */

            if(producto){

                productosTexto += `

================================

MARCA:
${producto.marca}

PRODUCTO:
${producto.nombre}

PRECIO:
${producto.precio}

COLOR:
${item.color}

DETALLES:
${producto.detalles.join(", ")}

`;

            }

        });



        /* ===================================================== */
        /* ENVIAR EMAIL                                          */
        /* ===================================================== */

        emailjs.send(

            "service_8541158",

            "template_xghqbbl",

            {

                nombre: nombre,

                telefono: telefono,

                distrito: distrito,

                direccion: direccion,

                productos: productosTexto

            }

        )

        .then(function(){



            /* ===================================================== */
            /* MENSAJE                                              */
            /* ===================================================== */

            const mensaje =

            document.getElementById(
                "mensaje-enviado"
            );

            mensaje.style.display = "block";

            mensaje.textContent =

            "Tu pedido fue enviado correctamente, te llamaremos pronto para coordinar la entrega.";



            /* ===================================================== */
            /* LIMPIAR CARRITO                                      */
            /* ===================================================== */

            localStorage.removeItem(
                "carrito"
            );



            /* ===================================================== */
            /* REDIRECCION                                           */
            /* ===================================================== */

            setTimeout(function(){

                window.location.href =

                "../index.html";

            }, 7000);

        })



        /* ===================================================== */
        /* ERROR                                                  */
        /* ===================================================== */

        .catch(function(error){

            console.log(error);



            alert(

                "Error al enviar el pedido"

            );

        });

    }

);



/* ===================================================== */
/* VALIDAR NOMBRE                                        */
/* ===================================================== */

document.getElementById(
    "nombre"
)

.addEventListener(

    "input",

    function(){

        this.value =

        this.value.replace(

            /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g,

            ""

        );

    }

);



/* ===================================================== */
/* VALIDAR TELEFONO                                      */
/* ===================================================== */

document.getElementById(
    "telefono"
)

.addEventListener(

    "input",

    function(){

        this.value =

        this.value.replace(

            /[^0-9]/g,

            ""

        );

    }

);

/* ===================================================== */
/* CERRAR MENSAJE                                        */
/* ===================================================== */

const popup =

    document.getElementById(
        "popup-pedido"
    );



popup.addEventListener(

    "click",

    function(){

        popup.style.display = "none";

    }

);