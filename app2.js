//conexion BD
const mongoose = require ('mongoose')
const url_bd = "mongodb://localhost:27017/base2"
mongoose.connect(url_bd)
.then(() => {
    console.log('si jalo esta madre')
}
).catch((error)=>{
    console.log('no jalo esta madre')
})
//se realizara un esquema de la base de datos
const esquema_libro = new mongoose.Schema
(
    {
 name:{
    type: String
 },
 autor:{
    type: String
 },
 fecha:{
    type: Date
 }
    }
)

//crear tabla
const modelo_libro = new mongoose.model
("tabla de datos",esquema_libro)

modelo_libro.create({
    name : "camila",
    autor: "goku",
    fecha: 20/10/2005
})
