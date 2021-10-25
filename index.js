const inquirer = require("inquirer");
inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'))

function run(){
    const questions = [
        {
            type:'input',
            name:'names',
            message:'Ingresa tu Nombre: ',
            validate: (names) =>{
                if(names  === ''){
                    return 'Porfavor ingresa un nombre valido'
                }
                return true;
            }
        },
        {
            type:'input',
            name:'dni',
            message:'Ingresa tu Dni: ',
            validate: (dni) =>{
                if(dni  === ''){
                    return 'Porfavor ingresa un rut valido'
                }
                return true;
            }
        },
        {
            type:'input',
            name:'phone',
            message:'Cual es tu numero : ',
            validate(value){
                const pass = value.match(
                    /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
                );
                if(pass){
                    return true;
                }
                return 'Porfavor ingresa tu numero . . . '
            },
        },
        {
            type:'rawlist',
            name:'trip',
            message:'¿ A donde quieres viajar ? ',
            choices: ['Arica y tarapaca' ,'Tarapaca' ,'Antofagasta', 'Atacama' , 'Coquimbo' , 'Valparaiso' , 'Metropolitana' , 'Ohiggins', 'Maule', 'Ñuble', 'Bio-bio' , 'Araucania' ,'Los rios' , 'los lagos' , 'aysen ', 'Maganallanes'],
            filter(value){
                return value.toLowerCase();
            }
        },
        {
            type:'list',
            name:'quantity',
            message:'¿ Que tipo de viaje deseas ? 1.- Pasaje normal - 2.-Dos pisos 3.-Salon Cama ',
            choices:[
                {
                    key: '1',
                    name:'Pasaje Normal',
                    value:'Bus normal'
                },
                {
                    key: '2',
                    name: 'dos pisos',
                    value: 'Doble Piso',
                },
                {
                    key: '3',
                    name: 'Salon Cama',
                    value: 'Viajes Salon Cama',
                },
            ],
        },
        {
            type: 'datetime',
            name: 'dt',
            message: 'Cuando deseas la reserva?',
            format: ['m', '/', 'd', '/', 'yy', ' ', 'h', ':', 'MM', ' ', 'TT'],
            date:{
                min: "12/23/2021",
                max: "12/10/2021"
            }
        },
        {
            type: 'input',
            name: 'comments',
            message: '¿ Algun comentario sobre su experiencia de compra?',
            default: 'No, todo bien Gracias!',
        },
        {
            type:'confirm',
            name: 'conf',
            message:'¿Estas seguro que deseas terminar la boleta? ',
            validate: (confirm) => {
                if(confirm !== 'y' || confirm !== 'n'){
                    return 'Respuesta incorrecta';
                }
                return true;
            }
        },
        {
            type: 'expand',
            name: 'Seats',
            message:'Que fila deseas? ,
            choices: [
                {
                    key: 'a',
                    value:'Fila 1',
                },
                {
                    key: 'b',
                    value:'Fila 2',
                },
                {
                    key:'c',
                    value:'Fila 3',
                },
                {
                    key:'d',
                    value:'Fila 4',
                },
                {
                    key:'e',
                    value:'Fila 5',
                },
                {
                    key:'f',
                    value:'Fila 6',
                }
            ]

        }
        
    ]
    inquirer.prompt(questions).then((answers) => {
        console.log("-------------------------------")
        console.log('      Detalle de Boleta       ');
        console.log("-------------------------------");
        console.info(JSON.stringify(answers, null, '  '));
    });
};



run();



/*

{
            type: 'expand',
            name:'Seats',
            message:'Cuando sera tu proximo viaje',
            column: [{

                name: 'Fila 1',
                value:'seats1'
            },
            {
                name:'Fila2',
                value:'seats2'
            },
            {
                name: "Cardio",
                value: "cardio"
            },
            ],

            rows:[
                {
                    name:'lunes',
                    value:[1]
                },
                {
                    name:'martes',
                    value:[2]
                },
                {
                    name:'Miercoles',
                    value:[3]
                },
                {
                    name:'Jueves',
                    value:[4]
                },
                {
                    name:'Viernes',
                    value:[5]
                },
                {
                    name:'Sabado',
                    value:[6]
                },
                {
                    name:'Domingo',
                    value:[7]
                }
            ]
        },
        {
            type: 'input',
            name: 'comments',
            message: '¿ Algun comentario sobre su experiencia de compra?',
            default: 'No, todo bien Gracias!',
        },
        {
            type:'confirm',
            name: 'conf',
            message:'¿Estas seguro que deseas terminar la boleta? ',
            validate: (confirm) => {
                if(confirm !== 'y' || confirm !== 'n'){
                    return 'Respuesta incorrecta';
                }
                return true;
            }
        }


*/

