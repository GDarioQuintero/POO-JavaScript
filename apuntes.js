//OBJETO LITERA  

const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de html y css",
        "Curso practico de Html y css",
    ],
//Metodo del objeto
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};

//Natalia apruebe a otro curso

natalia.cursosAprobados.push("Curso de Responsive Design");
natalia.name = "Natis";
natalia.age += 1;
natalia.aprobarCurso("Curso basico  de javascript");

//PROTOTIPO

function Student4(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    
    //Metodo - una opcion
    /* this.aprobarCurso = function (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    } */
}
//Otra opcion de crear un metodo - queda en __proto__

Student4.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

//Instancia del prototipo
const juanita = new Student4("Juanita Suarez", 18, ["Curso de POO", "Curso de Fundamentos de programacion"]);


//PROTOTIPOS CON LA SINTAXIS DE CLASES

class Student2 {
    //Recibe los parametros como un objeto, los puede recibir en desorden - patron ror
    constructor({
        email = "",
        name,
        age,
        cursosAprobados = [], //Se le pueden dar valores por defecto

    }) {
        this.email = email;
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const german = new Student2("Dario", 26, ["Curso de POO", "Cuso de Fundamentos POO"]);

//Se envian los argumentos como un objeto
const pepe = new Student2({
    name: "Salome",
    age: 8,
    email: "salo@gmail.com",
});

















