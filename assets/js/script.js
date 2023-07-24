
//ARREGLO DE OBJETOS CON INFO DE LAS PROPIEDADES
const propiedadesJSON = [
    {
        name: "Casa de campo",
        description: "Un lugar ideal para descansar de la ciudad",
        src:
            "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
        rooms: 2,
        m: 170
    },
    {
        name: "Casa de playa",
        description: "Despierta tus días oyendo el oceano",
        src:
            "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        rooms: 2,
        m: 130
    },
    {
        name: "Casa en el centro",
        description: "Ten cerca de ti todo lo que necesitas",
        src:
            "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        rooms: 1,
        m: 80
    },
    {
        name: "Casa rodante",
        description: "Conviertete en un nómada del mundo sin salir de tu casa",
        src:
            "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        rooms: 1,
        m: 6
    },
    {
        name: "Departamento",
        description: "Desde las alturas todo se ve mejor",
        src:
            "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        rooms: 3,
        m: 200
    },
    {
        name: "Mansión",
        description: "Vive una vida lujosa en la mansión de tus sueños ",
        src:
            "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        rooms: 5,
        m: 500
    }
];


//SELECCIÓN DE ELEMENTOS DEL DOM
const card = document.querySelector(".propiedades");
const totalSpan = document.querySelector("#total");
const button = document.querySelector("button.btn.btn-warning");
const cuartosInput = document.querySelector("#cuartos");
const mdesdeInput = document.querySelector("#mdesde");
const mhastaInput = document.querySelector("#mhasta");


//FUNCIÓN QUE VALIDA LOS VALORES INGRESADOS POR EL USUARIO
function validarCampoNumerico(input) {
    const value = input.value;
    const filteredValue = value.replace(/[\+\-\,\.\s]/g, ''); // Se filtra los símbolos indeseados

    if (value !== filteredValue) {
        input.value = filteredValue;
    }
}


//EVENTOS DE VALIDACIÓN PARA LOS CAMPOS DE ENTRADA
cuartosInput.addEventListener("input", function (event) {
    validarCampoNumerico(event.target);
});

mdesdeInput.addEventListener("input", function (event) {
    validarCampoNumerico(event.target);
});

mhastaInput.addEventListener("input", function (event) {
    validarCampoNumerico(event.target);
});


//FUNCIÓN QUE COMPLETA LOS CAMPOS DE LA TARJETA CON LOS VALORES DE LAS VARIABLES
function cards(cuartos, mdesde, mhasta) {
    let html = "";
    let contar = 0;


    //CICLO QUE RECORRE LAS PROPIEDADES DE LOS OBJETOS DEL ARREGLO
    for (let propiedad of propiedadesJSON) {

        if (
            propiedad.rooms === cuartos && 
            propiedad.m >= mdesde && 
            propiedad.m <= mhasta) {

            html += `<div class="propiedad"> 
                <div class="img" style="background-image: url('${propiedad.src}')"></div> 
                <section> 
                <h5>${propiedad.name}</h5> 
                <div class="d-flex justify-content-between">
                <p>Cuartos: ${propiedad.rooms}</p> 
                <p>Metros: ${propiedad.m}</p> 
                </div> 
                <p class="my-3">${propiedad.description}</p> 
                <button class="btn btn-info ">Ver más</button> 
                </section> 
            </div>`

            contar++

        }
    }

    card.innerHTML = html
    totalSpan.textContent = contar // Se actualiza el contenido del <span> con el nuevo total
}


//FUNCIÓN QUE VALIDA LOS VALORES INGRESADOS POR EL USUARIO
function validar() {
    let cuartos = document.querySelector("#cuartos").value;
    let mdesde = document.querySelector("#mdesde").value;
    let mhasta = document.querySelector("#mhasta").value;


    //DECLARAR QUE LOS VALORES DE LAS VARIABLES SON NÚMEROS
    cuartos = Number(cuartos), mdesde = Number(mdesde), mhasta = Number(mhasta)


    //CONDICIONES
    if (cuartos == '' && mdesde == '' && mhasta == '') {
        alert("Debes rellenar todos los campos")

    } else if (cuartos == '' || mdesde == '' || mhasta == '') {
        alert("Debes rellenar todos los campos")

        //EL VALOR DE "HASTA" DEBE SER MAYOR QUE EL VALOR DE "DESDE" --> SI ESTO OCURRE SE EJECUTA LA FUNCIÓN CARDS
    } else if (mdesde < mhasta) {
        cards(cuartos, mdesde, mhasta)
    }
}


//PANTALLA INICIO
window.addEventListener("load", () => cards(1, 1, 500));


//EVENTO AL HACER CLICK EN EL BOTÓN
button.addEventListener("click", validar)