var alumno1 = {
  nombre: "juan",
  edad: 44,
  profesion: "doctor"
}
var alumno2 = {
nombre: "sergio",
edad: 29,
profesion: "mecanico"
}


function crearAlumno(nombre,edad,profesion) {

var al = {
nombre: nombre,
edad: edad,
profesion: profesion,
saludo: function() {console.log("Hola " + this.nombre);}
}
return al;
}

var alumno3 = crearAlumno("Jose",23,"pintor");
var alumno4 = crearAlumno("Sonia",25,"fotografa");

alumno3.saludo;




console.log(alumno1);
console.log(alumno2);
console.log(alumno3);
console.log(alumno4);