//Trabajar conobjetos literales puede hacer que el codigo sea mas extenso y no
//reutilizable, impide la escalabilidad delcodigo.

//POO

//--------------PLatziClases-----------------------
//export 
class PlatziClases {
  constructor({
    name,
    videoID,
  }){
    this.name = name;
    this.videoID = videoID;
  }

  reproducir(){
      videoPlay(this.videoID);
  }    

  pausar(){
      videoStop(this.videoID);
  }
}

  function  videoPlay(id){
  const urlSectreta = "https://urlsecretisima" + id;
  console.log("Se esta reproduciendo el video " + urlSectreta);
}

function videoStop(id){
  const urlSectreta = "https://urlsecretisima" + id;
  console.log("Se esta Pausando el video "+ urlSectreta);
}

const clase7 = new PlatziClases({
  name: "Introduccion del curso y Css",
  videoID: "IDvideoClase",
});

//-----------------Rutas de aprendizaje ---------------------------

class RutasAprendizaje {
  constructor({
    name,
    cursos = [],
  }) {
    this.name = name;
    this.cursos = cursos;
  }
}

const escuelaWeb = new RutasAprendizaje({
  name: "Desarrollo Web",
  cursos: [
    "Curso Basico de html y css",
    "Fundamentos de programacion",
    "Curso de Responsive Desing"
  ],
});

const escuelaBd = new RutasAprendizaje({
  name: "Bases de datos",
  cursos: ["Fundamentos de Bases de datos",
  "Curso Introduccion a la terminal",
  "Fundamentos de ingenieria"
  ],
 });

 //-----------------------Curos---------------------------------
class Cursos {
  constructor({
    name,
    clases = [],
    isFree = false,
    lang = "spanish",
  }) {
    this._name = name;//El guion al piso es para que los demas usuarios sepan que no deben modificar el name
    this.clases = clases;
    this.isFree = isFree;
    this.lang = lang;
  }
  //Metodo get 
  get name(){
    return this._name;
  }

  //Metodo set, permite protejer de alguna manera que cualquiera no altere los datos
  set name(nuevoNombre){
    if(nuevoNombre === "Curso malito de programacion basica"){
      console.error("No puedes darle ese nombre");
    } else {
      this._name = nuevoNombre;
    }
  }
}

const htmlCss = new Cursos({
  name: "Curso definitivo de html y css",
  lang: "english",
  clases: [
    clase7,
  ],
});

const programacionBasica = new Cursos({
  name: "Curso de programacion basica",
  isFree: true,
  clases:[
    clase7,
  ],
});

//-------------------Clase Student--------------------------------

class Student {
  constructor ({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    aprovadosCursos = [],
    rutasAprendizaje = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.aprovadosCursos = aprovadosCursos ;
    this.rutasAprendizaje = rutasAprendizaje;
  }
  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}

//Las siguientes clases heredan los atributos y metodos de la clase padre Student

class FreeStudent extends Student {
  
  constructor(props){
    super(props);
  }

  approveCourse(newCourse){
    if (newCourse.isFree){
      this.aprovadosCursos.push(newCourse);
    } else {
      console.log("Lo siento " + this.name + ", Solo puedes tomar cursos abiertos");
    }
  }
}

class BasicStudent extends Student {
  
  constructor(props){
    super(props);
  }

  approveCourse(newCourse){
    if (newCourse.lang !== "english"){
      this.aprovadosCursos.push(newCourse);
    } else {
      console.log("Lo siento " + this.name + ", No puedes tomar cursos en ingles");
    }
  }
}

class ExpertStudent extends Student {
  
  constructor(props){
    super(props);
  }

  approveCourse(newCourse){
    this.aprovadosCursos.push(newCourse);
  }
}

class TeacherStudent extends Student {
  
  constructor(props){
    super(props);
  }

  approveCourse(newCourse){
    this.aprovadosCursos.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "Profesor",
    });
    comment.publicar();
  }
}


const pedrito = new FreeStudent({
  name: "Pedro Paez",
  email: "pedrito@gmail.com",
  username: "pedroFeliz",
  twitter: "ppaez",
  facebook: "pedropp",
  aprovadosCursos: [],
  rutasAprendizaje: [
    escuelaWeb,
    escuelaBd,
  ]
});

const fredyVega = new TeacherStudent({
  name: "Fredy Vega",
  email: "fredyVega@gmail.com",
  username: "fredyyVeguita",
  twitter: "fredyyVeguita",
  facebook: "fredyyVeguita",
  aprovadosCursos: [],
  rutasAprendizaje: [
    escuelaWeb,
    escuelaBd,
  ],
});


const camilo = new BasicStudent({
  name: "Camilo Diaz",
  email: "Camilito@gmail.com",
  username: "camiloFeliz",
  aprovadosCursos: [],
  rutasAprendizaje: [
    escuelaBd,
  ]
});

//---------------Comenterios---------------------------

class Comment {

  constructor({
    content,
    studentName,
    studentRole = "estudiante",
  }){
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar(){
    console.log(this.studentName + "(" + this.studentRole + ")");
    console.log(this.likes + "Likes");
    console.log(this.content);
  }
}