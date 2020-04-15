import { Schema, model } from "mongoose";
var edificioSchema = new Schema({
    nombre: {type:String,required:true },
    ubicacion: {type:String,required:true },
    descripcion: {type:String,required:true },
    niveles: {type:Number,default:true },
},{collection:"edificio"} )


export default model('edificio' , edificioSchema);