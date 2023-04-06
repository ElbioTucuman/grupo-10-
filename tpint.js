const nom=document.getElementById("nombre").value;
const apel=document.getElementById("apellido").value;
const tele=document.getElementById("telefono").value;
const emai=document.getElementById("email1").value;
const pai=document.getElementById("pais").value;
const ciud=document.getElementById("ciudad").value;
const adult=document.getElementById("adultos").value;
const nin=document.getElementById("ninos").value;



console.log(document.getElementById("adultos").value);
console.log(document.getElementById("ninos").value);

console.log(document.getElementById("ciudad").value);
console.log(document.getElementById("pais").value);
console.log(document.getElementById("email1").value);


console.log(adult);
console.log(nin);

const precioAdultos=5000;
const precioNinos=3000;

let presup=0;

const siguiente=document.getElementById("siguiente");
const anterior=document.getElementById("anterior");
const enviar = document.getElementById("enviar");

const formu1=document.getElementById("form1");
const formu2=document.getElementById("form2");

function envi(){
    const precioAdultos=5000;
    const precioNinos=3000;
    
    let presup=0; 
let cal=0;

console.log(adult);
console.log(nin);

presupuesto=precioAdultos*adult;
cal=precioNinos*nin;
console.log(presupuesto);
console.log(cal);


console.log("qn tql")

}



function sig(){
formu1.classList.add("d-none");
formu2.classList.remove("d-none");
console.log("chau");

}

function ante(){
    console.log("hola");
    formu2.classList.add("d-none");
    formu1.classList.remove("d-none");
    
}

siguiente.addEventListener("click", sig);
anterior.addEventListener("click", ante);
enviar.addEventListener("click",envi)
