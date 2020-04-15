import { Schema, model } from "mongoose";

var nacionalidadSchema = new Schema({
    nombre: {type:String,required:true },
},{collection:"nacionalidad"} )


export default model( 'nacionalidad' , nacionalidadSchema);