import { Schema, model } from "mongoose";

var horario_profesorSchema = new Schema({
    profesor_id: {type:Schema.Types.ObjectId,ref:'profesor',required:true },
    horario_materia_id: {type:Schema.Types.ObjectId,ref:'horario_materia',required:true },
},{collection:"horario_profesor"} )


export default model( 'horario_profesor' , horario_profesorSchema);