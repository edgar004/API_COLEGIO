import { Schema, model } from "mongoose";
var profesorSchema = new Schema({
    id_persona: {type:Schema.Types.ObjectId,ref:'persona',required:true },
    fecha_contratacion: {type:Date,required:true },
    titulo : {type:String,required:true },
    estado: {type:Boolean,default:true },
},{collection:"profesor"} )


export default model( 'profesor' , profesorSchema);