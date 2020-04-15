import { Schema, model } from "mongoose";

var materiasSchema = new Schema({
    nombre: {type:String,ref:'profesor',required:true },
    grupos:[{
        clave:{type:String,required:true}
    }],
    horarios:[{
        horario_inicio:{type:Number,required:true},
        horario_final:{type:Number,required:true},
        dia_semana:{type:Number,required:true},
        aula:{type:Schema.Types.ObjectId,ref:'aula',required:true }
    }]
},{collection:"materias"} )


export default model( 'materias' , materiasSchema);