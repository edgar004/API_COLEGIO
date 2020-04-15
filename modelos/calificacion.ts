import { Schema, model } from "mongoose";
var estudianteSchema = new Schema({
    estudiante_id: {type:Schema.Types.ObjectId,ref:'estudiante',required:true },
    calificacion: {type:Number,default:true },
    fecha: {type:Date,default:true },
    horarios_profesores_id: {type:Schema.Types.ObjectId,ref:'horario_profesores',required:true },
    secuencia: {type:Number,default:true },
},{collection:"calificacion"} )


export default model( 'calificacion' , estudianteSchema);