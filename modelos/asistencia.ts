import { Schema, model } from "mongoose";
var asistenciaSchema = new Schema({
    estudiante_id: {type:Schema.Types.ObjectId,ref:'estudiante',required:true },
    horarios_profesores_id: {type:Schema.Types.ObjectId,ref:'horario_profesores',required:true },
    estado_asistencia: {type:Number,default:true },
    excusas: {type:String,required:false },
    fecha: {type:Date,default:true },
},{collection:"asistencia"} )


export default model( 'asistencia' , asistenciaSchema);