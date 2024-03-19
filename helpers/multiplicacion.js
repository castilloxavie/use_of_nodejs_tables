const fs = require("fs");
const colors= require('colors')

const crearTabla = async (base = 5, listar = false, hasta=10) => {
    try {
        let salida, consola = "";

        /* El código genera una tabla de multiplicar para el número 5 y la guarda */
        for (let multiplicador = 1; multiplicador <= hasta; multiplicador++) {
            salida += `${base} x ${multiplicador} = ${base * multiplicador}\n`;
            consola += `${base} ${'x'.gray} ${multiplicador} ${'='.red} ${base * multiplicador}\n`;

        }

        if (listar) {
            console.log("===============".green);
            console.log('Tabla del: '.yellow, colors.red(base) );
            console.log("===============".green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/table-${base}.txt`, salida);
        return `tabla${base}.txt `;
    } catch (error) {
        return error;
    }
};

module.exports = {
    crearTabla,
};
