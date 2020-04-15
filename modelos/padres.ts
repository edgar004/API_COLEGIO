import { Schema, model } from "mongoose";
var padresSchema = new Schema({
    persona_id: {type:Schema.Types.ObjectId,ref:'persona',required:true },
    ocupacion: {type:String,default:true },
    estudiantes_hijos: [{type:Schema.Types.ObjectId,ref:'estudiantes',required:true }],

},{collection:"padres"} )


export default model( 'padres' , padresSchema);