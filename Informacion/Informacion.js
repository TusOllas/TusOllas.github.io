/* ===================================================== */
/* PRODUCTO SELECCIONADO                                 */
/* ===================================================== */

const producto =

JSON.parse(

    localStorage.getItem(
        "productoSeleccionado"
    )

);



/* ===================================================== */
/* CARGAR INFORMACION                                    */
/* ===================================================== */

document.getElementById("marca-producto")
.textContent = producto.marca;



document.getElementById("nombre-producto")
.textContent = producto.nombre;



document.getElementById("precio-producto")
.textContent = producto.precio;



document.getElementById("descripcion-producto")
.textContent = producto.descripcion;



document.getElementById("imagen-principal")
.src = producto.imagen;


document.getElementById("mini-imagen-1")
.src = producto.imagenes[0];



document.getElementById("mini-imagen-2")
.src = producto.imagenes[1];



document.getElementById("mini-imagen-3")
.src = producto.imagenes[2];


/* ===================================================== */
/* DETALLES                                              */
/* ===================================================== */

const contenedorDetalles =

document.getElementById(
    "detalles-producto"
);



contenedorDetalles.innerHTML = "";



producto.detalles.forEach(detalle => {

    contenedorDetalles.innerHTML += `

        <div class="item-detalle">

            <p class="texto-detalles">

                ${detalle}

            </p>

            <div class="linea-detalle"></div>

        </div>

    `;

});

/* ===================================================== */
/* CAMBIAR IMAGEN PRINCIPAL                              */
/* ===================================================== */

const miniImagenes =

document.querySelectorAll(
    ".mini-imagen"
);



miniImagenes.forEach(imagen => {

    imagen.addEventListener(

        "click",

        function(){

            document.getElementById(
                "imagen-principal"
            ).src = this.src;

        }

    );

});

/* ===================================================== */
/* COLORES                                               */
/* ===================================================== */

const listaColores =

document.getElementById(
    "lista-colores"
);



listaColores.innerHTML = "";



producto.colores.forEach(color => {

    listaColores.innerHTML += `

        <option>

            ${color}

        </option>

    `;

});

/* ===================================================== */
/* AGREGAR AL CARRITO                                    */
/* ===================================================== */

const botonCarrito =

document.getElementById(
    "boton-carrito"
);



botonCarrito.addEventListener(

    "click",

    function(){



        let carrito =

        JSON.parse(

            localStorage.getItem("carrito")

        ) || [];



        carrito.push({

            id: producto.id,

            color: listaColores.value

        });



        localStorage.setItem(

            "carrito",

            JSON.stringify(carrito)

        );



    /* ===================================================== */
    /* MOSTRAR MENSAJE                                       */
     /* ===================================================== */

        const mensaje =

        document.getElementById(
            "mensaje-carrito"
        );



        mensaje.style.display = "block";



    /* ===================================================== */
    /* OCULTAR DESPUÉS DE 2 SEGUNDOS                         */
    /* ===================================================== */

        setTimeout(function(){

            mensaje.style.display = "none";

        }, 2000);

    }

);
