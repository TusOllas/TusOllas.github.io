/* ===================================================== */
/* CARRITO                                                */
/* ===================================================== */

let carrito =

JSON.parse(

    localStorage.getItem("carrito")

) || [];



/* ===================================================== */
/* CONTENEDOR                                             */
/* ===================================================== */

const contenedor =

document.getElementById(
    "productos-carrito"
);



/* ===================================================== */
/* MOSTRAR PRODUCTOS                                     */
/* ===================================================== */

function mostrarCarrito(){



    contenedor.innerHTML = "";



    carrito.forEach((item, index) => {



        const producto = productos.find(

            producto =>

            producto.id == item.id

        );



        contenedor.innerHTML += `

            <div class="item-carrito">



                <div class="info-producto">



                    <div class="caja-imagen">

                        <img
                            src="${producto.imagen}"
                            class="imagen-producto"
                        >

                    </div>



                    <p class="nombre-producto">

                        ${producto.nombre}

                        ,

                        ${item.color}

                    </p>



                </div>



                <button
                    class="boton-eliminar"
                    onclick="eliminarProducto(${index})">

                    X

                </button>



            </div>

        `;

    });

}



/* ===================================================== */
/* ELIMINAR PRODUCTO                                     */
/* ===================================================== */

function eliminarProducto(index){



    carrito.splice(index, 1);



    localStorage.setItem(

        "carrito",

        JSON.stringify(carrito)

    );



    mostrarCarrito();

}



/* ===================================================== */
/* CARGA INICIAL                                          */
/* ===================================================== */

mostrarCarrito();

/* ===================================================== */
/* ABRIR PEDIDO                                          */
/* ===================================================== */

function abrirPedido(){

    window.location.href =

    "../Pedido/Pedido.html";

}