const {Schema, model} = require ("mongoose")
const articuloSchema = new Schema ({
    nombre: {type: String},
    precio: { type: Number },
    descripcion: { type: String }, 
    imagen: { type: String }
})

module.exports =model ("Articulo", articuloSchema)