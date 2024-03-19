const { crearTabla } = require("./helpers/multiplicacion.js");
const colors= require('colors')
const argv =require('./config/yargs.js');

console.clear();

crearTabla(argv.b, argv.l, argv.h)
    .then((nombreASrchivo) => console.log(nombreASrchivo.rainbow, "creado"))
    .catch((err) => console.log(err));
