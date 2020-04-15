import { Schema, model } from "mongoose";

var personaSchema = new Schema({
    nombre: {type:String,required:true },
    apellido: {type:String,required:true },
    fecha_nacimiento: {type:Date,required:true },
    id_nacionalidad: {type:Schema.Types.ObjectId,ref:'nacionalidad',required:true },
    sexo: {type:Boolean,default:true },
},{collection:"persona"} )


export default model( 'persona' , personaSchema);