/* ===================================================== */
/* PRODUCTOS                                             */
/* ===================================================== */

const productos = [

    {

        id: 1,

        categoria: "OLLAS",

        marca: "VALESKA",

        nombre: "JUEGO DE OLLAS - 6 PIEZAS",

        precio: "S/ 200.00",

        imagen: "../Productos/Imagenes/Olla1.png",

        imagenes: [

        "../Productos/Imagenes/Olla1.png",

        "../Productos/Imagenes/Sarten1.png",

        "../Productos/Imagenes/Olla3.png"

    ],

        descripcion:
        "Juego de ollas de aluminio con antiadherente de alta calidaASASSSASSAASASSAASd.",
        

        colores: [

            "Negro",

            "Verde",

            "Rojo"

        ],

        detalles: [

            "Material: Aluminio",

            "Capacidad: Olla Principal 4.9 L + Caserola de 1 L + Sarten de 24 cm + Tetera 6 L + Olla Principal 4.9 L + Caserola de 1 L + Sarten de 24 cm + Tetera 6 L",
            
            "Modelo: Loreto",

            "Codigo: 1249843"

        ]

    },



    {

        id: 2,

        categoria: "TETERAS",

        marca: "VALESKA",

        nombre: "TETERA DE ACERO",

        precio: "S/ 120.00",

        imagen: "../Productos/Imagenes/Sarten1.png",
        
        imagenes: [

        "../Productos/Imagenes/Olla1.png",

        "../Productos/Imagenes/Sarten1.png",

        "../Productos/Imagenes/Olla1.png"

    ],
        descripcion:
        "Tetera resistente de acero inoxidable.",

        colores: [

            "Negro",

            "Plateado"

        ],

        detalles: [

            "Material: Acero",

            "Capacidad: 2 L",

            "Modelo: Loreto",

            "Codigo: 12345",

        ]

    },



    {

        id: 3,

        categoria: "LICUADORAS",

        marca: "VALESKA",

        nombre: "LICUADORA INDUSTRIAL",

        precio: "S/ 350.00",

        imagen: "../Productos/Imagenes/Olla1.png",

        descripcion:
        "Licuadora industrial de alta potencia.",

        colores: [

            "Negro",

            "Gris"

        ],

        detalles: [

            "Potencia: 1200W",

            "Capacidad: 2 L"

        ]

    },



    {

        id: 4,

        categoria: "SARTENES",

        marca: "VALESKA",

        nombre: "SARTÉN ANTIADHERENTE",

        precio: "S/ 90.00",

        imagen: "../Productos/Imagenes/Sarten1.png",
         
        imagenes: [

        "../Productos/Imagenes/Olla1.png",

        "../Productos/Imagenes/Sarten1.png",

        "../Productos/Imagenes/Olla1.png"

    ],
        descripcion:
        "Sartén antiadherente de uso profesional.",

        colores: [

            "Negro",

            "Rojo"

        ],

        detalles: [

            "Material: Aluminio",

            "Tamaño: 24 cm"

        ]

    },
    
    {

        id: 5,

        categoria: "LICUADORAS",

        marca: "VALESKA",

        nombre: "JUEGO DE OLLAS - 9 PIEZAS",

        precio: "S/ 200.00",

        imagen: "../Productos/Imagenes/Olla1.png",

        imagenes: [

        "../Productos/Imagenes/Olla1.png",

        "../Productos/Imagenes/Sarten1.png",

        "../Productos/Imagenes/Olla3.png"

        ],
         descripcion:
        "Sartén antiadherente de uso profesional.",

        colores: [

            "Negro",

            "Rojo"

        ],

        detalles: [

            "Material: Aluminio",

            "Tamaño: 24 cm"

        ]
    },
];



/* ===================================================== */
/* ELEMENTOS DEL DOM                                     */
/* ===================================================== */

const grid = document.getElementById("grid-productos");

const tituloCategoria =
document.getElementById("titulo-categoria");



/* ===================================================== */
/* MOSTRAR PRODUCTOS                                     */
/* ===================================================== */

function mostrarProductos(categoriaSeleccionada){

    grid.innerHTML = "";



    const productosFiltrados =

    categoriaSeleccionada === "TODO"

    ? productos

    : productos.filter(

        producto =>

        producto.categoria === categoriaSeleccionada

    );



    productosFiltrados.forEach(producto => {

        grid.innerHTML += `

            <div class="tarjeta-producto">

                <img
                    src="${producto.imagen}"
                    class="imagen-producto"
                >

                <p class="marca-producto">

                    ${producto.marca}

                </p>

                <h2 class="nombre-producto">

                    ${producto.nombre}

                </h2>

                <div class="precio-producto">

                    ${producto.precio}

                </div>

                <button
                    class="boton-agregar"
                    data-id="${producto.id}">

                    INFORMACIÓN

                </button>

            </div>

        `;

    });

}



/* ===================================================== */
/* CAMBIO DE CATEGORÍAS                                  */
/* ===================================================== */

document.addEventListener(

    "click",

    function(event){

        const categoria =

        event.target.closest(".categoria");



        if(categoria){

            event.preventDefault();



            const categoriaSeleccionada =

            categoria.dataset.categoria;



            tituloCategoria.textContent =

            categoriaSeleccionada;



            mostrarProductos(
                categoriaSeleccionada
            );

        }



        /* ===================================================== */
        /* BOTON AGREGAR                                         */
        /* ===================================================== */

        const botonAgregar =

        event.target.closest(
            ".boton-agregar"
        );



        if(botonAgregar){

            const idProducto =

            botonAgregar.dataset.id;



            const productoSeleccionado =

            productos.find(

                producto =>

                producto.id == idProducto

            );



            localStorage.setItem(

                "productoSeleccionado",

                JSON.stringify(
                    productoSeleccionado
                )

            );



            window.location.href =

            "../Informacion/Informacion.html";

        }

    }

);



/* ===================================================== */
/* CARGA INICIAL                                         */
/* ===================================================== */

mostrarProductos("TODO");