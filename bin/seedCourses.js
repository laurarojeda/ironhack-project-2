const mongoose = require('mongoose');
const Course = require('../models/course.js');

mongoose.connect('mongodb://laurang:toystory3@ds213832.mlab.com:13832/ih-project-2', { useNewUrlParser: true });

Course.collection.drop();

const courses = [
  {
    name: 'Google Analytics',
    teacher: '5ba4d4ef84c5ce274ce296ef',
    image: 'https://boluda.com/files/curso-google-analytics-300x157.png',
    category: 'Marketing digital',
    resume: 'Cómo instalar, configurar, entender los informes y tomar decisiones que nos ayuden a mejorar nuestro SEO, usabilidad y objetivos',
    temary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur fugiat saepe reprehenderit non amet esse, modi autem possimus nihil, accusantium ad? Adipisci accusantium corrupti cum qui laboriosam pariatur natus?',
    video: 'https://www.youtube.com/embed/P3V01bDbIR0',
    students: [],
    reviews: [],
  },
  {
    name: 'Angular desde cero',
    teacher: '5ba4d4ef84c5ce274ce296ef',
    image: 'https://udemy-images.udemy.com/course/750x422/1075334_8b5f_4.jpg',
    category: 'Angular',
    resume: 'Angular es un framework de front-end impulsado por Google. Creado para desarrollar aplicaciones web, aplicaciones móviles o realizar procesos del lado del servidor utilizando NodeJS.',
    temary: 'Este curso se enfoca en llevarte de la mano desde cero hasta poder crear aplicaciones de todo tipo, que van desde páginas web de una sola página (SPA - single page application) hasta conectarnos a una base de datos para realizar proceso de inserción, actualización, eliminación y selección de información. Este curso contiene todo lo que tu necesitas para poder crear aplicaciones con este framework tan potente y veloz.',
    video: 'https://www.youtube.com/embed/J08zrkhfNf4',
    students: [],
    reviews: [],
  },
  {
    name: 'Google AdWords',
    teacher: '5ba4d4ef84c5ce274ce296ef',
    image: 'https://boluda.com/files/curso-online-adwords-300x157.png',
    category: 'Marketing digital',
    resume: '¿Sabéis que Google AdWords es la red de publicidad más grande del mundo? Y no es de extrañar, porque Google es la web más visitada del mundo, y por esa razón todo el mundo quiere anunciarse ahí.',
    temary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur fugiat saepe reprehenderit non amet esse, modi autem possimus nihil, accusantium ad? Adipisci accusantium corrupti cum qui laboriosam pariatur natus?',
    video: 'https://www.youtube.com/embed/P3V01bDbIR0',
    students: [],
    reviews: [],
  },
  {
    name: 'WordPress básico',
    teacher: '5ba4d4ef84c5ce274ce296ef',
    image: 'https://boluda.com/files/curso-wordpress-300x157.png',
    category: 'WordPress',
    resume: 'WordPress es sin duda alguna, el mejor gestor de contenidos del mundo, y el más utilizado con diferencia, llegando actualmente al superar el 58% de cuota de mercado. Y encima es open source y completamente gratuito.',
    temary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur fugiat saepe reprehenderit non amet esse, modi autem possimus nihil, accusantium ad? Adipisci accusantium corrupti cum qui laboriosam pariatur natus?',
    video: 'https://www.youtube.com/embed/P3V01bDbIR0',
    students: [],
    reviews: [],
  },
  {
    name: 'SEO para WordPress',
    teacher: '5ba4d4ef84c5ce274ce296ef',
    image: 'https://boluda.com/files/curso-wordpress-300x157.png',
    category: ['WordPress', 'SEO'],
    resume: 'WordPress es un CMS fantástico, y viene muy preparado para posicionar bien. Sin embargo, hay varias cosas que se deja en el tintero que pueden ayudar a posicionar mejor una web.',
    temary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur fugiat saepe reprehenderit non amet esse, modi autem possimus nihil, accusantium ad? Adipisci accusantium corrupti cum qui laboriosam pariatur natus?',
    video: 'https://www.youtube.com/embed/3V01bDbIR0',
    students: [],
    reviews: [],
  },
  {
    name: 'Javascript',
    teacher: '5ba4d4ef84c5ce274ce296ef',
    image: 'https://boluda.com/files/curso-javascript-300x157.png',
    category: ['Development'],
    resume: 'Curso de introducción a JavaScript en el que vamos a ver todo lo que da de sí este lenguaje, presente y futuro de la web (y fuera de ella).',
    temary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur fugiat saepe reprehenderit non amet esse, modi autem possimus nihil, accusantium ad? Adipisci accusantium corrupti cum qui laboriosam pariatur natus?',
    video: 'https://www.youtube.com/embed/DWnZi8G_kZs',
    students: [],
    reviews: [],
  },
  {
    name: 'JavaScript para HTML',
    teacher: '5ba4d4ef84c5ce274ce296ef',
    image: 'https://boluda.com/files/curso-javascript-para-html-300x157.jpg',
    category: ['Development', 'Web design'],
    resume: 'Curso de JavaScript para HTML. Veremos peculiaridades, cómo se vinculan ambos lenguajes, e incluso qué opciones hay para CSS y jQuery.',
    temary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur fugiat saepe reprehenderit non amet esse, modi autem possimus nihil, accusantium ad? Adipisci accusantium corrupti cum qui laboriosam pariatur natus?',
    video: 'https://www.youtube.com/embed/Gd0RBdFRvF0',
    students: [],
    reviews: [],
  },
  {
    name: 'Bootstrap',
    teacher: '5ba4d4ef84c5ce274ce296ef',
    image: 'https://boluda.com/files/curso-bootstrap-300x157.jpg',
    category: ['Web design'],
    resume: 'Curso de Bootstrap, un fantástico framework de CSS que nos permitirá realizar páginas web bonitas, claras y que sean adaptable a todos los dispositivos.',
    temary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur fugiat saepe reprehenderit non amet esse, modi autem possimus nihil, accusantium ad? Adipisci accusantium corrupti cum qui laboriosam pariatur natus?',
    video: 'https://www.youtube.com/embed/nug1pMke-y4',
    students: [],
    reviews: [],
  },
  {
    name: 'HTML5',
    teacher: '5ba4d4ef84c5ce274ce296ef',
    image: 'https://boluda.com/files/curso-html5-300x157.jpg',
    category: ['Web design'],
    resume: 'Curso de HTML5 en el que veremos las novedades, cambios y eliminaciones de el lenguaje de programación de la web respecto a sus versiones anteriores.',
    temary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur fugiat saepe reprehenderit non amet esse, modi autem possimus nihil, accusantium ad? Adipisci accusantium corrupti cum qui laboriosam pariatur natus?',
    video: 'https://www.youtube.com/embed/CdfMG_Qy00E',
    students: [],
    reviews: [],
  },
  {
    name: 'CSS',
    teacher: '5ba4d4ef84c5ce274ce296ef',
    image: 'https://boluda.com/files/curso-css-intermedio-300x157.jpg',
    category: ['Web design'],
    resume: 'Curso de CSS intermedio, en el que vamos a dar un paso más allá, para ver todo lo que puede dar de sí CSS más allá de la definición de estilos.',
    temary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur fugiat saepe reprehenderit non amet esse, modi autem possimus nihil, accusantium ad? Adipisci accusantium corrupti cum qui laboriosam pariatur natus?',
    video: 'https://www.youtube.com/embed/24gNhTcy6pw',
    students: [],
    reviews: [],
  },
  {
    name: 'PHP',
    teacher: '5ba4d4ef84c5ce274ce296ef',
    image: 'https://boluda.com/files/curso-php-300x157.png',
    category: ['Web development', 'Web design'],
    resume: 'Curso de introducción al PHP en el que vamos a ver los básicos del lenguaje de programación más importante de Internet, para aprender a programar en él.',
    temary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur fugiat saepe reprehenderit non amet esse, modi autem possimus nihil, accusantium ad? Adipisci accusantium corrupti cum qui laboriosam pariatur natus?',
    video: 'https://www.youtube.com/embed/UAW7tGAgew4',
    students: [],
    reviews: [],
  },
  {
    name: 'SQL',
    teacher: '5ba4d4ef84c5ce274ce296ef',
    image: 'https://boluda.com/files/curso-sql-300x157.jpg',
    category: ['WordPress', 'SEO'],
    resume: 'En este curso de SQL aprenderemos el lenguaje de las bases de datos, cómo conectar una base de datos a una web mediante PHP y cómo trabajar con ella.',
    temary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur fugiat saepe reprehenderit non amet esse, modi autem possimus nihil, accusantium ad? Adipisci accusantium corrupti cum qui laboriosam pariatur natus?',
    video: 'https://www.youtube.com/embed/c4P__KoPZwo',
    students: [],
    reviews: [],
  },
  {
    name: 'Swift',
    teacher: '5ba4d4ef84c5ce274ce296ef',
    image: 'https://boluda.com/files/curso-swift-300x157.png',
    category: ['Development'],
    resume: 'Curso de desarrollo de apps en iOS. Aprenderemos los básicos de Swift, los fundamentos de Xcode y crearemos nuestra primera App.',
    temary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur fugiat saepe reprehenderit non amet esse, modi autem possimus nihil, accusantium ad? Adipisci accusantium corrupti cum qui laboriosam pariatur natus?',
    video: 'https://www.youtube.com/embed/vcvWbcntq_c',
    students: [],
    reviews: [],
  },
];

Course.create(courses, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${courses.length} courses`);
  mongoose.connection.close();
});
